import styles from './Headline.module.css';

const Headline = () => {
    return ( 
        <div className={styles.headline}>
          <h1>I am <span className={styles.gradient}>King</span><span className={styles.title}>Developer</span></h1>
        </div>
     );
}
 
export default Headline;