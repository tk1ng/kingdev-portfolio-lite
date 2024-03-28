import About from './components/about/About';
import { Button } from './components/ui/Button/Button';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadLine from './components/headline/Headline';
import HeroWrapper from './components/ui/Hero/HeroWrapper';
import Projects from './components/work/Projects';
import SocialLinks from './components/socialLinks/SocialLinks';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HeroWrapper>
        <HeadLine />
        <div className={styles.btnContainer}>
          <Button cta="Projects" primary onClickAction={() => window.location.href = '#projects'} />
          <Button cta="Contact" onClickAction={() => window.location.href = '#contact'} />
        </div>
      </HeroWrapper>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactForm />
      </section>
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
