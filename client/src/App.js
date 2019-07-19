import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login/index';
import GlobalState from '../src/context/index';

class App extends Component {
  render() {
    return (
      // <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      // </GlobalState>
    );
  }
}
export default App;
