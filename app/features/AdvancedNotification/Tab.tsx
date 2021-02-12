import React from 'react';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import SendAdvancedNotificationButton from './SendAdvancedNotificationButton';
import Doc from './Doc';

export type Props = { value: number; index: number };

export default function AdvancedNotificationTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="features/AdvancedNotification/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <SendAdvancedNotificationButton />
    </TabPanel>
  );
}
