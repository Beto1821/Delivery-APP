import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
import CustomerOrders from './pages/CustomerOrders';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="customer/checkout" component={ Checkout } />
        {/* <Route path="customer/orders/:id" component={ OrderDetails } /> */}
        <Route path="/customer/orders" component={ CustomerOrders } />
        {/* <Route path="/seller/orders/:id" component={ SellerOrderDetails } /> */}
        {/* <Route path="/seller/orders/" component={ SellerOrders } /> */}
        {/* <Route path="/admin/manage" component={ AdminManage } /> */}
        <Redirect from="/" to="/login" />
      </Switch>
    </LoginProvider>

  );
}

export default App;
