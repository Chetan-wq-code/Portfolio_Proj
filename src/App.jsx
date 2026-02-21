import React from 'react';
import Navbar from './components/Header/Navbar';
import Hero from './components/Header/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="bg-slate-900 scroll-smooth selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;