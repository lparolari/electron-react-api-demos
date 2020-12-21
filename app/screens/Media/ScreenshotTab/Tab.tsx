import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DemoSource from '../../../components/DemoSource/DemoSource';
import TabPanel from '../../../components/TabPanel/TabPanel';
import captureScreenshot from './demo/demo';

export type Props = { value: number; index: number };

export default function ScreenshotTab({ value, index }: Props) {
  const [screenshotInfo, setScreenshotInfo] = useState('');

  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/Media/ScreenshotTab/demo/demo.ts" />
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              captureScreenshot().then((screenshotPath) =>
                setScreenshotInfo(`Screenshot salvato in ${screenshotPath}`)
              )
            }
          >
            Cattura schermata
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography>{screenshotInfo}</Typography>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
