import { Link, NavLink } from 'react-router';
import styles from './Navbar.module.css';

export default function Navbar({ cart }) {
  const itemsQuantity = cart.reduce(
    (currentQuantity, item) => currentQuantity + item.quantity,
    0,
  );

  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.logo}>
        Logo
      </Link>
      <ul className={styles.links}>
        <li>
          <NavLink to='/' end className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/shop' className={linkClass}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' className={linkClass}>
            Cart
            {itemsQuantity > 0 && (
              <span className={styles.badge}>{itemsQuantity}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
