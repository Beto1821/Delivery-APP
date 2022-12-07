import propTypes from 'prop-types';
import Button from './Button';

function ProductTableCard({ name, price, key, quantity }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${key}` }
      >
        {key}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${key}` }>
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${key}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${key}` }
      >
        {price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${key}` }
      >
        {price * quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${key}` }>
        <Button />
      </td>
    </tr>
  );
}

ProductTableCard.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  key: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
};

export default ProductTableCard;
