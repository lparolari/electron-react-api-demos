import { ipcRenderer, remote, shell } from 'electron';

export function registerInfoDialogListener() {
  remote.ipcMain.once('open-information-dialog', () => {
    const options = {
      type: 'info',
      title: 'Informazione',
      message:
        "Il menu è uno strumento molto potente e può essere personalizzato per offire all'utente un'esperienza personalizzata e ricca",
      buttons: ['OK'],
    };
    remote.dialog.showMessageBox(remote.getCurrentWindow(), options);
  });
}

export function openInfoDialog() {
  ipcRenderer.send('open-information-dialog');
}

export function openMenuDoc() {
  shell.openExternal('https://www.electronjs.org/docs/api/menu');
}
