import { ipcRenderer, remote } from 'electron';

type MainCallback = (event: Electron.IpcMainEvent, ...args: unknown[]) => void;
type RendererCallback = (
  event: Electron.IpcRendererEvent,
  ...args: unknown[]
) => void;

const replyWithPong: MainCallback = (event: Electron.IpcMainEvent) => {
  event.sender.send('asynchronous-reply', 'pong');
};

function addMainListener(callback: MainCallback) {
  remote.ipcMain.on('asynchronous-message', callback);
}

function addRendererListener(callback: RendererCallback) {
  ipcRenderer.on('asynchronous-reply', callback);
}

function sendAsyncMessage() {
  ipcRenderer.send('asynchronous-message', 'ping');
}

export {
  MainCallback,
  RendererCallback,
  replyWithPong,
  addMainListener,
  addRendererListener,
  sendAsyncMessage,
};
