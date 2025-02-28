import { Link } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import styles from './Logo.module.css';

function Logo() {
    const { isDarkMode } = useDarkMode();

    return (
        <Link to='/' className={styles.logo}>
            <img src={isDarkMode ? '../src/assets/logo-light.png' : '../src/assets/logo.png'} alt='Logo' />
        </Link>
    );
}

export default Logo;
