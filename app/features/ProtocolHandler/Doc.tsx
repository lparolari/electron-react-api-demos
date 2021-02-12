import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography gutterBottom>
        Il modulo <code>app</code> fornisce i metodi per gestire i protocolli.
      </Typography>
      <Typography gutterBottom>
        Con questo modulo è possibile indicare al sistema operativo i protocolli
        per i quali la nostra applicaizone risponde di default, similarmente a
        quanto avviene con il browser per il protocollo <code>http</code> e{' '}
        <code>https</code> per le pagine web.
      </Typography>
      <Typography gutterBottom>
        Vedi la documentazione ufficiale per{' '}
        <ExternalUrl
          url={
            new URL(
              'https://www.electronjs.org/docs/api/app#appsetasdefaultprotocolclientprotocol-path-args'
            )
          }
        >
          app.setAsDefaultProtocolClient
        </ExternalUrl>{' '}
        e{' '}
        <ExternalUrl
          url={
            new URL(
              'https://www.electronjs.org/docs/api/app#appremoveasdefaultprotocolclientprotocol-path-args-macos-windows'
            )
          }
        >
          app.removeAsDefaultProtocolClient
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
