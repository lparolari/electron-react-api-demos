import React from 'react';

import Button from '@material-ui/core/Button';

import changeAppMenu from './demo/demo';

export default function DemoButton() {
  return (
    <Button variant="contained" color="primary" onClick={changeAppMenu}>
      Cambia menu
    </Button>
  );
}
