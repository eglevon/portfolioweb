import Logo from './Logo';
import PageNav from './PageNav';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <PageNav />
        </header>
    );
}

export default Header;
