import { remote } from 'electron';
import React from 'react';

import SecondaryDemoButton from '../../../components/DemoButton/Secondary';

export default function ResetButton() {
  return (
    <SecondaryDemoButton
      onClick={() =>
        remote.Menu.setApplicationMenu(remote.Menu.getApplicationMenu())
      }
    >
      Ripristina predefinito
    </SecondaryDemoButton>
  );
}
