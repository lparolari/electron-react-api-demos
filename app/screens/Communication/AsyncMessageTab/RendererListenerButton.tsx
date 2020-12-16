import React from 'react';

import Button from '@material-ui/core/Button';

export type Props = React.ComponentProps<typeof Button>;

export default function RendererListenerButton({ onClick, ...rest }: Props) {
  return (
    <Button color="primary" onClick={onClick} {...rest}>
      Add renderer proc listener
    </Button>
  );
}
