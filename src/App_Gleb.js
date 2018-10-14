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
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';


import { chats, messages } from './mock-data';


const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',

  },
  appBar: {
    width: `calc(100% - 320px)`,
    position: 'fixed',
  },

  toolbar: theme.mixins.toolbar,
  content: {
    height: '100%',
    width: `calc(100% - 320px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    overflow: 'hidden',
  },

  messagesList: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',    
  },
  searchWrapper: {
    width: 320,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },

  contactList: {
    overflowY: 'scroll',
    height: `calc(100% - 72px)`,
    width: 320,
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
    bottom: 65,
    right: 40,
  },
  messagePaper: {
    width: `calc(100% - 40px)`,
    position: 'absolute',
    right: 20,
    bottom: 30
  },
  messageWrapper: {
    width: `calc(100% - 320px)`,
    right: 0,
    bottom: 0,
    position: 'fixed',
  }

});


class MyApp extends React.Component {

  render() {
    const { classes } = this.props;

    return (
<div className={classes.appFrame}>
  <Drawer
      variant="permanent"
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
        {chats.map((el, index) =>
          (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>{el.title&&el.title[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={el.title}
              />
            </ListItem>
          )
        )
        }
      </List>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>      
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="My chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      </BottomNavigation>
  
    </Drawer>
    <AppBar
      className={classes.appBar}
    >
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          DogeCodes React Chat
        </Typography>
      </Toolbar>
    </AppBar>
    <main className={classes.content}>
      <div className={classes.messagesList}>
      Hello Gleb!
      </div>
      <div className={classes.messageWrapper}>
        <Paper className={classes.messagePaper}>
          <Input fullWidth placeholder = "Enter your message..." id="text"/>
        </Paper>
      </div>

    </main>        
    
  </div>      

    )
    return (
      <div className={classes.appFrame}>
      <Drawer
          variant="permanent"
          className={classes.drawer}
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
            {chats.map((el, index) =>
              (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>{el.title&&el.title[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={el.title}
                  />
                </ListItem>
              )
            )
            }
          </List>


          <BottomNavigation
            showLabels
            className={classes.bottomNavigation}
          >
            <BottomNavigationAction label="My chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
    

        </Drawer>
        <main className={classes.content}>
          <AppBar
            className={classes.appBar}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                DogeCodes React Chat
              </Typography>
            </Toolbar>
          </AppBar>
          <List className={classes.messagesList}>
            {messages.map((el, index) =>
              (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>{el.sender&&el.sender[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={el.content}
                  />
                </ListItem>
              )
            )
            }
          </List>
          <Paper className={classes.messagePaper}>
            <Input fullWidth placeholder = "Enter your message..." id="text"/>
          </Paper>

        </main>        

      
      </div>
    );
  }
}

export default withStyles(styles)(MyApp);
