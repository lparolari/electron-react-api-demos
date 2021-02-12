import React from 'react';

import PrimaryDemoButton from '../../components/DemoButton/Primary';
import openUserHomeInFileManager from './demo/demo';

export default function OpenUserHomeButton() {
  return (
    <PrimaryDemoButton onClick={openUserHomeInFileManager}>
      Apri cartella home
    </PrimaryDemoButton>
  );
}
