import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import ExternalUrl from '../components/ExternalUrl/ExternalUrl';
import MediaTabs from './Media/Tabs';

export default function MediaScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography paragraph>
            Per catturare delle schermate Electron.js fornisce il metodo{' '}
            <code>caputrePage</code> invocabile su un oggetto{' '}
            <code>webContents</code>. L&apos;immagine restituita è salvabile in
            diversi formati e codifiche.
          </Typography>
          <Typography paragraph>
            Attenzione: è possibile utilizzare{' '}
            <code>dialog.showSaveDialog</code> per chiedere all&apos;utente il
            path dove salvare lo screenshot. (
            <ExternalUrl
              url={
                new URL(
                  'https://www.electronjs.org/docs/api/dialog#dialogshowsavedialogbrowserwindow-options'
                )
              }
            >
              doc
            </ExternalUrl>
            )
          </Typography>
          <Typography paragraph>
            Vedi la{' '}
            <ExternalUrl
              url={
                new URL(
                  'https://www.electronjs.org/docs/api/web-contents#contentscapturepagerect'
                )
              }
            >
              documentazione ufficiale
            </ExternalUrl>
            .
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MediaTabs />
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
