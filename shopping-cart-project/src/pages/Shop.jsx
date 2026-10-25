import { useOutletContext } from 'react-router';
import ProductCard from '../components/ProductCard/ProductCard';
import { useProducts } from '../hooks/useProducts';

export default function Shop() {
  const { cart, addToCart, updateQuantity, removeFromCart } =
    useOutletContext();

  const [products] = useProducts();

  return (
    <>
      {products ? (
        <>
          <h1>Shop</h1>
          {products.map((product) => {
            const { id, title, description, price, image } = product;
            let inCart = false;
            if (cart.some((item) => item.product.id === id)) inCart = true;
            return (
              <ProductCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
                isInCart={inCart}
                onSubmit={addToCart}
              />
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
