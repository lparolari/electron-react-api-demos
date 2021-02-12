import { remote } from 'electron';

import routes from '../../../constants/routes';
import url from '../../../constants/url';

type OnMoveCallback = (newPosition: number[]) => void;
type OnResizeCallback = (newSize: number[]) => void;

const createManagedWindow = (
  onMove: OnMoveCallback,
  onResize: OnResizeCallback
) => {
  const win = new remote.BrowserWindow({
    width: 400,
    height: 320,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.setMenu(null);

  win.on('move', () => onMove(win.getPosition()));
  win.on('resize', () => onResize(win.getSize()));

  win.loadURL(`${url(routes().window().managed())}`);
  win.show();
};

export default createManagedWindow;
