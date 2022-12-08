import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import { getOrders } from '../service/requests';
import EmptyOrder from '../components/EmptyOrder';

function Order() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOrders();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        { data
          ? data.map((card, index) => (
            <OrderCard card={ card } key={ index } />))
          : <EmptyOrder /> }
        a
      </div>
    </div>
  );
}

export default Order;
