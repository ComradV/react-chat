import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = theme => ({

  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
});

const Message = ({ classes, message }) => {
  const isMessageFromMe = message.sender === 'me';

  const userAvatar = (
    <Avatar>
      {message.sender[0]}
    </Avatar>
  );


  return (
    <div 
      className={classNames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrappperFromMe
      )}>
      {!isMessageFromMe && userAvatar}
      <Paper className={
        classNames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}>
        <Typography variant="caption">
          {message.sender}
        </Typography>
        <Typography variant="body1">
          {message.content}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  )
}

export default withStyles(styles)(Message)
