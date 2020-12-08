import clsx from 'clsx';
import React from 'react';

import { makeStyles } from '@material-ui/core';

import SyntaxHighlighter, {
  getCodeStrngFromPath,
  getStyle,
} from '../../components/SyntaxHighlighter/SyntaxHighlighter';
import path from '../../constants/path';

const useStyles = makeStyles(() => ({
  highlighterFixedHeight: {
    height: '280px',
  },
}));

export type Props = {
  relativePahToCodeFile: string;
};

export default function Source({ relativePahToCodeFile }: Props) {
  const classes = useStyles();

  return (
    <SyntaxHighlighter
      code={getCodeStrngFromPath(path(relativePahToCodeFile))}
      style={getStyle('dark')}
      className={clsx(classes.highlighterFixedHeight)}
    />
  );
}
