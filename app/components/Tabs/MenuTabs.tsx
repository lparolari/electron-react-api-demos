import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import ApplicationMenuTab from '../../features/ApplicationMenu/Tab';
import ContextMenuTab from '../../features/ContextMenu/Tab';
import KeyboardShortcutTab from '../../features/KeyboardShortcut/Tab';

export default function MenuTabs() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <Paper>
      <AppBar position="static" color="transparent">
        <Tabs value={tab} onChange={handleTabSelect}>
          <Tab label="Menu applicazione" />
          <Tab label="Menu contestuale" />
          <Tab label="Scorciatoie da tastiera" />
        </Tabs>
      </AppBar>
      <ApplicationMenuTab value={tab} index={0} />
      <ContextMenuTab value={tab} index={1} />
      <KeyboardShortcutTab value={tab} index={2} />
    </Paper>
  );
}
