import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function HeaderAdmin() {
  return (
    <div>
      <Link to="/admin/manage">
        <Button
          dataTestId="customer_products__element-navbar-link-orders"
          type="button"
          name="orders"
          text="GERENCIAR USUÁRIOS"
        />
      </Link>
      <h2 data-testid="customer_products__element-navbar-user-full-name">
        Trybeer Admin
      </h2>
      {/* <Link to="/login">
        <Button
          dataTestId="customer_products__element-navbar-link-logout"
          type="button"
          name="logout"
          text="SAIR "
        />
      </Link> */}
    </div>
  );
}

export default HeaderAdmin;
