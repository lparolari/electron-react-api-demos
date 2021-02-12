import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import TabPanel from '../../components/TabPanel/TabPanel';
import CopyButton from './Copy';
import { copy, paste } from './demo/demo';
import Doc from './Doc';
import PasteButton from './Paste';
import Source from './Source';

export type Props = { value: number; index: number };

export default function CopyPasteTab({ value, index }: Props) {
  const [text, setText] = useState('');

  const handleCopy = () => copy('Non è fantastico?');
  const handlePaste = () => setText(paste());

  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={<Source />}
      documentation={<Doc />}
    >
      <Grid container spacing={1}>
        <Grid item>
          <CopyButton onClick={handleCopy} />
        </Grid>
        <Grid item>
          <PasteButton onClick={handlePaste} />
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
