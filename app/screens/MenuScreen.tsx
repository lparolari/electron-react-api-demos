import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import ExternalUrl from '../components/ExternalUrl/ExternalUrl';
import ApplicationMenuTab from './Menu/ApplicationMenu/ApplicationMenuTab';
import ContextMenuTab from './Menu/ContextMenu/ContextMenuTab';
import KeyboardShortcutTab from './Menu/KeyboardShortcut/KeyboardShortcutTab';

export default function MenuScreen() {
  const [tab, setTab] = useState(0);
  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography paragraph>
            Il modulo <code>Menu</code> e <code>MenuItem</code> possono essere
            usati per creare menu nativi personalizzati.
          </Typography>
          <Typography paragraph>
            Sono disponibili due tipi di menu: il menu dell&apos;applicazione
            sulla barra in alto, oppure il menu contestuale, accessibile tramite
            tasto destro del mouse.
          </Typography>
          <Typography>
            Vedi la{' '}
            <ExternalUrl url={new URL('http://electron.atom.io/docs/api/menu')}>
              documentazione ufficiale
            </ExternalUrl>
            .
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static" color="transparent">
              <Tabs value={tab} onChange={handleTabSelect}>
                <Tab label="Menu applicazione" />
                <Tab label="Menu contestuale" />
                <Tab label="Scorciatoie da tastiera" />
              </Tabs>
            </AppBar>
            <ApplicationMenuTab value={tab} index={0} />
            <ContextMenuTab value={tab} index={1} />
            <KeyboardShortcutTab value={tab} index={2} />
          </Paper>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
