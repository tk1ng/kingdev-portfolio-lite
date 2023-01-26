import Header from './components/header/Header';
import HeadLine from './components/headline/Headline';
import SocialLinks from './components/socialLinks/SocialLinks';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HeadLine />
      <SocialLinks />
    </div>
  );
}

export default App;
