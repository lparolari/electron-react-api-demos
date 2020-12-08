import React from 'react';

import { Box } from '@material-ui/core';

export interface Props {
  children: React.ReactNode;
  index: number;
  value: number;
  other?: Record<string, unknown>;
}

export default function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ backgroundColor: 'white' }}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
