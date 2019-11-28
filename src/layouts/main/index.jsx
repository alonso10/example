import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../components/navbar';

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        { props.children }
      </div>
    </div>
  );
};

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <MainLayout>
        <Component {...matchProps} />
      </MainLayout>
    )} />
  );
};

export default MainLayoutRoute;