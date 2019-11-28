import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import MainLayoutRoute from '../layouts/main';

import Users from '../pages/users'
import Posts from '../pages/posts'

function Routes() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={Users} />
        <MainLayoutRoute exact path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
}

export default Routes;