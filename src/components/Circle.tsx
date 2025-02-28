import styles from './Circle.module.css';

function Circle() {
    return (
        <div className={styles.outerCircle}>
            <div className={styles.innerCircle}>
                <img src='../src/assets/emv-dark.png' alt='EMV' />
            </div>
        </div>
    );
}

export default Circle;
