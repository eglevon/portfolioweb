import { useNavigate } from 'react-router-dom';
import styles from './Circle.module.css';

function Circle() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/about')} className={styles.outerCircle}>
            <div className={styles.innerCircle}>
                <img src='../src/assets/emv-dark.png' alt='EMV' />
            </div>
        </button>
    );
}

export default Circle;
