import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  setIsHover: (title) => ipcRenderer.send('set-is-hover', title),
  platform: process.platform,
});
