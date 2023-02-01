import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    return ( 
        <li className={styles.projectCard}>
            <div className={styles.projectDetails}>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>Project Title</h3>
                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                <ul className={styles.projectTechstack}>
                    <li>React</li>
                    <li>Express</li>
                    <li>SQL</li>
                </ul>
                <ul className={styles.projectLinks}>
                    <a href='/' rel='noopener noreferrer' aria-label='External Link' target='_blank' ><FaGithub/></a>
                    <a href='/' rel='noopener noreferrer' aria-label='External Link' target='_blank'><FiExternalLink/></a>
                </ul>
            </div>
            <div className={styles.projectImg}><img src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' alt='screenshot'/></div>
        </li>
     );
}
 
export default ProjectCard;