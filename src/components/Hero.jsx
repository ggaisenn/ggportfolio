import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [academicScore, setAcademicScore] = useState('');

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative pt-20 pb-24">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full container mx-auto px-6">
        
        {/* Left Column - Text */}
        <div className="w-full lg:w-[55%] xl:w-3/5" data-aos="fade-right">
          <h2 className="text-purple-400 font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
            Greetings, my name is
          </h2>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg whitespace-nowrap">
            Gaurav Gaisenn.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-6 leading-relaxed drop-shadow-md text-justify md:text-left">
            I am a B.Tech Computer Science and Engineering student at ABV-IIITM Gwalior. I have always been driven by a desire to learn and achieve meaningful goals in life. 
            <span className="block mt-4">
              My interest lies in Frontend Web Development and Low-level systems programming.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#projects" className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Check out my work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all">
              Get in touch
            </a>
          </div>

          <div className="max-w-2xl glass-card p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
            <p className="text-xl md:text-2xl font-light italic text-slate-300 leading-relaxed">
              "Live to learn, strive to achieve, and compete not to conquer others, but to conquer yourself."
            </p>
          </div>
        </div>

        {/* Right Column - Image Box */}
        <div className="flex-1 flex justify-center lg:justify-start w-full" data-aos="fade-left">
          <div className="relative w-full max-w-md xl:max-w-lg">
            {/* Glowing ambient shadow behind the image */}
            <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-3xl animate-pulse"></div>
            
            <img
              src="/profile.jpeg"
              alt="Gaurav Gaisenn"
              className="relative z-10 w-full aspect-[3/4] object-cover rounded-2xl border border-slate-700/50 shadow-2xl glass"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
