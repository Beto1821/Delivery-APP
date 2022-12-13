import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderCustomer from '../components/Header/HeaderCustomer';
import OrderDetails from '../components/OrderDetails';
import ProductTable from '../components/ProductTable';
import { getSale } from '../service/saleRequests';

function CustomerOrderDetails() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const prev = async () => {
      const saleData = await getSale(id);
      console.log(saleData.data);
      setData(saleData.data);
    };
    prev();
  }, [id]);

  return data ? (
    <div>
      <HeaderCustomer />
      <OrderDetails
        id={ data.id }
        sellerName={ data.seller.name }
        saleDate={ data.saleDate }
        saleStatus={ data.status }
      />
      <ProductTable
        products={ data.products }
        testIdPrefix="customer_order_details"
        totalPrice={ Number(data.totalPrice) }
      />
    </div>
  ) : <p>loading</p>;
}

export default CustomerOrderDetails;
