import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/ProductsList';
import Order from './pages/Orders';

// function RedirectToLogin() {
//   return <Redirect to="/login" />;
// }

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/seller/orders/" component={ Order } />
        <Redirect from="/" to="/login" />
        {/* <Route path="custumer/checkout" component={ Checkout } />
        <Route path="customer/orders/:id" component={ OrderDetails } />
        <Route path="customer/orders/" component={ Orders } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/admin/manage" component={ AdminManage } /> */}
      </Switch>
    </LoginProvider>

  );
}

export default App;
