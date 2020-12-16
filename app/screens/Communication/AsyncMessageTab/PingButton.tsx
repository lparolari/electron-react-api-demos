import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = React.ComponentProps<typeof Button>;

export default function PingButton({ onClick, ...rest }: Props) {
  return (
    <Button variant="contained" color="primary" onClick={onClick} {...rest}>
      Ping
    </Button>
  );
}
