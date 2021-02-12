import React from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import DemoButton from './DemoButton';
import Doc from './Doc';
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
      documentation={<Doc />}
    >
      <Grid container spacing={1}>
        <Grid item>
          <DemoButton />
        </Grid>
        <Grid item>
          <ResetButton />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
