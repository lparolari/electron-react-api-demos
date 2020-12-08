import { remote } from 'electron';
import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import TabPanel from '../../../components/TabPanel/TabPanel';
import routes from '../../../constants/routes';
import url from '../../../constants/url';
import DemoButton from './DemoButton';
import Show from './Show';

type TabPanelProps = { value: number; index: number };

export default function ManagedWindowTab(props: TabPanelProps) {
  // Component state
  const [pos, setPos] = useState([0, 0]);
  const [size, setSize] = useState([0, 0]);

  // Demo button click handler
  const handleClick = () => {
    const win = new remote.BrowserWindow({
      width: 400,
      height: 320,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    win.setMenu(null);

    win.on('move', () => setPos(win.getPosition()));
    win.on('resize', () => setSize(win.getSize()));

    win.loadURL(`${url(routes().window().managed())}`);
    win.show();
  };

  return (
    <TabPanel {...props} sourceCode={<></>}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DemoButton onClick={handleClick} />
        </Grid>
        <Grid item xs={12}>
          <Show pos={pos} size={size} />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
