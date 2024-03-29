import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import styles from './NavBar.module.css';
import resume from '../../assets/TarynKingResume.pdf';

const NavBar = ({ isMobile }) => {
     const [menuOpen, setMenuOpen] = useState(false);

     const menuClick = () => {
          setMenuOpen(!menuOpen);
     }

    return ( 
     <>
          {isMobile ? (
               <div>
                    {!menuOpen && <button className={styles.mobileMenuBtn} onClick={menuClick}><HiOutlineMenuAlt3 size={42}/></button> }
                    { menuOpen && <aside tabindex='1' className={styles.mobileNavContainer}>
                         <button className={styles.closeBtn} onClick={menuClick}><MdClose size={42}/></button>
                         <nav className={styles.mobileNav}>
                              <li><a href='/#about' className={styles.navLinks} onClick={menuClick}>About</a></li>
                              <li><a onClick={menuClick}href='#projects' className={styles.navLinks}>Work</a></li>
                              <li><a onClick={menuClick} href='#contact' className={styles.navLinks}>Contact</a></li>
                              <li><a href={resume} target='_blank' rel="noreferrer" className={styles.navlinks}>View Résumé</a></li>
                         </nav>
                    </aside> }
               </div>
          ) : (
               <nav className={styles.navContainer}>
                    <li><a href='#about' className={styles.navLinks}>About</a></li>
                    <li><a href='#projects' className={styles.navLinks}>Work</a></li>
                    <li><a href='#contact' className={styles.navLinks}>Contact</a></li>
                    <li><a href={resume} target='_blank' rel="noreferrer" className={styles.navLinks}>View Résumé</a></li>
               </nav>
          )}
          </>
     );
}
 
export default NavBar;