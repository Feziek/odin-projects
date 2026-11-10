import { useState } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({
  id,
  title,
  description,
  price,
  image,
  isInCart,
  onSubmit,
}) {
  const [quantity, setQuantity] = useState(1);
  const inputId = `quantity-${id}`;

  const handleAdd = () => {
    const amount = Math.max(1, Math.floor(Number(quantity)) || 1);
    onSubmit({ id, title, description, price, image }, amount);
  };

  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.actions}>
        {isInCart ? (
          <p className={styles.inCart}>Already in Cart</p>
        ) : (
          <>
            <div className={styles.quantity}>
              <label htmlFor={inputId}>Quantity</label>
              <input
                className={styles.quantityInput}
                type='number'
                id={inputId}
                min='1'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button
              type='button'
              className={styles.addButton}
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
