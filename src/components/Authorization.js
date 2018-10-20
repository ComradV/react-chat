import React from 'react';
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import LoginTab from './LoginTab';
import SignUpTab from './SignUpTab';


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
    const { classes, signup, login, isAuthenticated } = this.props;
    const { value } = this.state;

    if(isAuthenticated) {
      return (
        <Redirect to='/chat'></Redirect>
      )
    }
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
            {value === 0 && <LoginTab onSubmit={login}/>}
            {value === 1 && <SignUpTab onSubmit={signup}/>}
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Authorization);
