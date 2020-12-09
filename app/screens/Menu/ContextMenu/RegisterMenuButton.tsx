import React from 'react';

import Button from '@material-ui/core/Button';

import { registerMenuShowListener } from './demo/demo';

export default function RegisterMenuButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={registerMenuShowListener}
    >
      Registra menu contestuale
    </Button>
  );
}
