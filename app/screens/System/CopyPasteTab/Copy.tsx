import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = React.ComponentProps<typeof Button>;

export default function CopyButton({ onClick, ...rest }: Props) {
  return (
    <Button color="primary" variant="contained" onClick={onClick} {...rest}>
      Copia
    </Button>
  );
}
