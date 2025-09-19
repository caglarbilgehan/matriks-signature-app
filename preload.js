const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');
const fs = require('fs');

function assetFileUrl(relPath) {
  // In packaged apps, static files are placed under process.resourcesPath
  // In dev, __dirname points to project root
  const base = process.resourcesPath || __dirname;
  const full = path.join(base, relPath);
  return pathToFileURL(full).toString();
}

function resolveLogoUrl() {
  // Candidate paths in order of preference
  // 1) build/matriks-logo.png under resources (packaged) or project (dev prebuild)
  const baseRes = process.resourcesPath || __dirname;
  const cand1 = path.join(baseRes, 'build', 'matriks-logo.png');
  if (fs.existsSync(cand1)) return pathToFileURL(cand1).toString();

  // 2) assets/branding/matriks-logo.png in project (useful in dev without prebuild)
  const cand2 = path.join(__dirname, 'assets', 'branding', 'matriks-logo.png');
  if (fs.existsSync(cand2)) return pathToFileURL(cand2).toString();

  // 3) Fallback to remote URL (last resort)
  return 'https://matrikstr.com/email-signature/matriks-logo.png';
}

contextBridge.exposeInMainWorld('api', {
  saveSignature: (payload) => ipcRenderer.invoke('save-signature', payload),
  saveAsSignature: (payload) => ipcRenderer.invoke('save-as', payload),
  openSignatures: () => ipcRenderer.invoke('open-signatures'),
  getVersion: () => ipcRenderer.invoke('get-version'),
  checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
  toggleDevTools: () => ipcRenderer.invoke('toggle-devtools'),
  onUpdateProgress: (cb) => ipcRenderer.on('update-progress', (_e, data) => cb?.(data)),
  onUpdateStatus: (cb) => ipcRenderer.on('update-status', (_e, data) => cb?.(data)),
  writeClipboardHtml: (html) => ipcRenderer.invoke('write-clipboard-html', { html })
});

// Expose assets helper
contextBridge.exposeInMainWorld('assets', {
  url: (relPath) => assetFileUrl(relPath),
  logo: () => resolveLogoUrl()
});
