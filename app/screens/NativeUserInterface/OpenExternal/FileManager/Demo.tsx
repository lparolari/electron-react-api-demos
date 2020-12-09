import React from 'react';

import Button from '@material-ui/core/Button';

import openUserHomeInFileManager from './demo/demo';

export default function OpenUserHomeButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={openUserHomeInFileManager}
    >
      Apri cartella home
    </Button>
  );
}
