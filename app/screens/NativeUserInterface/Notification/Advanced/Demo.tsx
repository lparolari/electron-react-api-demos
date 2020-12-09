import React from 'react';

import Button from '@material-ui/core/Button';

import sendAdvancedNotification from './demo/demo';

export default function SendAdvancedNotificationButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={sendAdvancedNotification}
    >
      Invia notifica avanzata
    </Button>
  );
}
