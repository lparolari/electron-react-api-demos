import React from 'react';

import TabPanel from '../../../components/TabPanel/TabPanel';
import Source from '../Source';
import DemoButton from './DemoButton';

type TabPanelProps = { value: number; index: number };

export default function NewWindowTab(props: TabPanelProps) {
  return (
    <TabPanel
      {...props}
      sourceCode={
        <Source relativePahToCodeFile="screens/Window/NewWindow/DemoButton.tsx" />
      }
    >
      <DemoButton />
    </TabPanel>
  );
}
