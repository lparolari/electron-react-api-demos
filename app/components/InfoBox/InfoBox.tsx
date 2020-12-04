import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export type Props = {
  title: string;
  emph: string;
  desc: string;
  icon: React.ReactNode;
  cta: React.ReactNode;
};

export default function InfoBox({ title, emph, desc, icon, cta }: Props) {
  const classes = useStyles();
  return (
    <>
      <Title>{title}</Title>

      <Grid container className={classes.depositContext}>
        <Grid xs={6} item>
          <Typography component="p" variant="h5">
            {emph}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            {desc}
          </Typography>{' '}
        </Grid>
        <Grid xs={6} item>
          <Grid container justify="flex-end">
            {icon}
          </Grid>
        </Grid>
      </Grid>

      <div>{cta}</div>
    </>
  );
}
