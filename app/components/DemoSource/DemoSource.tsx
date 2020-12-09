import clsx from 'clsx';
import React from 'react';

import { makeStyles } from '@material-ui/core';

import path from '../../constants/path';
import SyntaxHighlighter, {
  getCodeStrngFromPath,
  getStyle,
} from '../SyntaxHighlighter/SyntaxHighlighter';

const useStyles = makeStyles(() => ({
  highlighterFixedHeight: {
    maxHeight: '280px',
  },
}));

export type Props = {
  relativePahToCodeFile: string;
};

export default function DemoSource({ relativePahToCodeFile }: Props) {
  const classes = useStyles();

  return (
    <SyntaxHighlighter
      code={getCodeStrngFromPath(path(relativePahToCodeFile))}
      style={getStyle('dark')}
      className={clsx(classes.highlighterFixedHeight)}
    />
  );
}
