import React, { useDebugValue, useEffect, useState } from 'react';
import { getAll } from '../service/products';
import HeaderCustomer from '../components/HeaderCustomer';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const resp = await getAll();
      setProducts(resp.data);
    }
    getProducts();
  }, []);
  console.log(cart.totalPrice);
  return (
    <div>
      <HeaderCustomer />
      <div className="cards">
        {products.length && products.map((product) => (
          <ProductCard
            key={ product.id }
            id={ product.id }
            price={ product.price }
            img={ product.urlImage }
            name={ product.name }
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerProducts;
