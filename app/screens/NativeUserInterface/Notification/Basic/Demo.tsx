import React from 'react';

import PrimaryDemoButton from '../../../../components/DemoButton/Primary';
import sendBasicNotification from './demo/demo';

export default function SendAdvancedNotificationButton() {
  return (
    <PrimaryDemoButton onClick={sendBasicNotification}>
      Invia notifica base
    </PrimaryDemoButton>
  );
}
