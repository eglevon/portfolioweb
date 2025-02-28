import styles from './Footer.module.css';
import Socials from './Socials';

const socials = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com', img: '../src/assets/linkedin.svg' },

    { name: 'GitHub', link: 'https://github.com', img: '../src/assets/github.svg' },
];

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socials}>
                {socials.map((social) => (
                    <Socials key={social.name} name={social.name} link={social.link} img={social.img} />
                ))}
            </ul>
            <p className={styles.date}>&copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
