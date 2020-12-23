import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>BrowserWindow</code> di Electron permette di creare
        nuove finestre o di gestire le esistenti.
      </Typography>
      <Typography paragraph>
        Ogni finestra viene eseguita su un processo separato, detto{' '}
        <i>renderer process</i>. Il <i>renderer process</i> è istanziato dal{' '}
        <i>main process</i> e può gestire solo la finestra associata, al
        contrario il <i>main process</i> può gestire tutte le finestre aperte ed
        ha il compito di instanziare le <code>BrowserWindow</code>. Due processi
        (main e renderer) possono comunicare tramite IPC. Attenzione: un
        processo di renderer muore quando la finestra associata viene chiusa.
      </Typography>
      <Typography paragraph>
        Vedi la{' '}
        <ExternalUrl
          url={new URL('http://electron.atom.io/docs/api/browser-window')}
        >
          documentazione ufficiale
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
