import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ProductTable from '../components/ProductTable';
import SelectInput from '../components/SelectInput';
import GenericInput from '../components/Input';
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
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
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
      <form>
        <SelectInput
          fieldName="P. Vendedora Responsável"
          name="Vendedor"
          nameField="name"
          options={ sellers }
          testId="customer_checkout__select-seller"
          valueField="id"
        />
        <GenericInput
          fieldName="Endereço"
          input={ address }
          name="address"
          placeholder="Travessa Terceira, Bairro Muruci"
          testId="customer_checkout__input-address"
          type="text"
          setter={ setAddress }
        />
        <GenericInput
          fieldName="Número"
          input={ number }
          name="number"
          placeholder="198"
          testId="customer_checkout__input-address-number"
          type="text"
          setter={ setNumber }
        />
      </form>
    </main>
  ) : (
    <p>loading</p>
  );
}

export default Checkout;
