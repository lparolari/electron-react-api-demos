import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import DemoSource from '../../../../components/DemoSource/DemoSource';
import TabPanel from '../../../../components/TabPanel/TabPanel';
import OpenArtemisHomepageButton from './Demo';

export type Props = { value: number; index: number };

export default function OpenExternalUrlTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/NativeUserInterface/OpenExternal/Url/demo/demo.ts" />
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <OpenArtemisHomepageButton />
        </Grid>
        <Grid item>
          <Typography>
            Attenzione: è possibile aprire qualunque URL, a patto che il
            relativo protocollo sia gestito dal sistema operativo.
          </Typography>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
