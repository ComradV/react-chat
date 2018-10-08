import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { chats, messages } from './mock-data';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    width: `calc(100% - 320px)`,
    position:'fixed',
  },
  drawerPaper: {
    position: 'relative',
    width: 320,
    height: `100%`,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },

  contactList: {
    overflowY: 'scroll',
    height: `calc(100%-72-56)`
  },

  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  avatar: {
    margin: 10,
  },
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: `10%`,
    right: 50,
  },
  bottomNavigation: {
    position: 'fixed',
    bottom: 0,
    width: 320,
  },
  searchWrapper: {
    top:0,
    right:0,
    width:320,
  },
});


function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class MyApp extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
        <AppBar
          position="absolute"
          className={classes.appBar}
        >
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.searchWrapper}>
            <TextField
              id="standard-search"
              label="Search chats..."
              type="search"
              fullWidth
              className={classes.textField}
              margin="normal"
            />
          </div>

          <List className={classes.contactList}>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>H</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Contact Name"
                />
              </ListItem>,
            )}
          </List>
          <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Button>

          <BottomNavigation
            showLabels
            className={classes.bottomNavigation}
          >
            <BottomNavigationAction label="My chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <List className={classes.messagesList}>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>H</Avatar>
                </ListItemAvatar>
                <ListItemText
                  secondary='AvName'
                  primary="Message"
                />
              </ListItem>,
            )}
          </List>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(MyApp);
