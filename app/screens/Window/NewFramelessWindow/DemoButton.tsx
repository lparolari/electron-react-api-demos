import { remote } from 'electron';
import React from 'react';

import PrimaryDemoButton from '../../../components/DemoButton/Primary';
import routes from '../../../constants/routes';
import url from '../../../constants/url';

export default function DemoButton() {
  return (
    <PrimaryDemoButton
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
    </PrimaryDemoButton>
  );
}
