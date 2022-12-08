import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import ProductTable from '../components/ProductTable';
import SelectInput from '../components/SelectInput';
import GenericInput from '../components/Input';
import Button from '../components/Button';
import { getSellers } from '../service/requests';
import { placeOrder } from '../service/saleRequests';

function Checkout() {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState();
  const [sellers, setSellers] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchSellers = async () => {
      const response = await getSellers();
      setSellers(response.data);
      setSellerId(response.data[0].id);
    };

    fetchSellers();
  }, []);

  const removeFromCart = (rId) => {
    setCart((prev) => prev.filter(({ id }) => id !== rId));
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    const OK_CODE = 201;
    const response = await placeOrder(
      {
        sellerId,
        address,
        number,
      },
      cart,
    );

    if (response.status === OK_CODE) {
      setCart([]);
      return history.push(`/customer/orders/${response.data.id}`);
    }

    setError(response.data);
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
          value={ sellerId }
          setter={ setSellerId }
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
        <Button
          dataTestId="customer_checkout__button-submit-order"
          text="FINALIZAR PEDIDO"
          type="submit"
          onClick={ submitOrder }
        />
        {error && <p>{error.message}</p>}
      </form>
    </main>
  ) : (
    <p>loading</p>
  );
}

export default Checkout;
