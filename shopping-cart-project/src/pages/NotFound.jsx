import { Link } from 'react-router';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <p className={styles.code} aria-hidden='true'>
        404
      </p>
      <h1>Page not found</h1>
      <p className={styles.message}>
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <div className={styles.actions}>
        <Link to='/' className={styles.primaryLink}>
          Back to home
        </Link>
        <Link to='/shop' className={styles.secondaryLink}>
          Browse the shop
        </Link>
      </div>
    </section>
  );
}
