import React from 'react';
import { Link } from 'react-router-dom';

import { Button, IconButton, Typography } from '@material-ui/core';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Image, FileCopy } from '@material-ui/icons';

import routes from '../../constants/routes.json';
import Title from '../InfoBox/Title';

// Generate Order Data
function createData(
  id: number,
  planet: string,
  distanceFromSun: number,
  sideralPeriod: number,
  mass: number,
  surfaceMaxTemperature: number
) {
  return {
    id,
    planet,
    distanceFromSun,
    sideralPeriod,
    mass,
    surfaceTemperature: surfaceMaxTemperature,
  };
}

const rows = [
  createData(1, 'Mercurio', 0.4, 88, 0.055, 700),
  createData(2, 'Venere', 0.7, 225, 0.815, 867),
  createData(3, 'Terra', 1, 365, 1, 330),
  createData(4, 'Marte', 1.5, 657, 0.107, 95),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function PlanetList() {
  const classes = useStyles();
  return (
    <>
      <Title>Pianeti</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pianeta</TableCell>
            <TableCell align="right">Distanza dal sole</TableCell>
            <TableCell align="right">Anno terrestre</TableCell>
            <TableCell align="right">Massa</TableCell>
            <TableCell align="right">Temp max supericie</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.planet}</TableCell>
              <TableCell align="right">{row.distanceFromSun} au</TableCell>
              <TableCell align="right">{row.sideralPeriod} gg</TableCell>
              <TableCell align="right">{row.mass} M⊕</TableCell>
              <TableCell align="right">{row.surfaceTemperature} °K</TableCell>
              <TableCell>
                <IconButton color="secondary" aria-label="Vedi immagine">
                  <Image />
                </IconButton>
                <IconButton color="secondary" aria-label="Copia info">
                  <FileCopy />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Button color="secondary">Default</Button>
        <Link to={routes.COUNTER}>to Counter</Link>
        <Link color="primary" href="#todo" onClick={preventDefault}>
          See more orders
        </Link> */}
        <div style={{ textAlign: 'right' }}>
          <Typography>4 di 9</Typography>
        </div>
      </div>
    </>
  );
}
