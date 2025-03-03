import Contact from '../components/Contact';
import useDarkMode from '../hooks/useDarkMode';
import styles from './ContactPage.module.css';

const contact = [
    { link: 'mailto:ev@gmail.com', icon: '/src/assets/envelope-icon.svg', iconLight: '/src/assets/envelope-icon-light.svg', text: 'Email: ev@gmail.com' },

    { link: 'https://www.linkedin.com', icon: '/src/assets/linkedin.svg', iconLight: '/src/assets/linkedin-light.svg', text: 'LinkedIn' },

    { link: 'https://github.com', icon: '/src/assets/github.svg', iconLight: '/src/assets/github-light.svg', text: 'GitHub' },
];

function ContactPage() {
    const { isDarkMode } = useDarkMode();

    return (
        <main className={styles.contact}>
            <h2>Contact</h2>
            <ul>
                {contact.map((contact) => (
                    <Contact key={contact.text} link={contact.link} icon={contact.icon} iconLight={contact.iconLight} text={contact.text} />
                ))}

                <li className={styles.location}>
                    <img src={isDarkMode ? '/src/assets/location-light.svg' : '/src/assets/location.svg'} alt='Location' />
                    <span>Czech Republic</span>
                </li>
            </ul>
        </main>
    );
}

export default ContactPage;
