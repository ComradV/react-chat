import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



import ChatHeader from './ChatHeader'


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
  },
  formWrapper:{
    margin: '88px auto',
    width: 500,
  },
  tabs:{
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 0,
  },
  button: {
    marginTop: 16,
  },
  inputFieldsWrapper: {
    padding: 24,
  }
});

class Authorization extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
       <ChatHeader fullWidth='true'/>
        <div className={classes.formWrapper}>
          <Paper className={classes.container}>
            <Paper square className={classes.tabs}>
              <Tabs fullWidth value={value} onChange={this.handleChange}>
                <Tab label="Login" />
                <Tab label="Sign up" />
              </Tabs>
            </Paper>
            <div className={classes.inputFieldsWrapper}>

              <LoginPassword classes={classes}/>

              {value === 0 && <LoginTab classes={classes}/>}
              {value === 1 && <SignupTab classes={classes}/>}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const LoginPassword = ({classes}) => (
  <React.Fragment>
    <TextField
    required
    label="Username"
    autoComplete="current-login"
    className={classes.textField}
    margin="normal"
    fullWidth
    />
    <TextField
    required
    label="Password"
    className={classes.textField}
    type="password"
    autoComplete="current-password"
    margin="normal"
    fullWidth
    />
  </React.Fragment>
);

const LoginTab = ({classes}) => (
  <Button fullWidth variant="contained" color="primary" className={classes.button}>
    Login
  </Button>
)

const SignupTab = ({classes}) => (
  <React.Fragment>
    <TextField
    required
    label="Repeat password"
    className={classes.textField}
    type="password"
    margin="normal"
    fullWidth
    />  
    <Button fullWidth variant="contained" color="primary" className={classes.button}>
      Signup
    </Button>
  </React.Fragment>
)

export default withStyles(styles)(Authorization);
