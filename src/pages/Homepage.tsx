import styles from './Homepage.module.css';
import Circle from '../components/Circle';

function Homepage() {
    return (
        <main className={styles.homepage}>
            <div className={styles.text}>
                <h1>EV</h1>
                <h2>Front-End Developer</h2>
            </div>
            <Circle />
        </main>
    );
}

export default Homepage;
