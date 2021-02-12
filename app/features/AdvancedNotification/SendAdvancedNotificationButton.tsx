import React from 'react';

import PrimaryDemoButton from '../../components/DemoButton/Primary';
import sendAdvancedNotification from './demo/demo';

export default function SendAdvancedNotificationButton() {
  return (
    <PrimaryDemoButton onClick={sendAdvancedNotification}>
      Invia notifica avanzata
    </PrimaryDemoButton>
  );
}
