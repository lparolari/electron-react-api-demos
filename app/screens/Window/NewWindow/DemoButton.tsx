import React from 'react';
import { BrowserWindow, remote } from 'electron';

import Button from '@material-ui/core/Button';

import routes from '../../../constants/routes';
import url from '../../../constants/url';

function buildMenu(win: BrowserWindow) {
  return remote.Menu.buildFromTemplate([
    {
      label: '&File',
      submenu: [
        {
          label: '&Close',
          accelerator: 'Ctrl+W',
          click: () => {
            win.close();
          },
        },
      ],
    },
  ]);
}

export default function DemoButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        const win = new remote.BrowserWindow({
          width: 400,
          height: 320,
          webPreferences: {
            nodeIntegration: true,
          },
        });

        win.setMenu(buildMenu(win));

        win.loadURL(`${url(routes().window().new())}`);
        win.show();
      }}
    >
      Crea finestra
    </Button>
  );
}
