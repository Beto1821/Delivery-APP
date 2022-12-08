import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';

function CartButton({ total }) {
  const history = useHistory();

  return (
    <div className="containerItem">
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ total === 0 }
      >
        Ver Carrinho:
        <span>
          R$
          {' '}
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {
              total.toFixed(2)
            }
          </span>
        </span>
      </button>
    </div>
  );
}

CartButton.propTypes = {
  totalValue: PropTypes.number,
}.isRequired;

export default CartButton;
