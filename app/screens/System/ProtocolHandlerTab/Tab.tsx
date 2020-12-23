import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
