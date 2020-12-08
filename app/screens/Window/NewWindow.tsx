import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';

export default function NewWindow() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Nuova finestra</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>
            Questa è una nuova finestra, creata con le API del sistema
            operativo. Esegue codice React.js!
          </Typography>
          <Typography>
            Il menu è stato customizzato e la shortcut CTRL+W chiude questa
            finestra.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
