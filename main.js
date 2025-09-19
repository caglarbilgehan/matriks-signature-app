const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
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
    }
  });

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
    autoUpdater.allowPrerelease = true; // we are using beta tags
    autoUpdater.autoDownload = true;

    autoUpdater.on('error', (err) => {
      // optional: log
    });

    autoUpdater.on('update-downloaded', async () => {
      const result = await dialog.showMessageBox({
        type: 'question',
        buttons: ['Şimdi Yükle', 'Daha Sonra'],
        defaultId: 0,
        cancelId: 1,
        title: 'Güncelleme hazır',
        message: 'Yeni bir sürüm indirildi. Şimdi yüklemek ister misiniz?'
      });
      if (result.response === 0) {
        autoUpdater.quitAndInstall();
      }
    });

    // Check for updates shortly after ready
    setTimeout(() => {
      try { autoUpdater.checkForUpdatesAndNotify(); } catch (_) {}
    }, 1500);
  } catch (_) { /* ignore */ }
}

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
      const appData = process.env.APPDATA || '';
      if (!appData) {
        throw new Error('APPDATA bulunamadı.');
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

app.whenReady().then(() => {
  createWindow();
  setupAutoUpdate();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
