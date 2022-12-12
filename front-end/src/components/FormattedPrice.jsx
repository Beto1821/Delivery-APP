import PropTypes from 'prop-types';
import numberFormat from '../utils/numberFormat';

function FormattedPrice({ price, testid }) {
  return (
    <p>
      R$
      {' '}
      <span
        data-testid={ testid }
      >
        { numberFormat.format(price) }
      </span>
    </p>
  );
}

FormattedPrice.propTypes = {
  price: PropTypes.number.isRequired,
  testid: PropTypes.string.isRequired,
};

export default FormattedPrice;
