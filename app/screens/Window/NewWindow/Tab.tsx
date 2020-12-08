import clsx from 'clsx';
import React from 'react';

import { makeStyles } from '@material-ui/core';

import DemoButton from './DemoButton';
import SyntaxHighlighter, {
  getCodeStrngFromPath,
  getStyle,
} from '../../../components/SyntaxHighlighter/SyntaxHighlighter';
import TabPanel from '../../../components/TabPanel/TabPanel';
import appPath from '../../../constants/path';

type TabPanelProps = { value: number; index: number };

const useStyles = makeStyles(() => ({
  highlighterFixedHeight: {
    height: '280px',
  },
}));

export default function NewWindowTab(props: TabPanelProps) {
  const classes = useStyles();
  return (
    <TabPanel
      {...props}
      sourceCode={
        <SyntaxHighlighter
          code={getCodeStrngFromPath(`${appPath}/menu.ts`)}
          style={getStyle('dark')}
          className={clsx(classes.highlighterFixedHeight)}
        />
      }
    >
      <DemoButton />
    </TabPanel>
  );
}
