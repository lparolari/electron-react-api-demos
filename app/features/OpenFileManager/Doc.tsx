import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>shell</code> permette di accedere a funzionalità native
        del sistema.
      </Typography>
      <Typography paragraph>Ad esempio</Typography>
      <ul>
        <li>
          <Typography>
            <code>shell.showItemInFolder</code>, per mostrare un file con il
            file manager di sistema e selezionarlo
          </Typography>
        </li>
        <li>
          <Typography>
            <code>shell.moteItemToTrash</code>, per spostare un file nel cestino
          </Typography>
        </li>
        <li>
          <Typography>
            <code>shell.beep</code>, per riprodurre il beep di sistema
          </Typography>
        </li>
      </ul>
      <Typography paragraph>
        Vedi la{' '}
        <ExternalUrl url={new URL('https://www.electronjs.org/docs/api/shell')}>
          documentazione ufficiale
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
