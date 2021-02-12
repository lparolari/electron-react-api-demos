import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import OpenExternalFileManagerTab from '../../features/OpenFileManager/Tab';
import OpenExternalUrlTab from '../../features/OpenUrl/Tab';

export default function OpenExternalTabs() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <Paper>
      <AppBar position="static" color="transparent">
        <Tabs value={tab} onChange={handleTabSelect}>
          <Tab label="Apri file manager" />
          <Tab label="Apri link" />
        </Tabs>
      </AppBar>

      <OpenExternalFileManagerTab value={tab} index={0} />
      <OpenExternalUrlTab value={tab} index={1} />
    </Paper>
  );
}
