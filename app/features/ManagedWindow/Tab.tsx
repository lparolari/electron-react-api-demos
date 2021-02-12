import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import DemoButton from './DemoButton';
import Show from './Show';
import Doc from '../../components/WindowDoc';
import createManagedWindow from './demo/demo';

type TabPanelProps = { value: number; index: number };

export default function ManagedWindowTab(props: TabPanelProps) {
  // Component state
  const [pos, setPos] = useState([0, 0]);
  const [size, setSize] = useState([0, 0]);

  // Demo button click handler: create a framed windows with `setPos`
  // and `setSize` callbacks.
  const handleClick = () => createManagedWindow(setPos, setSize);

  return (
    <TabPanel
      {...props}
      sourceCode={
        <>
          <DemoSource relativePahToCodeFile="features/ManagedWindow/demo/demo.ts" />
          <DemoSource relativePahToCodeFile="features/ManagedWindow/Tab.tsx" />
        </>
      }
      documentation={<Doc />}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DemoButton onClick={handleClick} />
        </Grid>
        <Grid item xs={12}>
          <Show pos={pos} size={size} />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
