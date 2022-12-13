import React from 'react';
import Header from '.';

function HeaderAdmin() {
  return (
    <Header
      testId={ {
        prefix: 'customer_products',
        sufix: 'orders',
      } }
      homepage="/admin/manage"
      homepageLabel="GERENCIAR USUÁRIOS"
    />
  );
}

export default HeaderAdmin;
