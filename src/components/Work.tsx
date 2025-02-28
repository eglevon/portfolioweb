import styles from './Work.module.css';

function Work() {
    return (
        <div className={styles.work}>
            <h3>Work experience</h3>
            <div>
                <p className={styles.title}>Junior Front-End Developer</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>1/2024 – 6/2024</p>
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, error.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit at dignissimos ipsa quo cumque?</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
            </div>
        </div>
    );
}

export default Work;
