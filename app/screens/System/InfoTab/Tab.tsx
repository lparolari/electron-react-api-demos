import React from 'react';

import Grid from '@material-ui/core/Grid';

import TabPanel from '../../../components/TabPanel/TabPanel';
import Doc from './Doc';
import Info from './Info';
import Source from './Source';

export type Props = { value: number; index: number };

export default function InfoTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={<Source />}
      documentation={<Doc />}
    >
      <Grid container spacing={1}>
        <Grid item>
          <Info />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
