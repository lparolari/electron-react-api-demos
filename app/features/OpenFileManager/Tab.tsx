import React from 'react';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import OpenUserHomeButton from './OpenUserHomeButton';
import Doc from './Doc';

export type Props = { value: number; index: number };

export default function OpenExternalFileManagerTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="features/OpenFileManager/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <OpenUserHomeButton />
    </TabPanel>
  );
}
