import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Button, Container, Grid } from '@material-ui/core';

export default function NewBorderlessWindow() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Nuova finestra frameless
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Questa è una nuova finestra, creata con le API del sistema
            operativo. Nasconde il frame del sistema opearativo: questo può
            essere comodo per personalizzare ulteriormente il look &amp; feel
            dell&apos;applicazione.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => window.close()}
          >
            Chiudi
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
