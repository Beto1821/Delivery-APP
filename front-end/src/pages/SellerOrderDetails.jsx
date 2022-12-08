import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary';
import ProductTable from '../components/ProductTable';
import { getSale } from '../service/saleRequests';

function SellerOrderDetails() {
  const { id } = useParams();
  const [sale, setSale] = useState();
  const testIdPrefix = 'seller_order_details';

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await getSale(id);
      setSale(response.data);
    };
    fetchOrder();
  }, [id]);

  return sale ? (
    <main>
      <OrderSummary sale={ sale } testIdPrefix={ testIdPrefix } />
      <ProductTable products={ sale.products } testIdPrefix={ testIdPrefix } />
    </main>
  ) : (
    <p>loading</p>
  );
}

export default SellerOrderDetails;
