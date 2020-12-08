import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackdropMui from '@material-ui/core/Backdrop';

export default function Backdrop() {
  return (
    <BackdropMui open style={{ color: '#fff' }}>
      <CircularProgress color="inherit" />
    </BackdropMui>
  );
}
