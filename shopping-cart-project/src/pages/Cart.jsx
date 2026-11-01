import { Link, useOutletContext } from 'react-router';
import toast from 'react-hot-toast';
import CartItem from '../components/CartItem/CartItem';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useOutletContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast('Checking out...');
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to='/shop'>Start shopping</Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          <p>Total: ${total.toFixed(2)}</p>
          <button type='button' onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </>
  );
}
