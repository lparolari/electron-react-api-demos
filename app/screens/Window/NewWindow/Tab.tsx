import React from 'react';

import TabPanel from '../../../components/TabPanel/TabPanel';
import DemoSource from '../../../components/DemoSource/DemoSource';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewWindowTab(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Window/NewWindow/DemoButton.tsx" />
      }
    >
      <DemoButton />
    </TabPanel>
  );
}
