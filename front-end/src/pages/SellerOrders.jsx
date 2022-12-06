import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import OrderCard from '../components/OrderCard';

function SellerOrder() {
  const { data, setData } = useContext(DataContext);

  return (
    <div>
      <div>
        { data.map((card) => (
          <OrderCard card={ card } />
        )) }
      </div>
    </div>
  );
}

export default SellerOrder;
