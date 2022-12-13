import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Orders';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
// import CustomerOrders from './pages/CustomerOrders';
import AdminManage from './pages/AdminManage';
import SellerOrderDetails from './pages/SellerOrderDetails';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route path="/customer/orders/" component={ Order } />
        <Route path="/seller/orders" component={ Order } />
        <Route path="/admin/manage" component={ AdminManage } />
        <Redirect from="/" to="/login" />
      </Switch>
    </LoginProvider>
  );
}

export default App;
