import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Work = () => {
    return ( 
        <ul className={styles.projectsContainer}>
            <ProjectCard />
        </ul>
     );
}
 
export default Work;