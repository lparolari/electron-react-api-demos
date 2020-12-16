import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import InfoTab from './InfoTab/Tab';
import CopyPasteTab from './CopyPasteTab/Tab';

export default function SystemTabs() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <Paper>
      <AppBar position="static" color="transparent">
        <Tabs value={tab} onChange={handleTabSelect}>
          <Tab label="Info app e sistema" />
          <Tab label="Copia &amp; Incolla" />
        </Tabs>
      </AppBar>

      <InfoTab value={tab} index={0} />
      <CopyPasteTab value={tab} index={1} />
    </Paper>
  );
}
