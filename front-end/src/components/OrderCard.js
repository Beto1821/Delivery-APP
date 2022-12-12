import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ prefix, card }) {
  const {
    sellerId,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = card;
  return (
    <div>
      <h3
        className="id-content"
        data-testid={ `${prefix}__element-order-id-${sellerId}` }
      >
        { sellerId }
      </h3>
      <section className="info-content">
        <h3
          className="status-content"
          data-testid={ `${prefix}__element-delivery-status-${sellerId}` }
        >
          { status }
        </h3>
        <div className="more-info-content">
          <h4
            className="date-content"
            data-testid={ `${prefix}__element-order-date-${sellerId}` }
          >
            { saleDate }
          </h4>
          <h4
            className="date-content"
            data-testid={ `${prefix}__element-card-price-${sellerId}` }
          >
            { totalPrice }
          </h4>
        </div>
        { prefix === 'seller_orders'
          ? (
            <footer>
              <h5
                className="address-content"
                data-testid={ `${prefix}__element-card-address-${sellerId}` }
              >
                { `${deliveryAddress}, ${deliveryNumber}` }
              </h5>
            </footer>
          ) : (
            <p />
          )}
      </section>
    </div>
  );
}

OrderCard.propTypes = {
  card: PropTypes.shape({
    sellerId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
  prefix: PropTypes.string.isRequired,
};

export default OrderCard;
