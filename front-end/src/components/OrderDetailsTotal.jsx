import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsTotal({ totalPrice }) {
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        Total: R$
        {' '}
        { totalPrice }
      </span>
    </div>
  );
}

OrderDetailsTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default OrderDetailsTotal;
