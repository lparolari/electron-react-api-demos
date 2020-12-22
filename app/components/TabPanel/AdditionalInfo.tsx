import React, { useState } from 'react';

import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import HelpIcon from '@material-ui/icons/Help';
import CardContent from '@material-ui/core/CardContent';

export type Props = {
  sourceCode?: React.ReactNode;
  documentation?: React.ReactNode;
};

type Source = 0;
type Doc = 1;

type Additional = Source | Doc;

const SOURCE: Source = 0;
const DOC: Doc = 1;

export default function AdditionalInfo({ sourceCode, documentation }: Props) {
  const [expanded, setExpanded] = useState([false, false]);

  const toggleExpanded = (what: Additional) => () => {
    if (what === SOURCE) setExpanded([!expanded[SOURCE], false]);
    if (what === DOC) setExpanded([false, !expanded[DOC]]);
  };

  return (
    <>
      <CardActions>
        {sourceCode && (
          <IconButton
            aria-label="toggle source code view"
            onClick={toggleExpanded(SOURCE)}
          >
            <CodeIcon />
          </IconButton>
        )}
        {documentation && (
          <IconButton
            aria-label="toggle documentation view"
            onClick={toggleExpanded(DOC)}
          >
            <HelpIcon />
          </IconButton>
        )}
      </CardActions>
      {sourceCode && (
        <Collapse in={expanded[SOURCE]} timeout="auto" unmountOnExit>
          <CardContent>{sourceCode}</CardContent>
        </Collapse>
      )}
      {documentation && (
        <Collapse in={expanded[DOC]} timeout="auto" unmountOnExit>
          <CardContent>{documentation}</CardContent>
        </Collapse>
      )}
    </>
  );
}
