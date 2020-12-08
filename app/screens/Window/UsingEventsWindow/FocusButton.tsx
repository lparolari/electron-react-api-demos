import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = { onClick: () => void };

export default function FocusButton({ onClick }: Props) {
  return (
    <Button color="secondary" onClick={onClick}>
      Riporta in primo piano
    </Button>
  );
}
