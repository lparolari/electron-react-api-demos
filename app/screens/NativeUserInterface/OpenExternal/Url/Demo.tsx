import React from 'react';

import Button from '@material-ui/core/Button';

import openArtemisHomepageExternal from './demo/demo';

export default function OpenArtemisHomepageButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={openArtemisHomepageExternal}
    >
      Apri homepage programma Artemis
    </Button>
  );
}
