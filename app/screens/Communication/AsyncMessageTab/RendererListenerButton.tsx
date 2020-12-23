import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = React.ComponentProps<typeof Button>;

export default function RendererListenerButton({ onClick, ...rest }: Props) {
  return (
    <Button color="primary" variant="outlined" onClick={onClick} {...rest}>
      Aggiungi pong listener
    </Button>
  );
}
