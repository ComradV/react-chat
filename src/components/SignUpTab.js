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

class SignUpTab extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
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
  passwordsAreValid = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;
    this.setState((prevState) => (
      {
      password: {
        ...prevState.password,
        isValid,
      },
      repeatedPassword: {
        ...prevState.repeatedPassword,
        isValid,
      },
    }))
    return isValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if(!this.passwordsAreValid()){
      return;
    }

    this.props.onSubmit(username.value, password.value);

  }


  render() {
    const { username, password, repeatedPassword } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.inputFieldsWrapper}>

        <TextField
          required
          label="Username"
          autoComplete="username"
          name="username"
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
          fullWidth
          label="Password"
          type="password"
          name="password"
          className={classes.textField}
          autoComplete="new-password"
          margin="normal"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />

        <TextField
          required
          fullWidth
          label="Repeat password"
          type="password"
          name="repeatedPassword"
          className={classes.textField}
          autoComplete="new-password"
          margin="normal"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />


        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}>
          Signup
        </Button>
      </form>
    )

  }

}

export default withStyles(styles)(SignUpTab);
