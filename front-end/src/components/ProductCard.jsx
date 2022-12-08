import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCard.css';

function ProductCard({ id, name, price, img, addItem, setItem, removeItem, qtd = 0 }) {
  const handleInputChange = ({ target: { value } }) => {
    setItem({
      id,
      price,
      urlImage: img,
      quantity: Number(value),
    });
  };
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
        src={ img }
        alt={ name }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}

      </span>
      <div>
        <button
          onClick={ () => removeItem(id) }
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }

        >
          -

        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          id="productQtdInput"
          placeholder="0"
          value={ qtd }
          onChange={ handleInputChange }
        />
        <button
          onClick={ () => addItem({
            id, name, price, urlImage: img, quantity: 1 }) }
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
  img: PropTypes.string,
  addItem: PropTypes.function,
  removeItem: PropTypes.function,
  setItem: PropTypes.function,
  qtd: PropTypes.number,
}.isRequired;

export default ProductCard;
