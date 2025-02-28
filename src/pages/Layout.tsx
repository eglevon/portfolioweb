import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
}

export default Layout;
