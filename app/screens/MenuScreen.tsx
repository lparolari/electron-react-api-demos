import React from 'react';

import Grid from '@material-ui/core/Grid';

import PaddedContainer from '../components/Container/Container';
import MenuTabs from '../components/Tabs/MenuTabs';

export default function MenuScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MenuTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
