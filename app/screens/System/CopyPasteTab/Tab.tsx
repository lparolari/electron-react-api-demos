import React, { useState } from 'react';

import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import { copy, paste } from './demo/demo';

export type Props = { value: number; index: number };

export default function CopyPasteTab({ value, index }: Props) {
  const [text, setText] = useState('');

  const handleCopy = () => copy('Non è fantastico?');
  const handlePaste = () => setText(paste());

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
          <Button color="primary" onClick={handleCopy}>
            Copia
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" onClick={handlePaste}>
            Incolla
          </Button>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Premi CTRL+V o Incolla"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
