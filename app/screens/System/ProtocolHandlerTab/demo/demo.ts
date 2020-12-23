import { dialog, remote, shell } from 'electron';

import path from '../../../../constants/path';

function addProtocolHandler() {
  remote.app.setAsDefaultProtocolClient('electron-demo-react');

  remote.app.on('open-url', (_, url) => {
    dialog.showErrorBox('Bentornato', `Sei arrivato dall'url ${url}`);
  });
}

function openExternalPage() {
  shell.openExternal(
    `file://${path('screens/System/ProtocolHandlerTab/demo/index.html')}`
  );
}

export { addProtocolHandler, openExternalPage };
