import styles from './Education.module.css';

function Education() {
    return (
        <div className={styles.education}>
            <h3>Education</h3>
            <ul>
                <li>
                    <p className={styles.title}>Self-Education in Web Development</p>
                    <p>9/2023 – Present</p>
                </li>
                <li>
                    <p className={styles.title}> Lorem, ipsum dolor.</p>
                    <p>9/2020 – 8/2023</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>
            </ul>
        </div>
    );
}

export default Education;
