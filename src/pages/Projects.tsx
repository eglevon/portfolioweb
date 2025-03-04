import Project from '../components/Project';
import styles from './Projects.module.css';

const projects = [
    { title: 'WorldWide', link: 'https://vercel.com', img: '/src/assets/worldwide.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id itaque ea hic eum obcaecati laboriosam eius accusamus dolorum culpa.', tech: ['React', 'HTML', 'CSS Modules', 'JavaScript', 'Vite'], repo: 'https://github.com/' },

    { title: 'React Quiz', link: 'https://vercel.com', img: '/src/assets/reactquiz.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id itaque ea hic eum obcaecati laboriosam eius accusamus dolorum culpa.', tech: ['React', 'HTML', 'CSS', 'TypeScript', 'Vite'], repo: 'https://github.com/' },

    { title: 'usePopcorns', link: 'https://vercel.com', img: '/src/assets/usepopcorns.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id itaque ea hic eum obcaecati laboriosam eius accusamus dolorum culpa.', tech: ['React', 'HTML', 'CSS Modules', 'TypeScript', 'Vite'], repo: 'https://github.com/' },
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
