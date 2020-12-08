import React from 'react';

import { AppBar, Box, Grid, Tab, Tabs } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';

interface TabPanelProps {
  children: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ backgroundColor: 'white' }}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function WindowScreen() {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Descrizione sulle finestre...</Typography>
        </Grid>
        <Grid item xs={12}>
          <AppBar position="static" color="transparent">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
