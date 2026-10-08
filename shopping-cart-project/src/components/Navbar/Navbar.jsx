import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
      </ul>
    </nav>
  );
}
