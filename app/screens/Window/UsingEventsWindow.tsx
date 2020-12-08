import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';

export default function UsingEventsWindow() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Finestra con eventi
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Prova a mettere la finestra in secondo piano. Comparirà un pulsante
            sulla finestra precedente che ti permetterà di riportarla in primo
            piano.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
