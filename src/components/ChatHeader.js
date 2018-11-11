import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import ChatMenu from './ChatMenu';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
  appBarFullWidth: {
    position: 'fixed',
    width: '100%',
  }
});

const ChatHeader = ({ classes, fullWidth, activeChat, leaveChat, deleteChat }) => (
  <AppBar color="primary" className={
    classNames(
      fullWidth === 'true' && classes.appBarFullWidth,
      fullWidth === 'false' && classes.appBar
    )}
  >
    {activeChat ?
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          {activeChat.title}
        </Typography>
        <ChatMenu  />
      </Toolbar>
      : <Typography variant="title" color="inherit" noWrap>
        DogeCodes React Chat
      </Typography>
    }
  </AppBar>
)


export default withStyles(styles)(ChatHeader)
