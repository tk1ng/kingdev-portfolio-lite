import { HiHeart } from 'react-icons/hi'
import styles from './Footer.module.css';


const Footer = () => {
    return ( 
        <footer>
            <p><small> Made with <span className={styles.heartBeat}><HiHeart /></span> by Taryn King  &copy; 2023</small></p>
        </footer>
     );
}
 
export default Footer;