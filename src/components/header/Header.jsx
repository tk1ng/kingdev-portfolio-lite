import NavBar from '../nav/NavBar';
import logo from '../../assets/CrownLogo--dkbg.svg';
import styles from './Header.module.css';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <img className={styles.headerLogo}src={logo} alt='gradient crown logo' />
            <NavBar />
        </header>
     );
}
 
export default Header;