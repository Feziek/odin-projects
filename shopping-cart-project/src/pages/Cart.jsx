import { Link, useOutletContext } from 'react-router';
import toast from 'react-hot-toast';
import CartItem from '../components/CartItem/CartItem';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useOutletContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast('Checking out...');
  };

  return (
    <section>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p className={styles.empty}>
          Your cart is empty.{' '}
          <Link to='/shop' className={styles.shopLink}>
            Start shopping
          </Link>
        </p>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
          <div className={styles.summary}>
            <p className={styles.total}>Total: ${total.toFixed(2)}</p>
            <button
              type='button'
              className={styles.checkoutButton}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}
