import propTypes from 'prop-types';
import ProductTableCard from './ProductTableCard';

function ProductTable({ products, removeProduct, testIdPrefix, totalPrice }) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            {removeProduct && <th>Remover item</th>}
          </tr>
        </thead>
        <tbody>
          {Object.values(products).map((product, i) => (
            <ProductTableCard
              { ...product }
              testIdPrefix={ testIdPrefix }
              removeProduct={ removeProduct }
              index={ i + 1 }
              key={ i }
            />
          ))}
        </tbody>
      </table>
      <p data-testid={ `${testIdPrefix}__element-order-total-price` }>
        {totalPrice}
      </p>
    </section>
  );
}

ProductTable.defaultProps = {
  removeProduct: undefined,
};

ProductTable.propTypes = {
  products: propTypes.objectOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      quantity: propTypes.number.isRequired,
    }),
  ).isRequired,
  testIdPrefix: propTypes.string.isRequired,
  removeProduct: propTypes.func,
  totalPrice: propTypes.number.isRequired,
};

export default ProductTable;
