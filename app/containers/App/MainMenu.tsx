import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AirplayIcon from '@material-ui/icons/Airplay';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListIcon from '@material-ui/icons/List';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SpeedIcon from '@material-ui/icons/Speed';
import WallpaperIcon from '@material-ui/icons/Wallpaper';

export default function MainMenu() {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <OpenInNewIcon />
        </ListItemIcon>
        <ListItemText primary="Finestre" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Menu" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AirplayIcon />
        </ListItemIcon>
        <ListItemText primary="Interfaccia nativa" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ChatBubbleIcon />
        </ListItemIcon>
        <ListItemText primary="Comunicazione" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Sistema" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WallpaperIcon />
        </ListItemIcon>
        <ListItemText primary="Media" />
      </ListItem>
    </List>
  );
}
