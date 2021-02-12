import React from 'react';

import SecondaryDemoButton from '../../components/DemoButton/Secondary';

export type Props = React.ComponentProps<typeof SecondaryDemoButton>;

export default function RendererListenerButton({ onClick, ...rest }: Props) {
  return (
    <SecondaryDemoButton onClick={onClick} {...rest}>
      Aggiungi pong listener
    </SecondaryDemoButton>
  );
}
