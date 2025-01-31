import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
const Work = () => {
// TODO MOVE PROJECT DATA TO DB
    const projects = [
        {
            projectId: "4", title: "B E L L Y APP", description: "Full stack health and wellness app that tracks meals and wellness scores to help understand the correlation between diet and health.", imgAltTxt: "", imgUrl: "https://github.com/TK1ng/kingdev-portfolio-lite/blob/main/src/assets/bellyapp@2x.png?raw=true", ghUrl: "https://github.com/TK1ng/be-well-app", demoUrl: "https://vimeo.com/804667902", isFeatured: true, techStack: ['ReactJS','NodeJS', 'ExpressJS',  'PostgreSQL'], date: "02-2023"
        },
        {
            projectId: "3", title: "Website Redesign: Soirée Coffee Bar", description: "Restaurant website redesign for a local Dallas coffee bar.", imgAltTxt: "Restaurant website landing page", imgUrl: "https://github.com/TK1ng/kingdev-portfolio-lite/blob/main/src/assets/soiree_footer.png?raw=true", ghUrl: "", demoUrl: "https://www.figma.com/file/bWdk97QHRIBTW7mHtK0nmE/Draft?node-id=1%3A3", isFeatured: true, techStack: ['Figma','JavaScript', 'Pure CSS'], date: "06-2021"
        },
        {
            projectId: "1", title: "Portfolio", description: "Dark themed portfolio site with a minimalist design. The purpose of this project is to provide a space where more can be learned about me and what I'm working on!", imgAltTxt: "Black landing page with 'I am King' title text in orange and purple gradient", imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80", ghUrl: "https://github.com/TK1ng/kingdev-portfolio-lite", demoUrl: "", isFeatured: true, techStack: ['ReactJs', 'ExpressJs', 'EmailJs', 'CSS Modules'], date: "02-2023"
        },
    ];

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