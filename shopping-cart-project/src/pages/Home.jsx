import { Link } from 'react-router';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1>Shop with Ease</h1>
      <p>
        From finding your favorites to an easy checkout, we’re here to make your
        experience smooth as possible.
      </p>
      <div className={styles.buttonSection}>
        <Link to='/shop' className={styles.primaryButton}>
          Shop now.
        </Link>
        <Link to='/cart' className={styles.secondaryButton}>
          View your Cart.
        </Link>
      </div>
    </section>
  );
}
