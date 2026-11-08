import styles from './CartItem.module.css';

export default function CartItem({
  id,
  title,
  image,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.controls}>
        <button
          type='button'
          className={styles.stepButton}
          onClick={() => onUpdateQuantity(id, -1)}
          aria-label={`Decrease quantity of ${title}`}
        >
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button
          type='button'
          className={styles.stepButton}
          onClick={() => onUpdateQuantity(id, 1)}
          aria-label={`Increase quantity of ${title}`}
        >
          +
        </button>
      </div>
      <p className={styles.subtotal}>${(price * quantity).toFixed(2)}</p>
      <button
        type='button'
        className={styles.removeButton}
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
}
