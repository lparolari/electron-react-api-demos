import React from 'react';

import { WbSunnyOutlined } from '@material-ui/icons';

import DemoButton from '../Button/Demo';
import InfoBox from '../InfoBox/InfoBox';

export default function NextSolarStorm() {
  return (
    <InfoBox
      title="Prossima tempesta solare"
      emph="non rilevata"
      desc="dati non disponibili"
      icon={<WbSunnyOutlined style={{ fontSize: '80px' }} />}
      cta={<DemoButton title="Apre un popup">Maggiori informazioni</DemoButton>}
    />
  );
}
