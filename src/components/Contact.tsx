import useDarkMode from '../hooks/useDarkMode';

type ContactProps = {
    link: string;
    icon: string;
    iconLight: string;
    text: string;
};

function Contact({ link, icon, iconLight, text }: ContactProps) {
    const { isDarkMode } = useDarkMode();

    return (
        <li>
            <a href={link} target='_blank'>
                <img src={isDarkMode ? iconLight : icon} alt={text} />
                <span>{text}</span>
            </a>
        </li>
    );
}

export default Contact;
