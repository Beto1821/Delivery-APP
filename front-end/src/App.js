import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import DataProvider from './context/DataProvider';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <LoginProvider>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      </LoginProvider>
      <DataProvider>
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/seller/orders/" component={ SellerOrders } />
      </DataProvider>
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
      <Route path="/customer/orders/" component={ CustomerOrders } />
      <Route path="/admin/manage" component={ AdminManage } />
    </Switch>

  );
}

export default App;
