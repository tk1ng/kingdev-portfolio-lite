import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavBar.module.css';
import resume from '../../assets/Taryn-King_Resume.pdf';

const NavBar = () => {
    return ( 
        <nav className={styles.navContainer}>
             <li><a href='#about' className={styles.navLinks}>About</a></li>
             <li><a href='#projects' className={styles.navLinks}>Work</a></li>
             <li><a href='#contact' className={styles.navLinks}>Contact</a></li>
             <li><a href={resume} target='_blank' rel="noreferrer" className={styles.resumeLink}>View Résumé</a></li>
        </nav>
     );
}
 
export default NavBar;