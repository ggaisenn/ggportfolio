import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Projects from './components/Projects';
import ProgramsAchievements from './components/ProgramsAchievements';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30">
      {/* Background ambient glowing spheres */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-fuchsia-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-900/10 blur-[120px]"></div>
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
        
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 mt-12">
          <p>© {new Date().getFullYear()} Gaurav Gaisenn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;