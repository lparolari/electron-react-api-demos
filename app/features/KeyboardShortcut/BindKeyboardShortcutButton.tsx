import React from 'react';

import PrimaryDemoButton from '../../components/DemoButton/Primary';
import registerDemoKeyboardShortcut from './demo/demo';

export default function BindKeyboardShortcutButton() {
  return (
    <PrimaryDemoButton onClick={registerDemoKeyboardShortcut}>
      Registra shortcut CTRL+ALT+K
    </PrimaryDemoButton>
  );
}
