import useDarkMode from '../hooks/useDarkMode';
import styles from './Project.module.css';

type ProjectProps = {
    title: string;
    link: string;
    img: string;
    description: string;
    tech: string[];
    repo: string;
};

function Project({ title, link, img, description, tech, repo }: ProjectProps) {
    const { isDarkMode } = useDarkMode();

    return (
        <li className={styles.project}>
            <h3>{title}</h3>
            <a href={link} target='_blank'>
                <img src={img} alt={title} className={styles.image} />
            </a>
            <p>{description}</p>
            <ul className={styles.list}>
                {tech.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <a href={repo} target='_blank' className={styles.link}>
                GitHub repository
                <img src={isDarkMode ? '../src/assets/arrow-right-light.svg' : '../src/assets/arrow-right.svg'} />
            </a>
        </li>
    );
}

export default Project;
