import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = { onClick: () => void };

export default function DemoButton({ onClick }: Props) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Usa eventi finestra
    </Button>
  );
}
