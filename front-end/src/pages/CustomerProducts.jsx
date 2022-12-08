import React, { useDebugValue, useEffect, useState } from 'react';
import { getAll } from '../service/products';
import HeaderCustomer from '../components/HeaderCustomer';
import ProductCard from '../components/ProductCard';
import CartButton from '../components/CartButton';


function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([]);

  const addToLocalStorage = ({ id, name, price, urlImage, quantity }) => {
    const hasItem = value.findIndex((item) => item.id === id);
    if (hasItem >= 0) {
      value[hasItem].quantity += 1;
      setValue([...value]);
    } else {
      setValue([...value, { id, name, price, urlImage, quantity }]);
    }
  };

  const removeFromLocalStorage = (id) => {
    const hasItem = value.findIndex((item) => item.id === id);
    if (hasItem >= 0 && value[hasItem].quantity > 1) {
      value[hasItem].quantity -= 1;
      return setValue([...value]);
    }
    if (hasItem >= 0) {
      value.splice(hasItem, 1);
      return setValue([...value]);
    }
  };

  const setOnLocalStorage = ({ id, name, price, urlImage, quantity }) => {
    const hasItem = value.findIndex((item) => item.id === id);
    if (hasItem >= 0 && quantity > 0) {
      value[hasItem].quantity = quantity;
      return setValue([...value]);
    }
    if (hasItem >= 0 && quantity <= 0) {
      value.splice(hasItem, 1);
      return setValue([...value]);
    }
    return setValue([...value, { id, name, price, urlImage, quantity }]);
  };  

  useEffect(() => {
    async function getProducts() {
      const resp = await getAll();
      setProducts(resp.data);
    }
    getProducts();
  }, []);

  return (
    <div className='cards'>
      <HeaderCustomer />
      <div>
        {products.length && products.map((product) => (
          <ProductCard
            key={ product.id }
            id={ product.id }
            price={ product.price }
            img={ product.urlImage }
            name={ product.name }
            addItem={ addToLocalStorage }
            removeItem={ removeFromLocalStorage }
            setItem={ setOnLocalStorage }            
            qtd={ value.find((item) => item.id === product.id)?.quantity }
          />
        ))}
      </div>
      <CartButton
        total={ value.reduce((acc, v) => v.price * caches.quantity + acc, 0) }
       />
    </div>
  );
}

export default CustomerProducts;
