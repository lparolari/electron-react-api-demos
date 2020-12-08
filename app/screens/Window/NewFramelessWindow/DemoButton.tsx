import { remote } from 'electron';
import React from 'react';

import Button from '@material-ui/core/Button';

import routes from '../../../constants/routes';
import url from '../../../constants/url';

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
          frame: false,
        });

        win.loadURL(`${url(routes().window().frameless())}`);
        win.show();
      }}
    >
      Crea finestra frameless
    </Button>
  );
}
