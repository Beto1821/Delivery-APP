import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ProductTable from '../components/ProductTable';
import SelectInput from '../components/SelectInput';
import { getSellers } from '../service/requests';

function Checkout() {
  const [cart, setCart] = useLocalStorage('cart', [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: 2.2,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: 7.5,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      quantity: 2,
    },
  ]);
  const [sellers, setSellers] = useState();

  useEffect(() => {
    const fetchSellers = async () => {
      const response = await getSellers();
      setSellers(response.data);
    };

    fetchSellers();
  }, []);

  const removeFromCart = (rId) => {
    setCart((prev) => prev.filter(({ id }) => id !== rId));
  };

  return sellers ? (
    <main>
      <ProductTable products={ cart } removeProduct={ removeFromCart } />
      <SelectInput
        fieldName="Vendedor"
        name="Vendedor"
        nameField="name"
        options={ sellers }
        testId="customer_checkout__select-seller"
        valueField="id"
      />
    </main>
  ) : (
    <p>loading</p>
  );
}

export default Checkout;
