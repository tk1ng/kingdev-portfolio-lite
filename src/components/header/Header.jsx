import { useEffect, useState } from 'react';
import NavBar from '../nav/NavBar';
import logo from '../../assets/CrownLogo--dkbg.svg';
import styles from './Header.module.css';

const Header = () => {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimension(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowDimension <= 640;

    return ( 
        <header className={styles.header}>
            <img className={styles.headerLogo}src={logo} alt='gradient crown logo' />
            <NavBar isMobile={isMobile}/>
        </header>
     );
}
 
export default Header;