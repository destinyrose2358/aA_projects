import React from 'react';
import './App.css';
import ProductIndex from './products/ProductIndex';
import { Route, Switch } from "react-router-dom";
import Login from './Login';
import AuthRoute from '../util/route_util';
import Nav from './Nav';
import Register from './Register';
import ProductDetail from './products/ProductDetail';


const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Route path="/" component={Nav} />
      <Switch>
        <AuthRoute routeType="auth"  exact path="/login" component={Login} />
        <AuthRoute routeType="auth" exact path="/register" component={Register} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/" component={ProductIndex} />
      </Switch>
    </div>
  );
};

export default App;
