import { useEffect, useState } from 'react';

export function useProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error(`Error occured: ${response.message}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return [products, setProducts];
}
