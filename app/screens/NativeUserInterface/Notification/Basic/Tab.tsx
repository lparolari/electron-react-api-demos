import React from 'react';

import DemoSource from '../../../../components/DemoSource/DemoSource';
import TabPanel from '../../../../components/TabPanel/TabPanel';
import SendBasicNotificationButton from './Demo';

export type Props = { value: number; index: number };

export default function BasicNotificationTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/NativeUserInterface/Notification/Basic/demo/demo.ts" />
      }
    >
      <SendBasicNotificationButton />
    </TabPanel>
  );
}
