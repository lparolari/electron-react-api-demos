import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AirplayIcon from '@material-ui/icons/Airplay';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListIcon from '@material-ui/icons/List';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SpeedIcon from '@material-ui/icons/Speed';
import WallpaperIcon from '@material-ui/icons/Wallpaper';

import routes from '../../constants/routes';

export default function FeaturesMenu() {
  return (
    <List>
      <ListSubheader inset>Caratteristiche</ListSubheader>
      <Link to={routes().window().main()}>
        <ListItem button>
          <ListItemIcon>
            <OpenInNewIcon />
          </ListItemIcon>
          <ListItemText primary="Finestre" />
        </ListItem>
      </Link>
      <Link to={routes().menu()}>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
      </Link>
      <Link to={routes().nativeUI()}>
        <ListItem button>
          <ListItemIcon>
            <AirplayIcon />
          </ListItemIcon>
          <ListItemText primary="Interfaccia nativa" />
        </ListItem>
      </Link>
      <Link to={routes().communication()}>
        <ListItem button>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText primary="Comunicazione" />
        </ListItem>
      </Link>
      <Link to={routes().system()}>
        <ListItem button>
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary="Sistema" />
        </ListItem>
      </Link>
      <Link to={routes().media()}>
        <ListItem button>
          <ListItemIcon>
            <WallpaperIcon />
          </ListItemIcon>
          <ListItemText primary="Media" />
        </ListItem>
      </Link>
    </List>
  );
}
