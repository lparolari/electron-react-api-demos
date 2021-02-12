import React from 'react';

import { Grid } from '@material-ui/core';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
import BindKeyboardShortcutButton from './BindKeyboardShortcutButton';
import Doc from './Doc';
import UnbindKeyboardShortcutButton from './UnbindKeyboardShortcutButton';

export type Props = { value: number; index: number };

export default function KeyboardShortcutTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="features/KeyboardShortcut/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <Grid container spacing={1}>
        <Grid item>
          <BindKeyboardShortcutButton />
        </Grid>
        <Grid item>
          <UnbindKeyboardShortcutButton />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
