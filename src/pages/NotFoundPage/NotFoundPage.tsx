import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Error404(): JSX.Element {
  return (
    <div className={`page ${styles.errorPage}`}>
      <div className={styles.errorBlock}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>Page not found</h2>
      </div>
      <Link to="/" className={styles.linkMain}>
        Main page
      </Link>
    </div>
  );
}

export default Error404;
