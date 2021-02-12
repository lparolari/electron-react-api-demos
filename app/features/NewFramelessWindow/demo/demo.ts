import { remote } from 'electron';

import routes from '../../../constants/routes';
import url from '../../../constants/url';

const createFramelessWindow = () => {
  const win = new remote.BrowserWindow({
    width: 400,
    height: 320,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
  });

  win.loadURL(`${url(routes().window().frameless())}`);
  win.show();
};

export default createFramelessWindow;
