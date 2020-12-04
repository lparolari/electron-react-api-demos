import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import Dashboard from './Dashboard/Dashboard';

export default function Home(): JSX.Element {
  return <Dashboard />;
}
