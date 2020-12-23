import React from 'react';

import Button from '@material-ui/core/Button';

export default function SecondaryDemoButton({
  children,
  ...rest
}: React.ComponentProps<typeof Button>) {
  return (
    <Button color="primary" variant="outlined" {...rest}>
      {children}
    </Button>
  );
}
