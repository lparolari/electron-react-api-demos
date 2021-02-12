import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ScreenshotTab from '../../features/Screenshot/Tab';

export default function MediaTabs() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <Paper>
      <AppBar position="static" color="transparent">
        <Tabs value={tab} onChange={handleTabSelect}>
          <Tab label="Screenshot" />
        </Tabs>
      </AppBar>

      <ScreenshotTab value={tab} index={0} />
    </Paper>
  );
}
