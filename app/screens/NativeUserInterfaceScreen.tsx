import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import NotificationTabs from '../components/Tabs/NotificationsTabs';
import OpenExternalTabs from '../components/Tabs/OpenExternalTabs';
import TrayTabs from '../components/Tabs/TrayTabs';

export default function NativeUserInterfaceScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Typography gutterBottom variant="h6">
            Risorse esterne
          </Typography>
          <OpenExternalTabs />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography gutterBottom variant="h6">
            Notifiche
          </Typography>
          <NotificationTabs />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography gutterBottom variant="h6">
            Tray
          </Typography>
          <TrayTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
