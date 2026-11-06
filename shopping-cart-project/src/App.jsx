import { Outlet } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const isInCart = prev.some((item) => item.id === product.id);

      if (isInCart) {
        return prev;
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity,
        },
      ];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cart={cart} />
      <main>
        <Outlet context={{ cart, addToCart, updateQuantity, removeFromCart }} />
      </main>
      <Toaster />
    </>
  );
}
