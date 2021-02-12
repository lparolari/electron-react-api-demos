import React from 'react';

import PrimaryDemoButton from '../../components/DemoButton/Primary';

export type Props = React.ComponentProps<typeof PrimaryDemoButton>;

export default function DemoButton({ onClick, ...rest }: Props) {
  return (
    <PrimaryDemoButton onClick={onClick} {...rest}>
      Crea finestra gestita
    </PrimaryDemoButton>
  );
}
