import { BrowserWindow, remote } from 'electron';
import React, { useEffect, useState } from 'react';

import TabPanel from '../../../components/TabPanel/TabPanel';
import routes from '../../../constants/routes';
import url from '../../../constants/url';
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
    <TabPanel {...props} sourceCode={<></>}>
      <DemoButton onClick={showDemo} />
      {win && isVisible && <FocusButton onClick={focusWindow} />}
    </TabPanel>
  );
}
