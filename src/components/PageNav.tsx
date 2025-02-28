import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import ToggleDarkMode from './ToggleDarkMode';
import MenuBtn from './MenuBtn';
import useDarkMode from '../hooks/useDarkMode';

const navigation = [
    { link: '/', img: '../src/assets/home.svg', text: 'Home' },

    { link: '/about', img: '../src/assets/aboutme.svg', text: 'About Me' },

    { link: '/projects', img: '../src/assets/projects.svg', text: 'Projects' },

    { link: '/contact', img: '../src/assets/contact.svg', text: 'Contact' },
];

function PageNav() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const navRef = useRef<HTMLUListElement>(null);
    const btnsRef = useRef<HTMLDivElement>(null);

    function handleToggle() {
        setIsOpen((open) => !open);
    }

    function handleClose(event: React.MouseEvent): void {
        event.stopPropagation();

        setIsOpen(false);
    }

    function handleClickOutside(event: MouseEvent): void {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }

        if (btnsRef.current && btnsRef.current.contains(event.target as Node)) {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className={isOpen ? styles.isOpen : ''}>
            <div className={styles.btns} ref={btnsRef}>
                <ToggleDarkMode onClick={toggleDarkMode} isDarkMode={isDarkMode} />

                <MenuBtn onClick={handleToggle} isOpen={isOpen} isDarkMode={isDarkMode} />
            </div>

            <ul className={isOpen ? styles.isOpen : ''} ref={navRef}>
                {navigation.map((nav) => (
                    <li key={nav.text}>
                        <NavLink to={nav.link} onClick={handleClose}>
                            <img src={nav.img} alt={nav.text} /> {nav.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default PageNav;
