import React from 'react';
import { PropTypes } from 'prop-types';

function OrderDetails ({ id, sellerName, saleDate, saleStatus  }) {
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido 000
        { id }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Vend:
        {' '}
        { sellerName }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {  saleDate }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { saleStatus }
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check" type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

OrderDetails.propTypes = {
  id: PropTypes.number,
  sellerName: PropTypes.string,
  saleDate: PropTypes.string,
  saleStatus: PropTypes.string,
}.isRequired;

export default OrderDetails;
