import React from 'react';

import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import { addProtocolHandler, openExternalPage } from './demo/demo';

export type Props = { value: number; index: number };

export default function ProtocolHandlerTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/System/CopyPasteTab/demo/demo.ts" />
      }
    >
      <Grid container spacing={1}>
        <Grid item>
          <Button color="primary" onClick={addProtocolHandler}>
            Aggiungi protocol handler
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={openExternalPage}
          >
            Apri demo
          </Button>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
