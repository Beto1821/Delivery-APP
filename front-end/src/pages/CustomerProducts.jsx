import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../service/products';
import HeaderCustomer from '../components/HeaderCustomer';
import ProductCard from '../components/ProductCard';
import useLocalStorage from '../hooks/useLocalStorage';

// eslint-disable-next-line sonarjs/cognitive-complexity
function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage('cart', { products: {}, totalPrice: 0 });

  const handleChange = (e, product) => {
    const newQuantity = e.target.value;
    const { id } = product;
    const newCart = { ...cart.products };

    if (Object.keys(newCart).find((key) => key === String(id))) {
      if (newQuantity < 1) {
        delete newCart[id];
      } else {
        newCart[id].quantity = newQuantity;
      }
    } else {
      product.quantity = newQuantity;
      newCart[id] = product;
    }

    setCart({
      products: newCart,
      totalPrice: +Object.values(newCart).reduce(
        (prev, { price, quantity }) => prev + +price * quantity,
        0,
      ).toFixed(2),
    });
  };

  const addToCart = (product) => {
    const { id } = product;
    const newCart = { ...cart.products };
    if (Object.keys(newCart).find((key) => key === String(id))) {
      newCart[id].quantity += 1;
    } else {
      product.quantity = 1;
      newCart[id] = product;
    }
    setCart({
      products: newCart,
      totalPrice: +(cart.totalPrice + +newCart[id].price).toFixed(2),
    });
  };

  const removeFromCart = ({ id }) => {
    const newCart = { ...cart.products };
    if (newCart[id]) {
      if (newCart[id].quantity <= 1) {
        delete newCart[id];
      } else {
        newCart[id].quantity -= 1;
      }
      setCart({
        products: newCart,
        totalPrice: +(cart.totalPrice - +cart.products[id].price).toFixed(2),
      });
    }
  };

  useEffect(() => {
    async function getProducts() {
      const resp = await getAll();
      setProducts(resp.data);
    }
    getProducts();
  }, []);

  return products ? (
    <div className="cardContainer">
      <HeaderCustomer />
      <div className="cards">
        {products.length && products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            addToCart={ addToCart }
            removeFromCart={ removeFromCart }
            handleChange={ handleChange }
            quantity={ cart.products[product.id]?.quantity }
          />
        ))}
      </div>
      <div>
        <button
          data-testid="customer_products__button-cart"
          type="button"
          disabled={ Object.values(cart.products).length === 0 }
        >
          <Link to="/customer/checkout">
            Ver Carrinho
          </Link>
        </button>
        <p>
          Total
          {' '}
          <span data-testid="customer_products__checkout-bottom-value">
            { String(cart.totalPrice).replace('.', ',') }
          </span>
        </p>
      </div>
    </div>
  ) : <p>loading</p>;
}

export default CustomerProducts;
