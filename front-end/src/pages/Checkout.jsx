import useLocalStorage from '../hooks/useLocalStorage';
import ProductTable from '../components/ProductTable';

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
    </main>
  );
}

export default Checkout;
