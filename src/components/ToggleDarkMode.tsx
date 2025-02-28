import styles from './ToggleDarkMode.module.css';

type ToggleDarkModeProps = {
    onClick: () => void;
    isDarkMode: boolean;
};

function ToggleDarkMode({ onClick, isDarkMode }: ToggleDarkModeProps) {
    return (
        <button type='button' onClick={onClick} className={styles.button}>
            <img src={isDarkMode ? '../src/assets/sun.svg' : '../src/assets/moon.svg'} alt='Dark/Light mode' />
        </button>
    );
}

export default ToggleDarkMode;
