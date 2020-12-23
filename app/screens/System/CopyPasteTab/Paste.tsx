import React from 'react';

import PrimaryDemoButton from '../../../components/DemoButton/Primary';

export type Props = React.ComponentProps<typeof PrimaryDemoButton>;

export default function PasteButton({ onClick, ...rest }: Props) {
  return (
    <PrimaryDemoButton onClick={onClick} {...rest}>
      Incolla
    </PrimaryDemoButton>
  );
}
