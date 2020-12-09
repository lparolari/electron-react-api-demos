import { remote } from 'electron';
import { openInfoDialog, openExternalDocs } from './actions';

export default function changeAppMenu() {
  // Build a menu template.
  const exampleMenu = {
    label: '&Esempio',
    submenu: [
      {
        label: '&Info',
        accelerator: 'Ctrl+I',
        click: openInfoDialog,
      },
      {
        label: '&Documentazione',
        accelerator: 'Ctrl+D',
        click: openExternalDocs,
      },
    ],
  };

  const menuTemplate = [exampleMenu];

  // Set the new menu for this window.
  remote
    .getCurrentWindow()
    .setMenu(remote.Menu.buildFromTemplate(menuTemplate));
}
