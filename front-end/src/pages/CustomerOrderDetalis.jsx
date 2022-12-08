import React, { useState, useEffect } from 'react';
import HeaderCustomer from '../components/HeaderCustomer';
import OrderDetails from '../components/OrderDetails';
import OrderDetailsTable from '../components/OrderDetailsTable';
import OrderDetailsTotal from '../components/OrderDetailsTotal';
import salesInfo from '..//utils/saleMocks.json';

function CustomerOrderDetails () {
  const [data, setData] = useState([]);

  useEffect(() => {
    const prev = async () => {
      const saleData = salesInfo;
      setData(saleData);
    };
    prev();
  }, []);
  return (
    <div>
      <HeaderCustomer />
      <OrderDetails 
        id={ data.id }
        sellerName={ data.seller_name }
        saleDate={ data.sale_date }
        saleStatus={ data.status }
      />
      <OrderDetailsTable products={ data.salesProducts } />
      <OrderDetailsTotal totalPrice={ data.total_price } />
    </div>
  );
}

export default CustomerOrderDetails;