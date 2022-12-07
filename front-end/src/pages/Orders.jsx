import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import { getOrders } from '../service/requests';

function Order() {
  const [data, setData] = useState([]);

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
        { data.map((card, index) => (
          <OrderCard card={ card } key={ index } />
        )) }
        a
      </div>
    </div>
  );
}

export default Order;
