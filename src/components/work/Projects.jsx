import { useEffect, useState } from 'react';
import { dbClient } from '../../dbClient';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [isError, setIsError] = useState(false);

    const getProjects = async () => {
        const { data, error } = await dbClient.from('projects').select('projectId:id,title,description,ghUrl:github_url,demoUrl:demo_url,imgAltTxt:img_alt_text,imgUrl:image,techStack:tech_stack');

        if (error) {
            setIsError(true);
        };

        setProjects(data);
    };

    useEffect(() => {
        getProjects();
    }, []);

    if (isError) {
        return (
            <div>
                Oops! Project files are currently playing hide and seek. Check back later to find them!
            </div>
        )
    }
    const displayProjectCards = projects.map(project => {
        return <ProjectCard data={project} key={project.projectId}/>
    });

    return ( 
        <ul id='projects' className={styles.projectsContainer}>
            <h2>Notable Projects</h2>
            {displayProjectCards}
        </ul>
     );
}
 
export default Work;