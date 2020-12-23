import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>shell</code> permette anche di aprire applicazioni del
        sistema operativo.
      </Typography>
      <Typography paragraph>
        Ad esempio <code>shell.openExternal</code> apre un URL a patto che esso
        sia gestito dal sistema operativo.
      </Typography>
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
