import { BrowserWindow, remote } from 'electron';
import React, { useEffect, useState } from 'react';

import {
  AppBar,
  Button,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import PaddedContainer from '../components/Container/Container';
import TabPanel from '../components/TabPanel/TabPanel';
import routes from '../constants/routes';
import url from '../constants/url';
import NewFramelessWindowTab from './Window/NewFramelessWindow/Tab';
import NewWindowTab from './Window/NewWindow/Tab';

type TabPanelProps = { value: number; index: number };

function ManagedWindowTab(props: TabPanelProps) {
  const [pos, setPos] = useState([0, 0]);
  const [size, setSize] = useState([0, 0]);

  return (
    <TabPanel {...props} sourceCode={<></>}>
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
  );
}

function UsingEventsWindowTab(props: TabPanelProps) {
  const [isVisible, setVisible] = useState(false);
  const [win, setWin] = useState<BrowserWindow | null>(null);

  const showFocusBtn = () => setVisible(true);
  const hideFocusBtn = () => setVisible(false);

  const focusWindow = () => {
    if (win) win.focus();
  };

  useEffect(() => {
    if (!win) return;

    win.setMenu(null);

    win.on('focus', hideFocusBtn);
    win.on('blur', showFocusBtn);
    win.on('closed', () => setWin(null));

    win.loadURL(`${url(routes().window().events())}`);
    win.show();
  }, [win]);

  return (
    <TabPanel {...props} sourceCode={<></>}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setWin(
            new remote.BrowserWindow({
              width: 400,
              height: 320,
              webPreferences: {
                nodeIntegration: true,
              },
            })
          );
        }}
      >
        Usa eventi finestra
      </Button>
      {win && isVisible && (
        <Button color="secondary" onClick={focusWindow}>
          Riporta in primo piano
        </Button>
      )}
    </TabPanel>
  );
}

export default function WindowScreen() {
  const [tab, setTab] = React.useState(0);

  const handleTabSelect = (_: unknown, newValue: number) => setTab(newValue);

  return (
    <PaddedContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Descrizione sulle finestre...</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <AppBar position="static" color="transparent">
              <Tabs value={tab} onChange={handleTabSelect}>
                <Tab label="Nuova finestra" />
                <Tab label="Finestra borderless" />
                <Tab label="Finestra gestita" />
                <Tab label="Usa eventi" />
              </Tabs>
            </AppBar>

            <NewWindowTab value={tab} index={0} />
            <NewFramelessWindowTab value={tab} index={1} />
            <ManagedWindowTab value={tab} index={2} />
            <UsingEventsWindowTab value={tab} index={3} />
          </Paper>
        </Grid>
      </Grid>
    </PaddedContainer>
  );
}
