import About from './components/about/About';
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
      <section className={styles.section}>
        <Header />
        <HeadLine />
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
