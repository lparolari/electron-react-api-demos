import { existsSync, readFileSync } from 'fs';
import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';

import Typography from '@material-ui/core/Typography';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { Grid } from '@material-ui/core';

export type Theme = 'light' | 'dark';

export type Props = React.ComponentProps<typeof ReactSyntaxHighlighter> & {
  code: string | undefined;
  style?: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getStyle(theme?: Theme): unknown {
  // FIXME: find a dark theme that works with jsx/tsx.
  return undefined;
}

export function getCodeStrngFromPath(path: string): string | undefined {
  // We skip file inhexistence error, but we log them.
  if (!existsSync(path)) {
    // eslint-disable-next-line no-console
    console.error(`File located at ${path} does not exists`);
    return undefined;
  }

  return readFileSync(path, 'utf8');
}

export default function SyntaxHighlighter({ code, style, ...rest }: Props) {
  if (!code) {
    return (
      <ReactSyntaxHighlighter language="text" style={style}>
        Uffa, sembra che questo file non esitsa &nbsp; :(
      </ReactSyntaxHighlighter>
    );
  }
  return (
    <ReactSyntaxHighlighter
      language="tsx"
      style={style}
      showLineNumbers
      {...rest}
    >
      {code}
    </ReactSyntaxHighlighter>
  );
}
