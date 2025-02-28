import Education from '../components/Education';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Work from '../components/Work';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <main className={styles.about}>
            <Intro />

            <Skills />

            <Education />

            <Work />
        </main>
    );
}

export default AboutMe;
