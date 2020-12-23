import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PrimaryDemoButton from '../../../components/DemoButton/Primary';
import SecondaryDemoButton from '../../../components/DemoButton/Secondary';
import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import { addProtocolHandler, openExternalPage } from './demo/demo';
import Doc from './Doc';

export type Props = { value: number; index: number };

export default function ProtocolHandlerTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/System/ProtocolHandlerTab/demo/demo.ts" />
      }
      documentation={<Doc />}
    >
      <Grid container spacing={1}>
        <Grid item>
          <SecondaryDemoButton onClick={addProtocolHandler}>
            Aggiungi protocol handler
          </SecondaryDemoButton>
        </Grid>
        <Grid item>
          <PrimaryDemoButton onClick={openExternalPage}>
            Apri demo
          </PrimaryDemoButton>
        </Grid>
        <Grid item>
          <Typography gutterBottom>
            Il pulsante <i>Aggiungi protocol handler</i> aggiunge il gestore per
            il protocollo <code>electorn-demo-react://</code>. Il pulsante{' '}
            <i>Apri demo</i> apre una pagina web con un link. Clicca sul link
            della pagina per tornare a quest&apos;app.
          </Typography>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
