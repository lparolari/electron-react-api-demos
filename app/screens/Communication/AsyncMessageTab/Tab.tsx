import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import {
  addMainListener,
  addRendererListener,
  RendererCallback,
  replyWithPong,
  sendAsyncMessage,
} from './demo/demo';
import MainListenerButton from './MainListenerButton';
import PingButton from './PingButton';
import PongBox from './PongBox';
import RendererListenerButton from './RendererListenerButton';

export type Props = { value: number; index: number };

export default function AsyncMessageTab({ value, index }: Props) {
  const [reply, setReply] = useState<string>('');

  const updateReply: RendererCallback = (_, arg) => setReply(arg as string);

  const handleRegisterMainListener = () => addMainListener(replyWithPong);
  const handleRegisterRendererListener = () => addRendererListener(updateReply);
  const handlePing = () => sendAsyncMessage();

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
          <MainListenerButton onClick={handleRegisterMainListener} />
        </Grid>
        <Grid item>
          <RendererListenerButton onClick={handleRegisterRendererListener} />
        </Grid>
        <Grid item>
          <PingButton onClick={handlePing} />
        </Grid>
        <Grid item>
          <PongBox value={reply} />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
