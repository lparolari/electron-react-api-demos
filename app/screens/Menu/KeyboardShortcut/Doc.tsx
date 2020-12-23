import React from 'react';

import Typography from '@material-ui/core/Typography';
import ExternalUrl from '../../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography paragraph>
        Il modulo <code>globalShortcut</code> può essere utilizzato per definire
        scorciatoie da tastiera e, in combinazione con il modulo{' '}
        <code>Menu</code>, permette di definire menu nativi ai quali sono
        associate scorciatoie da tastiera (acceleratori).
      </Typography>
      <Typography paragraph>
        Nota: in Electron.js le scorciatoie da tastiera prendono il nome di{' '}
        <i>acceleratori</i>.
      </Typography>
      <Typography paragraph>
        Vedi la{' '}
        <ExternalUrl
          url={new URL('https://www.electronjs.org/docs/api/global-shortcut')}
        >
          documentazione ufficiale
        </ExternalUrl>
        .
      </Typography>
    </>
  );
}
