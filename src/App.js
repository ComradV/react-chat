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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: `100%`,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - 320px)`,
  },
  drawerPaper: {
    position: 'relative',
    width: 320,
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
    paddingTop: 70,
    paddingBottom: 60,
  },

  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  avatar: {
    margin: 10,
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: `10%`,
    left: 230,
  },
  bottomNavigation: {
    position: 'fixed',
    bottom: 0,
    width: 320,
  },
  searchWrapper: {
    position: 'fixed',
    zIndex: 10,
    backgroundColor: 'white',
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
        <form className={classes.container} noValidate autoComplete="off">

        </form>
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
              label="Search field"
              type="search"
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
