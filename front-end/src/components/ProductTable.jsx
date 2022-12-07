import propTypes from 'prop-types';
import ProductTableCard from './ProductTableCard';

function ProductTable({ products }) {
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
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <ProductTableCard
              { ...product }
              index={ i + 1 }
              key={ i }
            />
          ))}
        </tbody>
      </table>
      <p data-testid="customer_checkout__element-order-total-price">
        {products.reduce(
          (prev, { price, quantity }) => prev + price * quantity,
          0,
        )}
      </p>
    </section>
  );
}

ProductTable.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      quantity: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductTable;
