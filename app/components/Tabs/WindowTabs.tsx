import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import ManagedWindowTab from '../../features/ManagedWindow/Tab';
import NewFramelessWindowTab from '../../features/NewFramelessWindow/Tab';
import NewWindowTab from '../../features/NewWindow/Tab';
import UsingEventsWindowTab from '../../features/UsingEventsWindow/Tab';

export default function WindowTabs() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
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
  );
}
