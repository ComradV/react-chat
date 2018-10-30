import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

class CreateChatButton extends React.Component {
  state = {
    open: false,
    chatName: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      chatName: '',
     });
  };

  handleCreate = (event) => {
    this.props.createChat(this.state.chatName);
    this.setState({
       open: false,
       chatName:'',
      });
  };

  handleTitleChange = (event) => {
    this.setState({
      chatName: event.target.value,
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="primary"
          className={classes.newChatButton}
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Button>


        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create new chat</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter name of new chat
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="New chat name"
              type="text"
              fullWidth
              value={this.state.chatName}
              onChange={this.handleTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCreate} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CreateChatButton);