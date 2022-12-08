import { PropTypes } from 'prop-types';
import './ProductCard.css';

function ProductCard({ product, incrementCart, decrementCart }) {
  const { id, name, price, urlImage } = product;

  return (
    <div key={ id } className="containerItem">
      <span>
        R$
        {' '}
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        />
        { price}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}

      </span>
      <div>
        <button
          onClick={ () => decrementCart() }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -

        </button>
        <button
          onClick={ () => incrementCart(product) }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +

        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductCard;
