import { BrowserWindow, remote } from 'electron';
import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import routes from '../../../constants/routes';
import url from '../../../constants/url';
import Doc from '../Doc';
import DemoButton from './DemoButton';
import FocusButton from './FocusButton';

type TabPanelProps = { value: number; index: number };

export default function UsingEventsWindowTab(props: TabPanelProps) {
  const [isVisible, setVisible] = useState(false);
  const [win, setWin] = useState<BrowserWindow | null>(null);

  const showFocusBtn = () => setVisible(true);
  const hideFocusBtn = () => setVisible(false);

  const focusWindow = () => {
    if (win) win.focus();
  };

  useEffect(() => {
    if (!win) return;

    win.setMenu(null);

    win.on('focus', hideFocusBtn);
    win.on('blur', showFocusBtn);
    win.on('closed', () => setWin(null));

    win.loadURL(`${url(routes().window().events())}`);
    win.show();
  }, [win]);

  const showDemo = () => {
    setWin(
      new remote.BrowserWindow({
        width: 400,
        height: 320,
        webPreferences: {
          nodeIntegration: true,
        },
      })
    );
  };

  return (
    <TabPanel
      {...props}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Window/UsingEventsWindow/Tab.tsx" />
      }
      documentation={<Doc />}
    >
      <Grid container spacing={1}>
        <Grid item>
          <DemoButton onClick={showDemo} />
        </Grid>
        <Grid item>
          {win && isVisible && <FocusButton onClick={focusWindow} />}
        </Grid>
      </Grid>
    </TabPanel>
  );
}
