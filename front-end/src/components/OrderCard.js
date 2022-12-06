import PropTypes from 'prop-types';

function OrderCard({
  id,
  orderDate,
  orderStatus,
  value,
  address,
}) {
  return (
    <div>
      <div className="id-content">
        { id }
      </div>
      <section className="info-content">
        <div className="status-content">
          { orderStatus }
        </div>
        <div className="more-info-content">
          { orderDate }
          { value }
        </div>
        <footer>
          { address || '' }
        </footer>
      </section>
    </div>
  );
}

OrderCard.defaultProps = {
  address: undefined,
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  address: PropTypes.string,
};

export default GenericInput;
