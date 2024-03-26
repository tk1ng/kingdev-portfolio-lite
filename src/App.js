import About from './components/about/About';
import { Button } from './components/ui/Button/Button';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadLine from './components/headline/Headline';
import Projects from './components/work/Projects';
import SocialLinks from './components/socialLinks/SocialLinks';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <section className={styles.landing}>
        <Header />
        <HeadLine />
        <Button cta="Projects" primary onClickAction={() => window.location.href = '#projects'} />
        <Button cta="Contact Me" onClickAction={() => window.location.href = '#contact'} />
      </section>
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
