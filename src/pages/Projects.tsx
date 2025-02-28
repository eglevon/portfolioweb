import Project from '../components/Project';
import styles from './Projects.module.css';

const projects = [
    { title: 'WorldWide', link: 'https://vercel.com', img: '/src/assets/worldwide.png', description: 'WorldWide is an interactive and user-friendly application that helps travellers keep a log of places they have visited. It allows users to add new locations, view a list of all locations, and access details about each one.', tech: ['React', 'HTML', 'CSS Modules', 'JavaScript', 'Vite'], repo: 'https://github.com/' },

    { title: 'ReactQuiz', link: 'https://vercel.com', img: '/src/assets/reactquiz.png', description: 'A dynamic and interactive quiz application which allows users to test their knowledge with a series of questions while keeping track of their scores and high scores.', tech: ['React', 'HTML', 'CSS', 'TypeScript', 'Vite'], repo: 'https://github.com/' },

    { title: 'usePopcorns', link: 'https://vercel.com', img: '/src/assets/usepopcorns.png', description: 'usePopcorns is a web application for exploring movies, searching through an extensive database, and maintaining a personalized list of watched movies. The app includes features like rating movies, viewing detailed information, and dynamic search functionality.', tech: ['React', 'HTML', 'CSS Modules', 'TypeScript', 'Vite'], repo: 'https://github.com/' },
];

function Projects() {
    return (
        <main className={styles.projects}>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <Project key={project.title} title={project.title} link={project.link} img={project.img} description={project.description} tech={project.tech} repo={project.repo} />
                ))}
            </ul>
        </main>
    );
}

export default Projects;
