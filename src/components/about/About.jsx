import styles from './About.module.css';

const About = () => {
    return (
      <div id='about' className={styles.content}>
        <h1><span className={styles.intro}>Hi, my name is </span>Taryn King</h1>
        <p>I'm a fullstack software engineer based in Dallas, Texas. I enjoy <span className={styles.emphasis}>crafting eloquent code</span> for beautiful user experiences and providing effective solutions.</p><br></br>
        <p>My path to software and web development was not a beeline although my earliest memories of creating with computers dates back to highschool and early college when I took computer science and web building courses and volunteered as an instructors assistant helping to teach computer skills to a local community. I've ventured along many avenues, where diverse experiences have <span className={styles.emphasis}>colored</span> my canvas in a unique way. From studying cells and learning to extract DNA through pre-medical studies, acting out life on a stage,  adventuring through the jungles of Honduras and desserts of Egypt, to learning the language of a machine and engineering software with <span className={styles.emphasis}>Hackbright Academy</span>, and much of everything in between. My life has been enriched by a vast array of experiences. In the words of Walt Whitman, “I am large, I contain multitudes”.
        </p><br></br>
        <p>I've had the chance to work and gain an inside glimpse into many industries, such as telecommunications, finance, and insurance. I carry this unique experience and understanding into my work to help craft and enhance applications that are truly made for the enduser.</p><br></br>
        <p>When I am not crafting code, find me cooking, <span className={styles.emphasis}>playing guitar</span>, reading about quantum physics, or watching horror films.</p>
      </div>
    )
  }
  
  export default About