import { remote, shell } from 'electron';

export function openInfoDialog() {
  remote.dialog.showMessageBox({
    type: 'info',
    title: 'Informazione',
    message:
      "Il menu è uno strumento molto potente e può essere personalizzato per offire all'utente un'esperienza personalizzata e ricca",
    buttons: ['OK'],
  });
}

export function openExternalDocs() {
  shell.openExternal('https://www.electronjs.org/docs/api/menu');
}
