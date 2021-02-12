import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import BasicNotificationTab from '../../features/BasicNotification/Tab';
import AdvancedNotificationTab from '../../features/AdvancedNotification/Tab';

export default function NotificationTabs() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <Paper>
      <AppBar position="static" color="transparent">
        <Tabs value={tab} onChange={handleTabSelect}>
          <Tab label="Notifica base" />
          <Tab label="Notifica avanzata" />
        </Tabs>
      </AppBar>

      <BasicNotificationTab value={tab} index={0} />
      <AdvancedNotificationTab value={tab} index={1} />
    </Paper>
  );
}
