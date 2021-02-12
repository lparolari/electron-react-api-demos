import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DemoSource from '../../components/DemoSource/DemoSource';
import TabPanel from '../../components/TabPanel/TabPanel';
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
import ExternalUrl from '../../components/ExternalUrl/ExternalUrl';
import Desc from './Desc';

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
        <DemoSource relativePahToCodeFile="features/AsyncMessage/demo/demo.ts" />
      }
      documentation={
        <>
          <Typography paragraph>
            Il modulo <code>ipc</code> (inter-process communication) permette di
            inviare e ricevere messaggi (sia sincroni che asincroni) tra il
            processo main e renderer.
          </Typography>
          <Typography paragraph>
            Il modulo è disponibile per entrambi i tipi di processi:{' '}
            <code>ipcMain</code> e <code>ipcRenderer</code>.
          </Typography>
          <Typography paragraph>
            Vedi la documentazione ufficiale per il{' '}
            <ExternalUrl
              url={new URL('https://www.electronjs.org/docs/api/ipc-main')}
            >
              processo main
            </ExternalUrl>{' '}
            e per il{' '}
            <ExternalUrl
              url={new URL('https://www.electronjs.org/docs/api/ipc-renderer')}
            >
              processo renderer
            </ExternalUrl>
            .
          </Typography>
        </>
      }
    >
      <Grid container spacing={5}>
        <Grid item container spacing={1}>
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
        <Grid item xs={12}>
          <Desc />
        </Grid>
      </Grid>
    </TabPanel>
  );
}
