import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Work = () => {
    return ( 
        <ul className={styles.projectsContainer}>
            <h2>Notable Projects</h2>
            <ProjectCard />
        </ul>
     );
}
 
export default Work;