import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary';
import ProductTable from '../components/ProductTable';
import Button from '../components/Button';
import { getSale, markSaleAs } from '../service/saleRequests';

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

  const handleProcessing = async () => {
    const response = await markSaleAs('processing', id);
    setSale(response.data);
  };

  const handleDelivering = async () => {
    const response = await markSaleAs('delivering', id);
    setSale(response.data);
  };

  return sale ? (
    <main>
      <OrderSummary sale={ sale } testIdPrefix={ testIdPrefix }>
        <Button
          dataTestId={ `${testIdPrefix}__button-preparing-check` }
          text="PREPARAR PEDIDO"
          type="button"
          disabled={ sale.status !== 'Pendente' }
          onClick={ handleProcessing }
        />
        <Button
          dataTestId={ `${testIdPrefix}__button-dispatch-check` }
          text="SAIU PARA ENTREGA"
          type="button"
          disabled={ sale.status !== 'PREPARANDO' }
          onClick={ handleDelivering }
        />
      </OrderSummary>
      <ProductTable
        products={ sale.products }
        testIdPrefix={ testIdPrefix }
        totalPrice={ sale.totalPrice }
      />
    </main>
  ) : (
    <p>loading</p>
  );
}

export default SellerOrderDetails;
