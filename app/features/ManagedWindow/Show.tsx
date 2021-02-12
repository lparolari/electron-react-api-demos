import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export type Props = {
  pos: number[];
  size: number[];
};

export default function Show({ pos, size }: Props) {
  return (
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
  );
}
