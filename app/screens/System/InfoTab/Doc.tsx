import React from 'react';

import Typography from '@material-ui/core/Typography';

import ExternalUrl from '../../../components/ExternalUrl/ExternalUrl';

export default function Doc() {
  return (
    <>
      <Typography gutterBottom>
        I moduli di Electron.js in combo con i module Node.js permettono di
        recuperare informazioni sullo schermo, sull&apos;app o di sistema.
      </Typography>
      <Typography gutterBottom>
        Di seguito i link alla documentazione dei moduli principali utilizzati
        nella demo.
      </Typography>
      <ul>
        <li>
          <Typography>
            <ExternalUrl
              url={new URL('https://www.electronjs.org/docs/api/app')}
            >
              modulo <code>app</code> (Electron.js)
            </ExternalUrl>
          </Typography>
        </li>
        <li>
          <Typography>
            <ExternalUrl
              url={new URL('https://www.electronjs.org/docs/api/process')}
            >
              modulo <code>process</code> (Electron.js)
            </ExternalUrl>
          </Typography>
        </li>
        <li>
          <Typography>
            <ExternalUrl url={new URL('https://nodejs.org/api/os.html')}>
              modulo <code>os</code> (Node.js)
            </ExternalUrl>
          </Typography>
        </li>
        <li>
          <Typography>
            <ExternalUrl
              url={new URL('https://www.electronjs.org/docs/api/screen')}
            >
              modulo <code>screen</code> (Electron.js)
            </ExternalUrl>
          </Typography>
        </li>
      </ul>
    </>
  );
}
