import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import NotificationTabs from './NativeUserInterface/Notification/Tabs';
import OpenExternalTabs from './NativeUserInterface/OpenExternal/Tabs';
import TrayTabs from './NativeUserInterface/Tray/Tabs';

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
