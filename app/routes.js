import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';
import CounterPage from './containers/CounterPage';
import ProductPage from './containers/ProductPage';
import TablePage from './containers/TablePage';
import PosPage from './containers/PosPage';
import KitchenPage from './containers/KitchenPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/categories" component={CategoryPage} />
    <Route path="/products" component={ProductPage} />
    <Route path="/tables" component={TablePage} />
    <Route path="/pos" component={PosPage} />
      <Route path="/kitchen" component={KitchenPage} />
  </Route>
);
