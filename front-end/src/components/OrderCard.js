import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dateFormat from '../utils/dateFormat';
import FormattedPrice from './FormattedPrice';

function OrderCard({ prefix, card, role }) {
  const {
    id,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = card;
  return (
    <Link to={ `/${role}/orders/${id}` }>
      <h3
        className="id-content"
        data-testid={ `${prefix}__element-order-id-${id}` }
      >
        { id }
      </h3>
      <section className="info-content">
        <h3
          className="status-content"
          data-testid={ `${prefix}__element-delivery-status-${id}` }
        >
          { status }
        </h3>
        <div className="more-info-content">
          <h4
            className="date-content"
            data-testid={ `${prefix}__element-order-date-${id}` }
          >
            { dateFormat(saleDate) }
          </h4>
          <h4
            className="date-content"
          >
            <FormattedPrice
              price={ totalPrice }
              testid={ `${prefix}__element-card-price-${id}` }
            />
          </h4>
        </div>
        { prefix === 'seller_orders'
          ? (
            <footer>
              <h5
                className="address-content"
                data-testid={ `${prefix}__element-card-address-${id}` }
              >
                { `${deliveryAddress}, ${deliveryNumber}` }
              </h5>
            </footer>
          ) : (
            <p />
          )}
      </section>
    </Link>
  );
}

OrderCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
  prefix: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default OrderCard;
