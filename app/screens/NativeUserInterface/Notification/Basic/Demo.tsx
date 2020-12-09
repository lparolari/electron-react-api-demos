import React from 'react';

import Button from '@material-ui/core/Button';

import sendBasicNotification from './demo/demo';

export default function SendAdvancedNotificationButton() {
  return (
    <Button variant="contained" color="primary" onClick={sendBasicNotification}>
      Invia notifica base
    </Button>
  );
}
