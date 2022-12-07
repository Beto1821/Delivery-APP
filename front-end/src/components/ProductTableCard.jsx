import propTypes from 'prop-types';
import Button from './Button';

function ProductTableCard({ name, price, index, quantity }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {price * quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${index}` }>
        <Button
          dataTestId={ `customer_checkout__element-order-table-remove-${index}` }
          name="Remover"
          text="Remover"
          type="button"
        />
      </td>
    </tr>
  );
}

ProductTableCard.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
};

export default ProductTableCard;
