import React from 'react';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import Doc from '../../screens/Window/Doc';
import createFramedWindowWithMenu from './demo/demo';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewWindowTab(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      sourceCode={
        <DemoSource relativePahToCodeFile="features/NewWindow/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <DemoButton onClick={createFramedWindowWithMenu} />
    </TabPanel>
  );
}
