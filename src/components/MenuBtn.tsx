import styles from './MenuBtn.module.css';

type MenuBtnProps = {
    onClick: () => void;
    isOpen: boolean;
    isDarkMode: boolean;
};

function MenuBtn({ onClick, isOpen, isDarkMode }: MenuBtnProps) {
    return (
        <button type='button' onClick={onClick} className={styles.menuBtn}>
            {isDarkMode ? <img src={isOpen ? '../src/assets/xmark-light.svg' : '../src/assets/bars-light.svg'} alt='Menu button' /> : <img src={isOpen ? '../src/assets/xmark.svg' : '../src/assets/bars.svg'} alt='Menu button' />}
        </button>
    );
}

export default MenuBtn;
