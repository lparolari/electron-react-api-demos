import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>tray</code> consente di creare un&apos;icona
        dell&apos;applicazione nel tray del sistema operativo.
      </Typography>
      <Typography paragraph>
        L&apos;icona può avere allegato un menu contestuale con pulsanti e liste
        che rispondono ad azioni.
      </Typography>
      <Typography paragraph>
        Vedi la{' '}
        <ExternalUrl url={new URL('https://www.electronjs.org/docs/api/tray')}>
          documentazione ufficiale
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
