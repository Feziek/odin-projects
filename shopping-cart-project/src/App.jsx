import { Outlet } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const isInCart = prev.some((item) => item.id === product.id);

      if (isInCart) {
        return prev;
      }

      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (product, quantity = 1) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity } : item,
      ),
    );
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <Navbar cart={cart}/>
      <main>
        <Outlet context={{ cart, addToCart, updateQuantity, removeFromCart }} />
      </main>
    </>
  );
}
