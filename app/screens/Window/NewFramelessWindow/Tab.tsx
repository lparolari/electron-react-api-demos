import React from 'react';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewFramelessWindowTab(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Window/NewFramelessWindow/DemoButton.tsx" />
      }
    >
      <DemoButton />
    </TabPanel>
  );
}
