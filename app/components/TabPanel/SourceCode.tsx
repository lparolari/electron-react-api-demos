import React, { useState } from 'react';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';

export interface Props {
  sourceCode?: React.ReactNode;
}

export default function SourceCode({ sourceCode }: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <>
      {sourceCode && (
        <>
          <CardActions>
            <IconButton
              aria-label="toggle source code view"
              onClick={toggleExpanded}
            >
              <CodeIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>{sourceCode}</CardContent>
          </Collapse>
        </>
      )}
    </>
  );
}
