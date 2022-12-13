import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import { getOrders } from '../service/requests';
import EmptyOrder from '../components/EmptyOrder';
import useLocalStorage from '../hooks/useLocalStorage';

function Order() {
  const [data, setData] = useState(undefined);
  const [{ role }] = useLocalStorage('user', {});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOrders();
      console.log(response);
      setData(response.data);
    };

    fetchData();
  }, []);

  function setPrefix(occupation) {
    if (occupation === 'seller') return 'seller_orders';
    return 'customer_orders';
  }

  return (
    <div>
      <div>
        { data
          ? data.map((card, index) => (
            <OrderCard
              prefix={ setPrefix(role) }
              card={ card }
              key={ index }
              role={ role }
            />))
          : <EmptyOrder /> }
      </div>
    </div>
  );
}

export default Order;
