import { existsSync, readFileSync } from 'fs';
import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';

export type Theme = 'light' | 'dark';

export type Props = React.ComponentProps<typeof ReactSyntaxHighlighter> & {
  code: string;
  style?: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getStyle(theme?: Theme): unknown {
  // FIXME: find a dark theme that works with jsx/tsx.
  return undefined;
}

export function getCodeStrngFromPath(path: string): string {
  // We skip file inhexistence error, but we log them.
  if (!existsSync(path)) {
    // eslint-disable-next-line no-console
    console.error(`File located at ${path} does not exists`);
    return '';
  }

  return readFileSync(path, 'utf8');
}

export default function SyntaxHighlighter({ code, style, ...rest }: Props) {
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
