import styles from './NavBar.module.css';

const NavBar = () => {
    return ( 
        <nav className={styles.navContainer}>
             <li><a href='#about' className={styles.navLinks}>About</a></li>
             <li><a href='#work' className={styles.navLinks}>Work</a></li>
             <li><a href='#contact' className={styles.navLinks}>Contact</a></li>
             <li><button className='btn'>Resume</button></li>
        </nav>
     );
}
 
export default NavBar;