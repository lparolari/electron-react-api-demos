import React from 'react';

import { Brightness6Outlined } from '@material-ui/icons';

import InfoBox from '../InfoBox/InfoBox';
import DemoButton from '../Button/Demo';

export default function NextEclipse() {
  return (
    <InfoBox
      title="Prossima eclissi"
      emph="14 dicembre"
      desc="eclissi solare"
      icon={<Brightness6Outlined style={{ fontSize: '80px' }} />}
      cta={
        <>
          <DemoButton title="Invia una notifica">Notifica</DemoButton>
          <DemoButton title="Invia una notifica con immagine">
            Notifica emozionale
          </DemoButton>
        </>
      }
    />
  );
}
