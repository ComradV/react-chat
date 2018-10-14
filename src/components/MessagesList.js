import React, { createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Message from './Message';


const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
});

class MessagesList extends React.Component {
  constructor(props) {
    super(props);

    this.messagesWrapper = createRef();
  }
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapper.current;
    messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
  }

  render() {
    const { classes, messages } = this.props;
    return (
        <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
            {messages && messages.map((message, index) => (
              <Message key={index} message={message}></Message>
            ))}
        </div>
    )
  }
}

export default withStyles(styles)(MessagesList);
