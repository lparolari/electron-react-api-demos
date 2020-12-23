import React from 'react';

import Grid from '@material-ui/core/Grid';

import PaddedContainer from '../components/Container/Container';
import MessagesTabs from './Communication/Tabs';

export default function CommunicationScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MessagesTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
