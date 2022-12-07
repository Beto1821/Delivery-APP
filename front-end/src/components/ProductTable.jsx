import propTypes from 'prop-types';
import ProductTableCard from './ProductTableCard';

function ProductTable({ products }) {
  return (
    <section>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
        {products.map((product, i) => (
          <ProductTableCard
            key={ i }
            name={ product.name }
            price={ product.price }
            quantity={ product.quantity }
          />
        ))}
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
      key: propTypes.number.isRequired,
      quantity: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductTable;
