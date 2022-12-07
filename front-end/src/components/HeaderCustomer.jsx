import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function HeaderCustomer() {
  return (
    <div>
      <Link to="/customer/products">
        <Button
          dataTestId="customer_products__element-navbar-link-products"
          type="button"
          name="products"
          text="PRODUTOS"
        />
      </Link>
      <Link to="/customer/orders">
        <Button
          dataTestId="customer_products__element-navbar-link-orders"
          type="button"
          name="orders"
          text="MEUS PEDIDOS"
        />
      </Link>
      <h2 data-testid="customer_products__element-navbar-user-full-name">
        Nome
      </h2>
      <Link to="/login">
        <Button
          dataTestId="customer_products__element-navbar-link-logout"
          type="button"
          name="logout"
          text="SAIR "
        />

      </Link>
    </div>
  );
}

export default HeaderCustomer;
