import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import PaddedContainer from '../components/Container/Container';
import ManagedWindowTab from './Window/ManagedWindow/Tab';
import NewFramelessWindowTab from './Window/NewFramelessWindow/Tab';
import NewWindowTab from './Window/NewWindow/Tab';
import UsingEventsWindowTab from './Window/UsingEventsWindow/Tab';

export default function WindowScreen() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static" color="transparent">
              <Tabs value={tab} onChange={handleTabSelect}>
                <Tab label="Nuova finestra" />
                <Tab label="Finestra borderless" />
                <Tab label="Finestra gestita" />
                <Tab label="Usa eventi" />
              </Tabs>
            </AppBar>

            <NewWindowTab value={tab} index={0} />
            <NewFramelessWindowTab value={tab} index={1} />
            <ManagedWindowTab value={tab} index={2} />
            <UsingEventsWindowTab value={tab} index={3} />
          </Paper>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
