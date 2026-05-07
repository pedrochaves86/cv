import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
