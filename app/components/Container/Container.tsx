import React from 'react';

import { Container, makeStyles } from '@material-ui/core';

export type Props = React.ComponentProps<typeof Container> & {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function PaddedContainer({ children, ...rest }: Props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container} {...rest}>
      {children}
    </Container>
  );
}
