import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = React.ComponentProps<typeof Button>;

export default function MainListenerButton({ onClick, ...rest }: Props) {
  return (
    <Button color="primary" variant="outlined" onClick={onClick} {...rest}>
      Aggiungi ping listener
    </Button>
  );
}
