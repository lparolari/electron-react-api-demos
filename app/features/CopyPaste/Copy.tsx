import React from 'react';

import PrimaryDemoButton from '../../components/DemoButton/Primary';

export type Props = React.ComponentProps<typeof PrimaryDemoButton>;

export default function CopyButton({ onClick, ...rest }: Props) {
  return (
    <PrimaryDemoButton onClick={onClick} {...rest}>
      Copia
    </PrimaryDemoButton>
  );
}
