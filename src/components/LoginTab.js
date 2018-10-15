import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: 16,
  },
  inputFieldsWrapper: {
    padding: 24,
  }
});

class LoginTab extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    }
  }



  handleInputChange = (event) => {
    event.persist();
    const {name, value} = event.target; 
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    console.log(`username:${username.value}, password:${password.value}`);
  }



  render() {
    const { username, password } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.inputFieldsWrapper}>

        <TextField
          required
          label="Username"
          name="username"
          autoComplete="username"
          className={classes.textField}
          type="text"
          margin="normal"
          fullWidth
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
          />
        <TextField
          required
          label="Password"
          name="password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button 
        fullWidth 
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}>
          Login
        </Button>
      </form>
      )

  }

}

export default withStyles(styles)(LoginTab);
