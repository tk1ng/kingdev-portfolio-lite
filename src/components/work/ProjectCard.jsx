import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import styles from './ProjectCard.module.css';

const ProjectCard = () => {
    return ( 
        <li className={styles.projectCard}>
            <div className={`${styles.projectDetails}`}>
                <p className={`${styles.projectTag} emphasis`}>Featured Project</p>
                <h3 className={styles.projectTitle}>Portfolio Site</h3>
                <div className={styles.description}>Dark themed portfolio site with a minimalist design. The purpose of this project is to provide a space where more can be learned about me and what I'm working on!</div>
                <ul className={`${styles.techStack} ${styles.flex}`}>
                    <li>React</li>
                    <li>Express</li>
                    <li>EmailJS</li>
                    <li>CSS Modules</li>
                </ul>
                <ul className={`${styles.projectLinks} ${styles.flex}`}>
                    <a href='https://github.com/TK1ng/kingdev-portfolio-lite' rel='noopener noreferrer' aria-label='External Link' target='_blank' ><FaGithub size={25}/></a>
                    <a href='/' rel='noopener noreferrer' aria-label='External Link' target='_blank'><FiExternalLink size={25}/></a>
                </ul>
            </div>
            <div className={styles.projectImg}><img src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' alt='screenshot'/></div>
        </li>
     );
}
 
export default ProjectCard;