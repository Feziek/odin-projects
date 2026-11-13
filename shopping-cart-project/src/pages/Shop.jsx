import { useOutletContext } from 'react-router';
import ProductCard from '../components/ProductCard/ProductCard';
import { useProducts } from '../hooks/useProducts';
import styles from '../styles/Shop.module.css';

export default function Shop() {
  const { cart, addToCart } = useOutletContext();
  const [products] = useProducts();

  return (
    <section>
      <h1>Shop</h1>
      {products ? (
        <div className={styles.grid}>
          {products.map((product) => {
            const { id, title, description, price, image } = product;
            const inCart = cart.some((item) => item.id === id);
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
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </section>
  );
}
