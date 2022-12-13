import React from 'react';
import Header from '.';

function HeaderSeller() {
  return (
    <Header
      testId={ {
        prefix: 'customer_products',
        sufix: 'orders',
      } }
      homepage="/seller/orders"
      homepageLabel="PEDIDOS"
    />
  );
}

export default HeaderSeller;
