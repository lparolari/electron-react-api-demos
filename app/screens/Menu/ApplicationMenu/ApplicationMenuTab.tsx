import React from 'react';
import DemoSource from '../../../components/DemoSource/DemoSource';

import TabPanel from '../../../components/TabPanel/TabPanel';
import DemoButton from './DemoButton';
import ResetButton from './ResetButton';

export type Props = { value: number; index: number };

export default function ApplicationMenuTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Menu/ApplicationMenu/demo/demo.ts" />
      }
    >
      <DemoButton />
      <ResetButton />
    </TabPanel>
  );
}
