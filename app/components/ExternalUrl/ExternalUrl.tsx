import { shell } from 'electron';
import React from 'react';

import { Link } from '@material-ui/core';

export type Props = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  url: URL;
};

export default function ExternalUrl({ children, url, ...rest }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      onClick={() => {
        shell.openExternal(url.toString());
      }}
      color="secondary"
      {...rest}
    >
      {children}
    </Link>
  );
}
