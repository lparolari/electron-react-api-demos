import { remote } from 'electron';
import {
  registerInfoDialogListener,
  openInfoDialog,
  openMenuDoc,
} from './actions';

export default function changeAppMenu() {
  const exampleMenu = {
    label: '&Esempio',
    submenu: [
      {
        label: '&Info',
        accelerator: 'Ctrl+I',
        click: () => {
          // We register the handler for dialog fired in first menu option.
          // This is needed only for example purposes.
          registerInfoDialogListener();
          openInfoDialog();
        },
      },
      {
        label: '&Documentazione',
        accelerator: 'Ctrl+D',
        click: openMenuDoc,
      },
    ],
  };

  const menuTemplate = [exampleMenu];

  // Set the new menu to this window.
  remote
    .getCurrentWindow()
    .setMenu(remote.Menu.buildFromTemplate(menuTemplate));
}
