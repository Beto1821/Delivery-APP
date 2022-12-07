import propTypes from 'prop-types';
import Button from './Button';

function ProductTableCard({ id, name, price, index, quantity, removeProduct }) {
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
      {removeProduct && (
        <td
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          <Button
            dataTestId={ `customer_checkout__element-order-table-remove-${index}` }
            name="Remover"
            text="Remover"
            type="button"
            onClick={ () => removeProduct(id) }
          />
        </td>
      )}
    </tr>
  );
}

ProductTableCard.defaultProps = {
  removeProduct: undefined,
};

ProductTableCard.propTypes = {
  removeProduct: propTypes.func,
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
};

export default ProductTableCard;
