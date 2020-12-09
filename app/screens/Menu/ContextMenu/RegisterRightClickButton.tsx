import React from 'react';

import Button from '@material-ui/core/Button';

import { registerRightClickListener } from './demo/demo';

export default function RegisterRightClickButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={registerRightClickListener}
    >
      Registra menu contestuale su tasto destro
    </Button>
  );
}
