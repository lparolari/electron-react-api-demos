import React from 'react';

import Button from '@material-ui/core/Button';

import { unregisterDemoKeyboardShortcut } from './demo/demo';

export default function UnbindKeyboardShortcutButton() {
  return (
    <Button color="primary" onClick={unregisterDemoKeyboardShortcut}>
      Rimuovi binding shortcut
    </Button>
  );
}
