import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main id="cv-content">
          <Hero />
          <AboutMe />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
