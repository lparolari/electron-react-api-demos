import { shell } from 'electron';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import ManagedWindowTab from './Window/ManagedWindow/Tab';
import NewFramelessWindowTab from './Window/NewFramelessWindow/Tab';
import NewWindowTab from './Window/NewWindow/Tab';
import UsingEventsWindowTab from './Window/UsingEventsWindow/Tab';

export default function WindowScreen() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography paragraph>
            Il modulo <code>BrowserWindow</code> di Electron permette di creare
            nuove finestre o di gestire le esistenti.
          </Typography>
          <Typography paragraph>
            Ogni finestra viene eseguita su un processo separato, detto{' '}
            <i>renderer process</i>. Il <i>renderer process</i> è istanziato dal{' '}
            <i>main process</i> e può gestire solo la finestra associata, al
            contrario il <i>main process</i> può gestire tutte le finestre
            aperte ed ha il compito di instanziare le <code>BrowserWindow</code>
            . Due processi (main e renderer) possono comunicare tramite IPC.
            Attenzione: un processo di renderer muore quando la finestra
            associata viene chiusa.
          </Typography>
          <Typography paragraph>
            Vedi la {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              onClick={() => {
                shell.openExternal(
                  'http://electron.atom.io/docs/api/browser-window'
                );
              }}
              color="secondary"
            >
              documentazione ufficiale
            </Link>
            .
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static" color="transparent">
              <Tabs value={tab} onChange={handleTabSelect}>
                <Tab label="Nuova finestra" />
                <Tab label="Finestra borderless" />
                <Tab label="Finestra gestita" />
                <Tab label="Usa eventi" />
              </Tabs>
            </AppBar>

            <NewWindowTab value={tab} index={0} />
            <NewFramelessWindowTab value={tab} index={1} />
            <ManagedWindowTab value={tab} index={2} />
            <UsingEventsWindowTab value={tab} index={3} />
          </Paper>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
