import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

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

const ChatHeader = ({classes, fullWidth}) => (
  <AppBar color="primary" className={
    classNames(
      fullWidth==='true'&&classes.appBarFullWidth,
      fullWidth==='false'&&classes.appBar
    )}
  >
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        DogeCodes React Chat
      </Typography>
    </Toolbar>
  </AppBar>

)

export default withStyles(styles)(ChatHeader)
