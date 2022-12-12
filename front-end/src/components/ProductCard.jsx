import { PropTypes } from 'prop-types';
import './ProductCard.css';

function ProductCard({ product, setProductQuantity, quantity }) {
  const { id, name, price, urlImage } = product;
  return (
    <div key={ id } className="containerItem">
      <span>
        R$
        {' '}
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {String(price).replace('.', ',')}
        </span>
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </span>
      <div>
        <button
          onClick={ () => setProductQuantity(product, (prev) => prev - 1) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
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
