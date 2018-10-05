import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './testp.css';
import MyComponent from './MyComponent'
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro1">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent greeting="Hi! Hi!!!">Child</MyComponent>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
    );
  }
}

export default App;
