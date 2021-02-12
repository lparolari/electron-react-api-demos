import React from 'react';

import SecondaryDemoButton from '../../components/DemoButton/Secondary';
import { unregisterDemoKeyboardShortcut } from './demo/demo';

export default function UnbindKeyboardShortcutButton() {
  return (
    <SecondaryDemoButton onClick={unregisterDemoKeyboardShortcut}>
      Rimuovi binding shortcut
    </SecondaryDemoButton>
  );
}
