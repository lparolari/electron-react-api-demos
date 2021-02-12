import React from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import AddToTrayButton from './AddToTrayButton';
import Doc from './Doc';

export type Props = { value: number; index: number };

export default function AddTrayTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="features/AddTray/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AddToTrayButton />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
