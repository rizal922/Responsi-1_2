import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfilePhoto from './components/ProfilePhoto';
import CVUpload from './components/CVUpload';
import CVDownload from './components/CVDownload';
import Login from './components/Login';

function App() {
  const [userData, setUserData] = useState({
    name: 'Rizal',
    title: 'Full Stack Developer',
    email: 'email@example.com',
    phone: '+62 xxx-xxxx-xxxx',
    location: 'Indonesia',
    summary: 'Full Stack Developer dengan pengalaman dalam pengembangan aplikasi web menggunakan React dan Node.js.',
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'Tech Company',
        startDate: '2022',
        endDate: 'Sekarang',
        description: 'Mengembangkan dan memelihara aplikasi web menggunakan React dan Node.js'
      }
    ],
    education: [
      {
        degree: 'S1 Teknik Informatika',
        school: 'Universitas Contoh',
        graduationYear: '2022',
        description: 'IPK: 3.8'
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' }
    ],
    projects: [
      {
        name: 'Portfolio Website',
        description: 'Website portfolio personal dengan fitur admin',
        technologies: 'React, Node.js, TailwindCSS'
      }
    ]
  });

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="text-center mb-12">
              <ProfilePhoto />
              <h1 className="text-4xl font-bold mt-6">{userData.name}</h1>
              <p className="text-xl text-gray-600 mt-2">{userData.title}</p>
            </header>
            
            <section id="cv" className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CVUpload />
                <CVDownload userData={userData} />
              </div>
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
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;