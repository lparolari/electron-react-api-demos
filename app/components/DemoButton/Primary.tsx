import React from 'react';

import Button from '@material-ui/core/Button';

export default function PrimaryDemoButton({
  children,
  ...rest
}: React.ComponentProps<typeof Button>) {
  return (
    <Button color="primary" variant="contained" {...rest}>
      {children}
    </Button>
  );
}
