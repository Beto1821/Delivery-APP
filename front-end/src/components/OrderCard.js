import PropTypes from 'prop-types';

function OrderCard({
  sellerId,
  saleDate,
  status,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
}) {
  return (
    <div>
      <div className="id-content">
        { sellerId }
      </div>
      <section className="info-content">
        <div className="status-content">
          { status }
        </div>
        <div className="more-info-content">
          { saleDate }
          { totalPrice }
        </div>
        <footer>
          { `${deliveryNumber}, ${deliveryAddress}` || '' }
        </footer>
      </section>
    </div>
  );
}

OrderCard.propTypes = {
  sellerId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};

export default OrderCard;
