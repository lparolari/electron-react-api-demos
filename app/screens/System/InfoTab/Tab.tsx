import React from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';

import Info from './Info';

export type Props = { value: number; index: number };

export default function InfoTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Menu/ApplicationMenu/demo/demo.ts" />
      }
    >
      <Grid container spacing={1}>
        <Grid item>
          <Info />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
