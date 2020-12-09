import { Grid } from '@material-ui/core';
import React from 'react';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import OpenMenuButton from './OpenMenuButton';
import RegisterRightClickButton from './RegisterRightClickButton';

export type Props = { value: number; index: number };

export default function ContextMenuTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Menu/ContextMenu/demo/demo.ts" />
      }
    >
      <Grid container spacing={1}>
        <Grid item>
          <OpenMenuButton />
        </Grid>
        <Grid item>
          <RegisterRightClickButton />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
