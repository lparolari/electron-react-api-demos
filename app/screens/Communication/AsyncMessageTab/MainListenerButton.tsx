import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = React.ComponentProps<typeof Button>;

export default function MainListenerButton({ onClick, ...rest }: Props) {
  return (
    <Button color="primary" onClick={onClick} {...rest}>
      Add main proc listener
    </Button>
  );
}
