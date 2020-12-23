import React from 'react';

import Grid from '@material-ui/core/Grid';

import PaddedContainer from '../components/Container/Container';
import SystemTabs from './System/Tabs';

export default function SystemScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SystemTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
