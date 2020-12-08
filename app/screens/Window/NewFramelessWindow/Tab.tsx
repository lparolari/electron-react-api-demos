import React from 'react';

import TabPanel from '../../../components/TabPanel/TabPanel';
import Source from '../Source';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewFramelessWindowTab(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      sourceCode={
        <Source relativePahToCodeFile="screens/Window/NewFramelessWindow/DemoButton.tsx" />
      }
    >
      <DemoButton />
    </TabPanel>
  );
}
