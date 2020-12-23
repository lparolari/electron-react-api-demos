import React from 'react';

import PrimaryDemoButton from '../../../../components/DemoButton/Primary';
import addToTray from './demo/demo';

export default function AddToTrayButton() {
  return (
    <PrimaryDemoButton onClick={addToTray}>Aggiungi al tray</PrimaryDemoButton>
  );
}
