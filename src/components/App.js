import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import ChatPage from './ChatPage'
import WelcomePage from './WelcomePage'
import Authorization from './Authorization'



const App = () => (
  <Router>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/authorization" component={Authorization} />
      <Redirect to="/authorization" />
    </Switch>
  </Router>
)

export default App;
