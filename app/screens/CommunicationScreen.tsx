import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import ExternalUrl from '../components/ExternalUrl/ExternalUrl';
import MessagesTabs from './Communication/Tabs';

export default function CommunicationScreen() {
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
        <Grid item xs={12} container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MessagesTabs />
          </Grid>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
