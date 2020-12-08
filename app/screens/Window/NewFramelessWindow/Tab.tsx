import React from 'react';

import TabPanel from '../../../components/TabPanel/TabPanel';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewFramelessWindowTab(props: TabPanelProps) {
  return (
    <TabPanel {...props}>
      <DemoButton />
    </TabPanel>
  );
}
