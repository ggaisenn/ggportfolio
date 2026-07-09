import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Projects from './components/Projects';
import ProgramsAchievements from './components/ProgramsAchievements';
import Contact from './components/Contact';

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500/30" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-base)' }}>
      {/* Background ambient glowing spheres */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--ambient-1)' }}></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--ambient-2)' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--ambient-3)' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-32 pb-12">
          <Hero />
          
          <div className="container mx-auto px-6 flex flex-col gap-32">
            <AboutEducation />
            <Activities />
            <Projects />
            <ProgramsAchievements />
            <Experience />
            <Contact />
          </div>
        </main>
        
        <footer className="py-8 text-center text-sm mt-12" style={{ color: 'var(--text-subtle)', borderTop: '1px solid var(--footer-border)' }}>
          <p>© {new Date().getFullYear()} Gaurav Gaisenn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;