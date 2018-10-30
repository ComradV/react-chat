import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import CreateChatButton from './CreateChatButton';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
});

const Sidebar = ({classes, chats, createChat}) => (
  <Drawer
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}
>
  <div className={classes.drawerHeader}>
    <TextField
      fullWidth
      margin="normal"
      placeholder="Search chats..."
    />
  </div>
  <Divider />
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <ListItem key={index} button>
        <Avatar>{chat.title && chat.title[0]}</Avatar>
        <ListItemText primary={chat.title}/>
      </ListItem>
    ))}
  </List>
  <CreateChatButton createChat = {createChat}/>
  <BottomNavigation showLabels>
    <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
  </BottomNavigation>
</Drawer>
)

export default withStyles(styles)(Sidebar);
