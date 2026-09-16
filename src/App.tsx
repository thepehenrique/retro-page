import './App.css';

import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import BackToTop from './components/Header/BackToTop/BackToTop';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <BackToTop />
    </div>
  );
}

export default App;