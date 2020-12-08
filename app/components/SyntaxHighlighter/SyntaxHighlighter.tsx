import { existsSync, readFileSync } from 'fs';
import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';

export type Theme = 'light' | 'dark';

export type Props = React.ComponentProps<typeof ReactSyntaxHighlighter> & {
  code: string;
  style?: unknown;
};

export function getStyle(theme?: Theme): unknown {
  // default
  if (!theme) return a11yDark;
  if (theme === 'dark') return a11yDark;
  return a11yLight;
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
      language="typescript"
      style={style}
      showLineNumbers
      {...rest}
    >
      {code}
    </ReactSyntaxHighlighter>
  );
}
