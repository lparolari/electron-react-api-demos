import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import ExternalUrl from '../components/ExternalUrl/ExternalUrl';

function GithubProjectPageLink() {
  return (
    <ExternalUrl
      url={new URL('https://github.com/lparolari/electron-react-api-demos')}
    >
      codice sorgente su GitHub
    </ExternalUrl>
  );
}

function PaperLink() {
  return (
    <ExternalUrl
      url={
        new URL(
          'https://github.com/lparolari/electron-react-api-demos/tree/master/docs'
        )
      }
    >
      guida all&apos;app e appapprofondimento Electon.js
    </ExternalUrl>
  );
}

function GithubProfilePageLink() {
  return (
    <ExternalUrl url={new URL('https://github.com/lparolari')}>
      @lparolari
    </ExternalUrl>
  );
}

function EmailLink() {
  return (
    <ExternalUrl url={new URL('mailto:luca.parolari23@gmail.com')}>
      luca.parolari23@gmail.com
    </ExternalUrl>
  );
}

function UnipdEmailLink() {
  return (
    <ExternalUrl url={new URL('mailto:luca.parolari@studenti.unipd.it')}>
      luca.parolari@studenti.unipd.it
    </ExternalUrl>
  );
}

function TelegramLink() {
  return (
    <ExternalUrl url={new URL('https://t.me/lparolari')}>
      @lparolari
    </ExternalUrl>
  );
}

export default function AboutScreen() {
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <Grid item sm={6}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Il progetto
              </Typography>
              <Typography paragraph>
                Questo progetto è stato svolto come parte dell&apos;esame{' '}
                <i>Mobile Programming &amp; Multimedia</i>. L&apos;obiettivo del
                progetto si sviluppa su due piani diversi: (1) studiare il
                framework <b>Electron.js</b> e testare alcune delle sue
                principali caratteristiche e (2) rendere disponibile quanto
                sviluppato come <b>materiale di studio</b>.
              </Typography>
              <Typography paragraph>
                L&apos;applicazione è self-documented e tutti i riferimenti alla
                documentazione, guide ufficiali ed altro materiale sono
                disponibili nell&apos;approfondimento linkato tra i riferimento.
              </Typography>
              <Typography paragraph>
                Ogni eventuale miglioramento della demo o
                dell&apos;approfondimento sono ben accetti: istruzoni su GitHub.
              </Typography>
              <Typography paragraph>Buono studio :)</Typography>
            </Grid>
          </Grid>
          <Grid item container sm={6} spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Riferimenti
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Link al <GithubProjectPageLink />
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Link alla <PaperLink />
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                I miei contatti
              </Typography>
              <Typography>Luca Parolari</Typography>
              <ul>
                <li>
                  <Typography>Matricola: 1236601</Typography>
                </li>
                <li>
                  <Typography>
                    Email università: <UnipdEmailLink />
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Email personale: <EmailLink />
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Profilo GitHub: <GithubProfilePageLink />
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Contatto Telegram: <TelegramLink />
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            Corso di Mobile Programming &amp; Multimedia <br />
            Corso di Laurea Magistrale in Informatica <br />
            Dipartimento di Matematica e Informatica <br />
            Università degli Studi di Padova <br />
            <br />
            Luca Parolari &copy; 2021
          </Typography>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
