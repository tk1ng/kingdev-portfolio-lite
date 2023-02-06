import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
const Work = () => {

    const projects = [
        {
            projectId: "1", title: "Portfolio", description: "Dark themed portfolio site with a minimalist design. The purpose of this project is to provide a space where more can be learned about me and what I'm working on!", imgAltTxt: "Black landing page with 'I am King' title text in orange and purple gradient", imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80", ghUrl: "https://github.com/TK1ng/kingdev-portfolio-lite", demoUrl: "", isFeatured: true, techStack: ['ReactJs', 'ExpressJs', 'EmailJs', 'CSS Modules'], date: "02-23"
        },
        {
            projectId: "2", title: "Movie Watchlist App", description: `An application that consumes <a href='https://www.themoviedb.org/' rel='noopener noreferrer'>The Movie Database API</a> to present popular movie titles that can be added to a watch list.`, imgAltTxt: "Screenshot of movie app displaying latest movie posters", imgUrl: "https://github.com/TK1ng/movie-watchlist/blob/main/public/movie-watchlist.png?raw=true", ghUrl: "https://github.com/TK1ng/movie-watchlist", demoUrl: "https://king-movie-watchlist.netlify.app", isFeatured: true, techStack: ['ReactJs', 'Axios', 'CSS Modules'], date: "01-23"
        },
        // {
        //     projectId: "3", title: "Website Redesign: Soirée Coffee Bar", description: "Restaurant website redesign for a local Dallas coffee bar.", imgAltTxt: "", imgUrl: "", ghUrl: "", demoUrl: "", isFeatured: true, techStack: ['Figma','JavaScript', 'Pure CSS'], date: "06-21"
        // },
        // {
        //     projectId: "4", title: "", description: "", imgAltTxt: "", imgUrl: "", ghUrl: "", demoUrl: "", isFeatured: true
        // }
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