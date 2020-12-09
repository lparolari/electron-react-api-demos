import React from 'react';

import Button from '@material-ui/core/Button';

import addToTray from './demo/demo';

export default function AddToTrayButton() {
  return (
    <Button variant="contained" color="primary" onClick={addToTray}>
      Aggiungi al tray
    </Button>
  );
}
