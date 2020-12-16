import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

export type Props = {
  children: React.ReactNode;
};

export default function Suspense({ children }: Props) {
  return <React.Suspense fallback={<Backdrop />}>{children}</React.Suspense>;
}
