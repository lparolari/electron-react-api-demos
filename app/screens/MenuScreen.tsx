import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import TabPanel from '../components/TabPanel/TabPanel';
import ApplicationMenuTab from './Menu/ApplicationMenu/ApplicationMenuTab';

export default function MenuScreen() {
  const [tab, setTab] = useState(0);
  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Test</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static" color="transparent">
              <Tabs value={tab} onChange={handleTabSelect}>
                <Tab label="Menu applicazione" />
                <Tab label="Menu contestuale" />
              </Tabs>
            </AppBar>
            <ApplicationMenuTab value={tab} index={0} />
          </Paper>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
