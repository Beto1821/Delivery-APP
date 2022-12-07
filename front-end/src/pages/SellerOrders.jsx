import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';

function Order() {
  const { data, setData } = useContext(DataContext);

  return (
    <div>
      <div>
        { data.map((card, index) => (
          <OrderCard card={ card } key={ index } />
        )) }
      </div>
    </div>
  );
}

export default SellerOrder;
