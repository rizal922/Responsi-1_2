import React from 'react';
import ProfilePhoto from '../components/ProfilePhoto';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-12">
        <ProfilePhoto />
        <h1 className="text-4xl font-bold mt-6">John Doe</h1>
        <p className="text-xl text-gray-600 mt-2">Full Stack Developer</p>
      </header>

      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;