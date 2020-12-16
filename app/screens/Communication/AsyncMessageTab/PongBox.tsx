import React from 'react';

import Typography from '@material-ui/core/Typography';

export type Props = {
  value: string;
};

export default function PongBox({ value }: Props) {
  if (!value) return <></>;

  return <Typography>The process replyed with: {value}</Typography>;
}
