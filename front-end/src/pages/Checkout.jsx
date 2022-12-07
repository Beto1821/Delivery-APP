import useLocalStorage from '../hooks/useLocalStorage';
import ProductTable from '../components/ProductTable';
import SelectInput from '../components/SelectInput';

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

  const removeFromCart = (rId) => {
    setCart((prev) => prev.filter(({ id }) => id !== rId));
  };

  return (
    <main>
      <ProductTable products={ cart } removeProduct={ removeFromCart } />
      <SelectInput
        fieldName="Vendedor"
        name="Vendedor"
        nameField="name"
        options={ [
          {
            name: 'Foo',
            id: 2,
          },
          {
            name: 'Bar',
            id: 8,
          },
        ] }
        testId="customer_checkout__select-seller"
        valueField="id"
      />
    </main>
  );
}

export default Checkout;
