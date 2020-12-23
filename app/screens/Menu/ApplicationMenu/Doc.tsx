import React from 'react';

import Typography from '@material-ui/core/Typography';
import ExternalUrl from '../../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>Menu</code> e <code>MenuItem</code> possono essere usati
        per creare menu nativi personalizzati.
      </Typography>
      <Typography paragraph>
        Electron di default predispone un menu con funzionalità di base per
        l&apos;applicazione.
      </Typography>
      <Typography>
        Vedi la{' '}
        <ExternalUrl url={new URL('http://electron.atom.io/docs/api/menu')}>
          documentazione ufficiale
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
