import React from 'react';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import Doc from '../../components/WindowDoc';
import createFramelessWindow from './demo/demo';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewFramelessWindowTab(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      sourceCode={
        <DemoSource relativePahToCodeFile="features/NewFramelessWindow/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <DemoButton onClick={createFramelessWindow} />
    </TabPanel>
  );
}
