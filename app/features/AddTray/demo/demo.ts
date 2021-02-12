import { remote } from 'electron';
import path from '../../../constants/path';

export default function addToTray() {
  const tray = new remote.Tray(path('../resources/icons/32x32.png'));

  const contextMenu = remote.Menu.buildFromTemplate([
    { type: 'separator' },
    { type: 'radio', label: 'Fantastico' },
    { type: 'radio', label: 'Meraviglioso', checked: true },
    { type: 'radio', label: 'Stupendo' },
    { type: 'separator' },
    {
      type: 'normal',
      label: 'Esci',
      click: () => {
        remote.getCurrentWindow().destroy();
        remote.app.quit();
      },
    },
  ]);

  tray.setToolTip('Electron React Demo');
  tray.setContextMenu(contextMenu);
}
