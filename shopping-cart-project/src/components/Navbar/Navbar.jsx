import { Link } from 'react-router';

export default function Navbar({ cart }) {
  const itemsQuantity = cart.reduce(
    (currentQuantity, item) => currentQuantity + item.quantity,
    0,
  );

  return (
    <nav>
      <div>Logo</div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
      </ul>
      <span>({itemsQuantity})</span>
    </nav>
  );
}
