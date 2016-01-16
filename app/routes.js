import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/categories" component={CategoryPage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
