import React from 'react';

import Typography from '@material-ui/core/Typography';
import ExternalUrl from '../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>notification</code> consente di creare ed inviare
        notifiche native di sistema.
      </Typography>
      <Typography paragraph>
        L&apos;API utilizzata da electron per le notifiche è la stessa delle
        notifiche HTML 5.
      </Typography>
      <Typography paragraph>
        Vedi la{' '}
        <ExternalUrl
          url={
            new URL(
              'https://www.electronjs.org/docs/all#notifications-windows-linux-macos'
            )
          }
        >
          guida ufficiale
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
