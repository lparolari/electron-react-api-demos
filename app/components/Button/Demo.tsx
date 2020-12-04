import { Button } from '@material-ui/core';
import React from 'react';

// Make `title` prop required.
export type Props = React.ComponentProps<typeof Button> & { title: string };

export default function DemoButton({ children, title, ...rest }: Props) {
  return (
    <Button {...rest} color="secondary" title={title}>
      {children}
    </Button>
  );
}
