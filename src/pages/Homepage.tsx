import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import Circle from '../components/Circle';

function Homepage() {
    return (
        <main className={styles.homepage}>
            <div className={styles.text}>
                <h1>EMV</h1>
                <h2>Front-End Developer</h2>
            </div>
            <div className={styles.btn}>
                <Link to='about'>
                    <Circle />
                </Link>
            </div>
        </main>
    );
}

export default Homepage;
