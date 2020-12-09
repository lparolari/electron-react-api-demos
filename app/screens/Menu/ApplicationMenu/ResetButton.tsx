import { remote } from 'electron';
import React from 'react';

import Button from '@material-ui/core/Button';

export default function ResetButton() {
  return (
    <Button
      color="primary"
      onClick={() =>
        remote.Menu.setApplicationMenu(remote.Menu.getApplicationMenu())
      }
    >
      Ripristina predefinito
    </Button>
  );
}
