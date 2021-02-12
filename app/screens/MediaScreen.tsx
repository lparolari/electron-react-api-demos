import React from 'react';

import Grid from '@material-ui/core/Grid';

import PaddedContainer from '../components/Container/Container';
import MediaTabs from '../components/Tabs/MediaTabs';

export default function MediaScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MediaTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
