import React from 'react';

import Button from '@material-ui/core/Button';

import registerDemoKeyboardShortcut from './demo/demo';

export default function BindKeyboardShortcutButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={registerDemoKeyboardShortcut}
    >
      Registra shortcut CTRL+ALT+K
    </Button>
  );
}
