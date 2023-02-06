import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import styles from './ProjectCard.module.css';

const ProjectCard = ({ data }) => {

    return ( 
        <li className={styles.projectCard}>
            <div className={`${styles.projectDetails}`}>
                <p className={`${styles.projectTag} emphasis`}>Featured Project</p>
                <h3 className={styles.projectTitle}>{data.title}</h3>
                <div className={styles.description}>{data.description}</div>
                <ul className={`${styles.techStack} ${styles.flex}`}>
                    { data.techStack.map( (tech) => {
                        return <li>{tech}</li>
                        }                      
                    )}
                    
                </ul>
                <ul className={`${styles.projectLinks} ${styles.flex}`}>
                    <a href={data.ghUrl} rel='noopener noreferrer' aria-label='External Link' target='_blank' ><FaGithub size={25}/></a>
                    { data.demoUrl && <a href={data.demoUrl} rel='noopener noreferrer' aria-label='External Link' target='_blank'><FiExternalLink size={25}/></a>}
                </ul>
            </div>
            <div className={styles.projectImg}>
                <img src={data.imgUrl} alt={data.imgAltTxt}/>
            </div>
        </li>
     );
}
 
export default ProjectCard;