import React from 'react';

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import ChatPage from '../containers/ChatPage';
import Authorization from '../containers/Authorization';
import PrivateRoute from '../containers/PrivateRoute'
import configureStore from '../store';
import history from '../utils/history'

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history = {history}>
      <Switch>
        <Route exact path="/(authorization)?" component={Authorization} />
        <PrivateRoute path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
)

export default App;
