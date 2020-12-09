import React from 'react';

import DemoSource from '../../../../components/DemoSource/DemoSource';
import TabPanel from '../../../../components/TabPanel/TabPanel';
import SendAdvancedNotificationButton from './Demo';

export type Props = { value: number; index: number };

export default function AdvancedNotificationTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/NativeUserInterface/Notification/Advanced/demo/demo.ts" />
      }
    >
      <SendAdvancedNotificationButton />
    </TabPanel>
  );
}
