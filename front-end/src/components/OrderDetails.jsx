import React from 'react';
import { PropTypes } from 'prop-types';
import dateFormat from '../utils/dateFormat';

function OrderDetails({ id, sellerName, saleDate, saleStatus, handleReceiving }) {
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
        { dateFormat(saleDate) }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { saleStatus }
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        onClick={ handleReceiving }
        disabled={ saleStatus !== 'Em Trânsito' }
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
  handleReceiving: PropTypes.func,
}.isRequired;

export default OrderDetails;
