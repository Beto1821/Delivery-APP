import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../service/products';
import HeaderCustomer from '../components/Header/HeaderCustomer';
import ProductCard from '../components/ProductCard';
import useLocalStorage from '../hooks/useLocalStorage';
import FormattedPrice from '../components/FormattedPrice';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage('cart', { products: {}, totalPrice: 0 });

  const setProductQuantity = (product, qtd) => {
    const { id } = product;
    const newProducts = { ...cart.products };
    const newQuantity = qtd instanceof Function
      ? Number(qtd(newProducts[id]?.quantity || 0))
      : Number(qtd);

    if (Object.keys(newProducts).find((key) => key === String(id))) {
      if (newQuantity < 1) {
        delete newProducts[id];
      } else {
        newProducts[id].quantity = newQuantity;
      }
    } else if (newQuantity > 0) {
      newProducts[id] = { ...product, quantity: newQuantity };
    }

    setCart({
      products: newProducts,
      totalPrice: +Object.values(newProducts).reduce(
        (prev, { price, quantity }) => prev + +price * quantity,
        0,
      ).toFixed(2),
    });
  };

  useEffect(() => {
    async function getProducts() {
      const resp = await getAll();
      setProducts(resp.data);
    }
    getProducts();
  }, []);

  return products ? (
    <div className="bg-gray-200">
      <HeaderCustomer />
      <div
        className="max-w-1l
        grid sm:grid-cols-3 md:grid-cols-4
        gap-10 basis-full ml-14"
      >
        {products.length && products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            setProductQuantity={ setProductQuantity }
            quantity={ cart.products[product.id]?.quantity }
          />
        ))}
      </div>
      <div className="py-20 px-80 flex justify-center font-sans ">
        <button
          className="hover:font-bold"
          data-testid="customer_products__button-cart"
          type="button"
          disabled={ Object.values(cart.products).length === 0 }
        >
          <Link to="/customer/checkout">
            Ver Carrinho
          </Link>
        </button>
        <div className="px-40">
          Total
          {' '}
          <FormattedPrice
            testid="customer_products__checkout-bottom-value"
            price={ cart.totalPrice }
          />
        </div>
      </div>
    </div>
  ) : <p>loading</p>;
}

export default CustomerProducts;
