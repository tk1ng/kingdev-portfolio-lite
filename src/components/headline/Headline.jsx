import styles from './Headline.module.css';

const Headline = () => {
    return ( 
        <div className={styles.headline}>
          <h1>Taryn <span className={styles.gradient}>King</span><span className={styles.title}>Full-Stack Engineer</span></h1>
        </div>
     );
}
 
export default Headline;