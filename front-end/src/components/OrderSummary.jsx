import propTypes from 'prop-types';

const padId = (id) => {
  const padding = 4;
  return String(id).padStart(padding, '0');
};

const formatDate = (saleDate) => saleDate.replace(
  /(\d{4})-(\d{2})-(\d{2}).+/,
  '$3/$2/$1',
);

function OrderSummary({
  sale: {
    id,
    saleDate,
    status,
  },
  children,
  testIdPrefix,
}) {
  return (
    <div>
      <p>
        <span
          data-testid={
            `${testIdPrefix}__element-order-details-label-order-id`
          }
        >
          PEDIDO
          {' '}
          {padId(id)}
        </span>
        <span
          data-testid={
            `${testIdPrefix}__element-order-details-label-order-date`
          }
        >
          {formatDate(saleDate)}
        </span>
        <span
          data-testid={
            `${testIdPrefix}__element-order-details-label-delivery-status`
          }
        >
          {status}
        </span>
      </p>
      <div>
        { children }
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  sale: propTypes.shape({
    id: propTypes.number.isRequired,
    saleDate: propTypes.string.isRequired,
    status: propTypes.string.isRequired,
  }).isRequired,
  children: propTypes.arrayOf(propTypes.element).isRequired,
  testIdPrefix: propTypes.string.isRequired,
};

export default OrderSummary;
