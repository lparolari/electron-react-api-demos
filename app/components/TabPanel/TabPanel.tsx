import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SourceCode from './SourceCode';

export interface Props {
  children: React.ReactNode;
  index: number;
  value: number;
  sourceCode?: React.ReactNode;
}

export default function TabPanel(props: Props) {
  const { children, value, index, sourceCode } = props;

  // Do not render anything when the panel index does not match the value.
  if (value !== index) return <></>;

  return (
    <Card square variant="outlined">
      <CardContent>
        {value === index && <Box p={3}>{children}</Box>}
      </CardContent>
      <SourceCode sourceCode={sourceCode} />
    </Card>
  );
}
