import useLocalStorage from '../hooks/useLocalStorage';
import ProductTable from '../components/ProductTable';

function Checkout() {
  const [products] = useLocalStorage('cart', [
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

  return (
    <main>
      <ProductTable products={ products } />
    </main>
  );
}

export default Checkout;
