import Skill from './Skill';
import styles from './Skills.module.css';

const skills = [
    { name: 'HTML5', img: '../src/assets/html.svg', imgLight: '../src/assets/html-light.svg' },

    { name: 'CSS3', img: '../src/assets/css.svg', imgLight: '../src/assets/css-light.svg' },

    { name: 'JavaScript', img: '../src/assets/js.svg', imgLight: '../src/assets/js-light.svg' },

    { name: 'TypeScript', img: '../src/assets/ts.svg', imgLight: '../src/assets/ts-light.svg' },

    { name: 'React', img: '../src/assets/react.svg', imgLight: '../src/assets/react-light.svg' },

    { name: 'Git', img: '../src/assets/git.svg', imgLight: '../src/assets/git-light.svg' },
];

function Skills() {
    return (
        <div className={styles.skills}>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill) => (
                    <Skill key={skill.name} name={skill.name} img={skill.img} imgDark={skill.imgLight} />
                ))}
            </ul>
        </div>
    );
}

export default Skills;
