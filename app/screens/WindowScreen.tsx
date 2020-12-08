import { Menu, remote } from 'electron';
import React, { useState } from 'react';

import {
  Paper,
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  TableContainer,
  Tabs,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import url from '../constants/url';
import routes from '../constants/routes';

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
      {value === index && <Box p={3}>{children}</Box>}
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

  const [pos, setPos] = useState([0, 0]);
  const [size, setSize] = useState([0, 0]);

  const [isVisible, setVisible] = useState(false);

  const showFocusBtn = () => setVisible(true);
  const hideFocusBtn = () => setVisible(false);

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
              <Tab label="Nuova finestra" />
              <Tab label="Finestra borderless" />
              <Tab label="Finestra gestita" />
              <Tab label="Usa eventi" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const win = new remote.BrowserWindow({
                  width: 400,
                  height: 320,
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                win.setMenu(
                  remote.Menu.buildFromTemplate([
                    {
                      label: '&File',
                      submenu: [
                        {
                          label: '&Close',
                          accelerator: 'Ctrl+W',
                          click: () => {
                            win.close();
                          },
                        },
                      ],
                    },
                  ])
                );

                win.loadURL(`${url(routes().window().new())}`);
                win.show();
              }}
            >
              Crea finestra
            </Button>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const win = new remote.BrowserWindow({
                  width: 400,
                  height: 320,
                  webPreferences: {
                    nodeIntegration: true,
                  },
                  frame: false,
                });

                win.loadURL(`${url(routes().window().frameless())}`);
                win.show();
              }}
            >
              Crea finestra frameless
            </Button>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    const win = new remote.BrowserWindow({
                      width: 400,
                      height: 320,
                      webPreferences: {
                        nodeIntegration: true,
                      },
                    });
                    win.setMenu(null);

                    win.on('move', () => {
                      setPos(win.getPosition());
                    });
                    win.on('resize', () => {
                      setSize(win.getSize());
                    });
                    win.loadURL(`${url(routes().window().managed())}`);
                    win.show();
                  }}
                >
                  Crea finestra gestita
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell align="right">x</TableCell>
                        <TableCell align="right">y</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Posizione
                        </TableCell>
                        <TableCell align="right">{pos[0]}</TableCell>
                        <TableCell align="right">{pos[1]}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Dimensione
                        </TableCell>
                        <TableCell align="right">{size[0]}</TableCell>
                        <TableCell align="right">{size[1]}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const win = new remote.BrowserWindow({
                  width: 400,
                  height: 320,
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                win.setMenu(null);

                win.on('focus', hideFocusBtn);
                win.on('blur', showFocusBtn);

                win.loadURL(`${url(routes().window().events())}`);
                win.show();
              }}
            >
              Usa eventi finestra
            </Button>
            {isVisible && (
              <Button
                onClick={() => {
                  // win.focus();
                }}
              >
                Riporta in primo piano
              </Button>
            )}
          </TabPanel>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
