import React from 'react';

import PrimaryDemoButton from '../../components/DemoButton/Primary';
import openGoogleHomepageExternal from './demo/demo';

export default function OpenGoogleHomepageButton() {
  return (
    <PrimaryDemoButton onClick={openGoogleHomepageExternal}>
      Apri google
    </PrimaryDemoButton>
  );
}
