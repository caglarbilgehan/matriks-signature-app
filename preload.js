const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  saveSignature: (fileName, htmlContent) => ipcRenderer.invoke('save-signature', { fileName, htmlContent }),
  getVersion: () => ipcRenderer.invoke('get-version')
});
