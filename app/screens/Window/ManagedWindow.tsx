import React from 'react';

import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';

export default function ManagedWindow() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Finestra gestita
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Muovi o ridimensiona la finestra: il suo stato viene visualizzato
            sulla tabella della finestra precedente.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
