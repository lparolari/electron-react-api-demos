import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import ExternalUrl from '../components/ExternalUrl/ExternalUrl';
import SystemTabs from './System/Tabs';

export default function SystemScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography paragraph>TODO</Typography>
          <Typography paragraph>TODO</Typography>
          <Typography paragraph>
            Vedi la{' '}
            <ExternalUrl url={new URL('http://a.com')}>
              documentazione ufficiale
            </ExternalUrl>
            .
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SystemTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
