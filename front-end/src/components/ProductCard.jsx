import { PropTypes } from 'prop-types';
import './ProductCard.css';

function ProductCard({ product, setProductQuantity, quantity }) {
  const { id, name, price, urlImage } = product;
  return (
    <div
      key={ id }
      className="rounded-md shadow border grid grid-cols-1 w-60 h-80 bg-white font-sans"
    >
      <span className="block ml-auto mr-auto mt-5">
        R$
        {' '}
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {String(price).replace('.', ',')}
        </span>
      </span>
      <img
        className="block ml-auto mr-auto h-40 w-26"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <span
        className="block ml-auto mr-auto"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </span>
      <div className="block ml-auto mr-auto">
        <button
          onClick={ () => setProductQuantity(product, (prev) => prev - 1) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          className=""
          data-testid={ `customer_products__input-card-quantity-${id}` }
          id={ id }
          name={ name }
          value={ Number(quantity).toString() }
          onChange={ ({ target: { value } }) => setProductQuantity(product, value) }
          type="number"
        />
        <button
          onClick={ () => setProductQuantity(product, (prev) => prev + 1) }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.defaultProps = {
  quantity: 0,
};

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductCard;
