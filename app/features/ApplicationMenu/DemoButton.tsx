import React from 'react';

import changeAppMenu from './demo/demo';
import PrimaryDemoButton from '../../components/DemoButton/Primary';

export default function DemoButton() {
  return (
    <PrimaryDemoButton onClick={changeAppMenu}>Cambia menu</PrimaryDemoButton>
  );
}
