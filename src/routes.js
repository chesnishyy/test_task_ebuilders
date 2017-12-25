import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App/App';
import Home from './components/Home';
import Register from './components/Register/Register';
import Login from './components/Login';

const routes = () => {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Register} />
      <Route path='login' component={Login} />
      <Route path='home' component={Home} />
    </Route>
  );
};

export default routes;
