import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography gutterBottom>
        Il modulo <code>clipboard</code> fornisce i metodi per le operazioni di
        copia ed incolla.
      </Typography>
      <Typography gutterBottom>
        Sono fornite funzionalità per copiare ed incollare anche testo markup
        (HTML).
      </Typography>
      <Typography gutterBottom>
        Vedi la{' '}
        <ExternalUrl url={new URL('http://a.com')}>
          documentazione ufficiale
        </ExternalUrl>
      </Typography>
    </>
  );
}
