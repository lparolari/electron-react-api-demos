import React from 'react';

import SecondaryDemoButton from '../../components/DemoButton/Secondary';

export type Props = React.ComponentProps<typeof SecondaryDemoButton>;

export default function FocusButton({ onClick, ...rest }: Props) {
  return (
    <SecondaryDemoButton color="secondary" onClick={onClick} {...rest}>
      Riporta in primo piano
    </SecondaryDemoButton>
  );
}
