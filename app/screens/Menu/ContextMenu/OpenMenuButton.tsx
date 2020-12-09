import React from 'react';

import Button from '@material-ui/core/Button';

import openContextMenu from './demo/demo';

export default function OpenMenuButton() {
  return (
    <Button color="primary" onClick={openContextMenu}>
      Apri menu contestuale
    </Button>
  );
}
