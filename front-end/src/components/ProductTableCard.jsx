import propTypes from 'prop-types';
import numberFormat from '../utils/numberFormat';
import Button from './Button';

function ProductTableCard({
  id,
  name,
  price,
  index,
  quantity,
  removeProduct,
  testIdPrefix,
}) {
  return (
    <tr>
      <td
        data-testid={ `${testIdPrefix}__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td data-testid={ `${testIdPrefix}__element-order-table-name-${index}` }>
        {name}
      </td>
      <td
        data-testid={ `${testIdPrefix}__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `${testIdPrefix}__element-order-table-unit-price-${index}` }
      >
        {numberFormat.format(price)}
      </td>
      <td
        data-testid={ `${testIdPrefix}__element-order-table-sub-total-${index}` }
      >
        {numberFormat.format(price * quantity)}
      </td>
      {removeProduct && (
        <td
          data-testid={ `${testIdPrefix}__element-order-table-remove-${index}` }
        >
          <Button
            dataTestId={ `${testIdPrefix}__element-order-table-remove-${index}` }
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
  testIdPrefix: propTypes.string.isRequired,
};

export default ProductTableCard;
