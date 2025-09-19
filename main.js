const { app, BrowserWindow, ipcMain, dialog, shell, clipboard, Menu, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    show: false,
    icon: path.join(__dirname, 'build', 'app-icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    },
    autoHideMenuBar: true
  });

// IPC: write HTML to system clipboard (also writes a plain text fallback)
ipcMain.handle('write-clipboard-html', async (_e, { html }) => {
  try {
    const plain = String(html || '')
      .replace(/<!--([\s\S]*?)-->/g, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ') // strip tags
      .replace(/\s+/g, ' ')
      .trim();
    clipboard.write({ html: String(html || ''), text: plain });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || String(e) };
  }
});

  // Remove the default app menu
  try { Menu.setApplicationMenu(null); } catch(_) {}
  try { win.setMenuBarVisibility(false); } catch(_) {}

  win.loadFile(path.join(__dirname, 'index.html'));

  // Maximize when ready and then show the window
  win.once('ready-to-show', () => {
    try { win.maximize(); } catch (_) {}
    win.show();
  });
}

// Auto-update setup (GitHub Releases). Works only when packaged.
function setupAutoUpdate() {
  if (!app.isPackaged) return; // skip in dev
  try {
    // Lazy-require to avoid crashing in dev if module isn't installed
    const { autoUpdater } = require('electron-updater');
    autoUpdater.allowPrerelease = true; // we are using beta tags
    autoUpdater.autoDownload = true;

    autoUpdater.on('update-available', (info) => {
      console.log('Update available:', info.version);
      dialog.showMessageBox({
        type: 'info',
        title: 'Güncelleme Mevcut',
        message: `Yeni sürüm mevcut: ${info.version}. İndiriliyor...`,
        buttons: ['Tamam']
      });
    });

    // Progress feedback (global)
    autoUpdater.on('download-progress', (progress) => {
      try {
        const win = BrowserWindow.getAllWindows()[0];
        if (win) {
          win.webContents.send('update-progress', {
            percent: Math.round(progress?.percent || 0)
          });
        }
      } catch (_) {}
    });

    // No update available (global)
    autoUpdater.on('update-not-available', () => {
      try {
        const win = BrowserWindow.getAllWindows()[0];
        if (win) {
          win.webContents.send('update-status', { type: 'uptodate' });
        }
      } catch (_) {}
    });

    autoUpdater.on('update-downloaded', (info) => {
      console.log('Update downloaded, version:', info.version);
      dialog.showMessageBox({
        type: 'info',
        title: 'Güncelleme İndirildi',
        message: `${info.version} sürümü indirildi. Uygulamayı yeniden başlatmak ister misiniz?`,
        buttons: ['Daha Sonra', 'Yeniden Başlat']
      }).then(({ response }) => {
        if (response === 1) autoUpdater.quitAndInstall();
      });
    });

    autoUpdater.on('error', (err) => {
      console.error('Update error:', err);
      // Build a concise, user-friendly error
      const raw = (err?.message || '').toString();
      let friendly = 'Güncelleme kontrol edilirken bir sorun oluştu.';
      if (/Cannot find latest\.yml|latest\.yml/i.test(raw)) {
        friendly = 'Güncelleme bulunamadı veya yayın dosyaları eksik. Lütfen daha sonra tekrar deneyin.';
      } else if (/404|releases\.atom|Not Found/i.test(raw)) {
        friendly = 'Güncelleme kaynağına erişilemedi (404). Lütfen internet bağlantınızı ve yayın durumunu kontrol edin.';
      }
      // Show minimal dialog only for auto flow (not manual)
      if (!manualCheckInProgress) {
        dialog.showErrorBox('Güncelleme Hatası', friendly);
      }
      if (manualCheckInProgress) {
        manualCheckInProgress = false;
        // Re-throw a simplified error so renderer can show status text briefly
        throw new Error(friendly);
      }
    });

    // Track manual update checks to handle errors differently
    let manualCheckInProgress = false;

    // Check for updates on startup (after 1.5s delay to let app load)
    setTimeout(() => {
      try {
        const win = BrowserWindow.getAllWindows()[0];
        if (win && !win.isMinimized()) {
          autoUpdater.checkForUpdates().catch(console.error);
        }
      } catch (e) {
        console.error('Auto-update check failed on startup:', e);
      }
    }, 1500);
  } catch (err) {
    console.error('Failed to initialize auto-updater:', err);
  }
}

// Always register manual update IPC handler so dev mode doesn't crash
ipcMain.handle('check-for-updates', async () => {
  try {
    if (!app.isPackaged) {
      // In dev, just inform user that updates require packaged app
      dialog.showMessageBox({
        type: 'info',
        title: 'Güncelleme (Geliştirme Modu)',
        message: 'Güncelleme kontrolü yalnızca kurulu (packaged) sürümde çalışır.',
        buttons: ['Tamam']
      });
      return { ok: false, dev: true };
    }

    // Packaged: require updater locally and check
    const { autoUpdater } = require('electron-updater');
    const result = await autoUpdater.checkForUpdates();
    return { ok: true, version: result?.updateInfo?.version };
  } catch (err) {
    console.error('Manual update check failed:', err);
    return { ok: false, error: err?.message || String(err) };
  }
});

// IPC handler to save signature
ipcMain.handle('save-signature', async (event, { fileName, htmlContent }) => {
  try {
    if (!fileName || !fileName.trim()) {
      throw new Error('Lütfen bir imza adı girin.');
    }

    // Normalize filename (remove illegal characters for Windows)
    const safeName = fileName.replace(/[\\/:*?"<>|]/g, '').trim();

    let targetDir = null;

    if (process.platform === 'win32') {
      // Use Electron API for reliability
      const appData = app.getPath('appData');
      if (!appData) {
        throw new Error('APPDATA yolu alınamadı.');
      }
      targetDir = path.join(appData, 'Microsoft', 'Signatures');
    } else {
      // Ask user to choose a destination folder on non-Windows platforms
      const res = await dialog.showOpenDialog({
        title: 'İmza klasörünü seçin',
        properties: ['openDirectory', 'createDirectory']
      });
      if (res.canceled || !res.filePaths[0]) {
        throw new Error('Klasör seçilmedi.');
      }
      targetDir = res.filePaths[0];
    }

    // Ensure directory exists
    fs.mkdirSync(targetDir, { recursive: true });

    const targetPath = path.join(targetDir, `${safeName}.htm`);

    // Inline CSS (if any <style> blocks or class-based styles exist) for maximum email client compatibility
    let inlined = htmlContent;
    try {
      const juice = require('juice');
      inlined = juice(inlined);
    } catch (e) {
      // If inlining fails or module cannot be loaded, continue with original HTML
    }

    // Write the file with UTF-8 BOM to avoid charset issues in Outlook.
    // BOM ensures Outlook recognizes the file as UTF-8.
    const contentWithBom = (process.platform === 'win32') ? ('\uFEFF' + inlined) : inlined;
    fs.writeFileSync(targetPath, contentWithBom, { encoding: 'utf8' });

    return { ok: true, path: targetPath };
  } catch (err) {
    return { ok: false, error: err.message || String(err) };
  }
});

// IPC handler to get app version
ipcMain.handle('get-version', async () => {
  try {
    return { ok: true, version: app.getVersion() };
  } catch (e) {
    return { ok: false, error: e?.message || String(e) };
  }
});

// IPC handler: Save As (choose path manually)
ipcMain.handle('save-as', async (event, { fileName, htmlContent }) => {
  try {
    const safeName = String(fileName || 'Email Imzasi')
      .replace(/[\/:*?"<>|]/g, '')
      .trim() || 'Email Imzasi';

    const { canceled, filePath } = await dialog.showSaveDialog({
      title: 'İmza dosyasını kaydet',
      defaultPath: `${safeName}.htm`,
      filters: [
        { name: 'HTML', extensions: ['htm', 'html'] },
        { name: 'Tüm Dosyalar', extensions: ['*'] }
      ]
    });
    if (canceled || !filePath) return { ok: false, error: 'Kaydetme iptal edildi.' };

    let inlined = htmlContent;
    try {
      const juice = require('juice');
      inlined = juice(inlined);
    } catch (_) {}

    const contentWithBom = (process.platform === 'win32') ? ('\uFEFF' + inlined) : inlined;
    fs.writeFileSync(filePath, contentWithBom, { encoding: 'utf8' });
    return { ok: true, path: filePath };
  } catch (err) {
    return { ok: false, error: err?.message || String(err) };
  }
});

app.whenReady().then(() => {
  createWindow();
  setupAutoUpdate();
  // Global shortcut to toggle DevTools with F12 only
  try {
    globalShortcut.register('F12', () => {
      const win = BrowserWindow.getAllWindows()[0];
      if (win) {
        try { win.webContents.toggleDevTools(); } catch (_) {}
      }
    });
  } catch (_) {}

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  try { globalShortcut.unregisterAll(); } catch (_) {}
});

// IPC: toggle DevTools from renderer
ipcMain.handle('toggle-devtools', async () => {
  try {
    const win = BrowserWindow.getAllWindows()[0];
    if (win) {
      try { win.webContents.toggleDevTools(); } catch (_) {}
      return { ok: true };
    }
    return { ok: false, error: 'No active window' };
  } catch (e) {
    return { ok: false, error: e?.message || String(e) };
  }
});

// Open signatures folder (Windows default path)
ipcMain.handle('open-signatures', async () => {
  try {
    let dir = null;
    if (process.platform === 'win32') {
      // Use Electron's app.getPath for consistent APPDATA
      const appData = app.getPath('appData');
      if (!appData) throw new Error('APPDATA yolu alınamadı.');
      dir = path.join(appData, 'Microsoft', 'Signatures');
    } else {
      // For non-Windows, ask user to choose a folder (fallback)
      const res = await dialog.showOpenDialog({ properties: ['openDirectory', 'createDirectory'] });
      if (res.canceled || !res.filePaths[0]) throw new Error('Klasör seçilmedi.');
      dir = res.filePaths[0];
    }
    fs.mkdirSync(dir, { recursive: true });
    const err = await shell.openPath(dir);
    if (err) throw new Error(err);
    return { ok: true, path: dir };
  } catch (e) {
    return { ok: false, error: e?.message || String(e) };
  }
});
