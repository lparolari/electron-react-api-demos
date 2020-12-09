import { ipcRenderer, remote } from 'electron';

import menu from './menu';

export default function openContextMenu() {
  ipcRenderer.send('show-context-menu');
}

export function registerMenuShowListener() {
  remote.ipcMain.on('show-context-menu', () => {
    menu.popup();
  });
}

export function registerRightClickListener() {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.popup();
  });
}
