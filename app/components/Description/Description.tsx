import React from 'react';

import Typography from '@material-ui/core/Typography';

export type Props = {
  children: React.ReactNode;
};

export default function Description({ children }: Props) {
  return (
    <>
      <Typography gutterBottom>
        <b>Info sulla demo</b>
      </Typography>
      {children}
    </>
  );
}
