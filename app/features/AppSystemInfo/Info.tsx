import React from 'react';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
  getAppPath,
  getElectronVersion,
  getOsHomeDir,
  getScreenSize,
} from './demo/demo';

export default function Info() {
  const data = [
    {
      id: 1,
      category: 'app info',
      desc: 'path installazione applicazione',
      value: getAppPath(),
    },
    {
      id: 2,
      category: 'app info',
      desc: 'versione Electorn',
      value: getElectronVersion(),
    },
    {
      id: 3,
      category: 'system info',
      desc: 'cartella home utente',
      value: getOsHomeDir(),
    },
    {
      id: 4,
      category: 'system info',
      desc: 'dimensioni schermo',
      value: `${getScreenSize().width}x${getScreenSize().height} px`,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Funzionalità</TableCell>
            <TableCell>Valore</TableCell>
            <TableCell>Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x) => (
            <TableRow key={x.id}>
              <TableCell component="th" scope="row">
                {x.desc}
              </TableCell>
              <TableCell>{x.value}</TableCell>
              <TableCell>
                <Chip label={x.category} variant="outlined" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
