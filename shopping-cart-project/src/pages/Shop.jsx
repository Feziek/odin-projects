import ProductCard from '../components/ProductCard/ProductCard';
import { useProducts } from '../hooks/useProducts';

export default function Shop() {
  const [products] = useProducts();

  return (
    <>
      {products ? (
        <>
          <h1>Shop</h1>
          {products.map((product) => {
            const { id, title, description, price, image } = product;
            return (
              <ProductCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
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
