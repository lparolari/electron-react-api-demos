import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import routes from '../../constants/routes';

export default function OptionsMenu() {
  return (
    <List>
      <ListSubheader inset>Dettagli</ListSubheader>
      <Link to={routes().about()}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
    </List>
  );
}
