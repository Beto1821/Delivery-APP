import propTypes from 'prop-types';
import ProductTableCard from './ProductTableCard';

function ProductTable({ products, removeProduct, testIdPrefix }) {
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
          {products.map((product, i) => (
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
        {products.reduce(
          (prev, { price, quantity }) => prev + price * quantity,
          0,
        )}
      </p>
    </section>
  );
}

ProductTable.defaultProps = {
  removeProduct: undefined,
};

ProductTable.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      quantity: propTypes.number.isRequired,
    }),
  ).isRequired,
  testIdPrefix: propTypes.string.isRequired,
  removeProduct: propTypes.func,
};

export default ProductTable;
