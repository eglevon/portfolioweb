import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

function PageNotFound() {
    return (
        <main className={styles.pageNotFound}>
            <h2>Oops!</h2>
            <p>The page you were looking for doesn't exist.</p>
            <p>
                Take me back to <Link to='/'>Homepage</Link>.
            </p>
        </main>
    );
}

export default PageNotFound;
