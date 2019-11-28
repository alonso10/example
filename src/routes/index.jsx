import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import MainLayoutRoute from '../layouts/main';

import Users from '../pages/users'
import SecondPage from '../pages/SecondPage'

function Routes() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={Users} />
        <MainLayoutRoute exact path="/dos" component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default Routes;