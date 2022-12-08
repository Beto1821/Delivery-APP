import React, { useEffect, useState } from 'react';
import { getAll } from '../service/products';
import HeaderCustomer from '../components/HeaderCustomer';
import ProductCard from '../components/ProductCard';
import useLocalStorage from '../hooks/useLocalStorage';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage('cart', { products: {}, totalPrice: 0 });

  const addToCart = (product) => {
    const { id } = product;
    const newCart = { ...cart.products };
    if (Object.keys(newCart).find((key) => key === String(id))) {
      newCart[id].quantity += 1;
    } else {
      product.quantity = 1;
      newCart[id] = product;
    }
    setCart({ products: newCart, totalPrice: cart.totalPrice + newCart[id].price });
  };

  const removeFromCart = ({ id }) => {
    const newCart = { ...cart.products };
    if (newCart[id]) {
      if (newCart[id].quantity <= 1) {
        delete newCart[id];
      } else {
        newCart[id].quantity -= 1;
      }
      setCart({ products: newCart, totalPrice: cart.totalPrice - newCart[id].price });
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
            quantity={ cart.products[product.id]?.quantity }
          />
        ))}
      </div>
      <div>
        <p>
          Ver Carrinho
        </p>
        <p>
          Total
          {' '}
          { cart.totalPrice }
        </p>
      </div>
    </div>
  ) : <p>loading</p>;
}

export default CustomerProducts;
