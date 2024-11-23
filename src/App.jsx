import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfilePhoto from './components/ProfilePhoto';
import CVUpload from './components/CVUpload';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <header className="text-center mb-12">
            <ProfilePhoto />
            <h1 className="text-4xl font-bold mt-6">Rizal</h1>
            <p className="text-xl text-gray-600 mt-2">Full Stack Developer</p>
          </header>
          
          <section id="cv-upload" className="mb-12">
            <CVUpload />
          </section>

          <section id="education" className="mb-12">
            <Education />
          </section>
          
          <section id="skills" className="mb-12">
            <Skills />
          </section>
          
          <section id="projects" className="mb-12">
            <Projects />
          </section>
          
          <section id="contact" className="mb-12">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;