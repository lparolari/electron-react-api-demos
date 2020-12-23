import React from 'react';

import PrimaryDemoButton from '../../../../components/DemoButton/Primary';
import openArtemisHomepageExternal from './demo/demo';

export default function OpenArtemisHomepageButton() {
  return (
    <PrimaryDemoButton onClick={openArtemisHomepageExternal}>
      Apri google
    </PrimaryDemoButton>
  );
}
