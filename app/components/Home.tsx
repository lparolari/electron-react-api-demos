import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import HelpIcon from '@material-ui/icons/Help';

import PaddedContainer from './Container/Container';
import SyntaxHighlighter, {
  getCodeStrngFromPath,
} from './SyntaxHighlighter/SyntaxHighlighter';
import path from '../constants/path';

export default function Home(): JSX.Element {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Electron React Demo
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Introduzione
          </Typography>
          <Typography paragraph>
            Benvenuto! Quest&apos;applicazione illustra alcune delle
            funzionalità principali di Electron.js mostrando, per ogni esempio
          </Typography>
          <ul>
            <li>
              <Typography>una demo funzionante</Typography>
            </li>
            <li>
              <Typography>
                una descrizione/documentazione e/o riferimento ad essa
              </Typography>
            </li>
            <li>
              <Typography>il codice sorgente della demo</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Installazione
          </Typography>
          <SyntaxHighlighter
            code={getCodeStrngFromPath(
              path('../resources/snippets/install.txt')
            )}
            language="bash"
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Utilizzo
          </Typography>
          <Typography paragraph>
            Naviga e prova le varie funzionalità offerte dall&apos;applicazione:
            accedi alle features dal menu a lato.
          </Typography>
          <Typography>
            L&apos;icona <CodeIcon /> ti permette di visualizzare il codice
            sorgente della demo.
          </Typography>
          <Typography>
            L&apos;icona <HelpIcon /> ti permette di visualizzare la
            documentazione della demo.
          </Typography>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
