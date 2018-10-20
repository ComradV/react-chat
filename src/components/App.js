import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import ChatPage from '../containers/ChatPage';
import Authorization from '../containers/Authorization';
import configureStore from '../store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/(authorization)?" component={Authorization} />
        <Route path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
)

export default App;
