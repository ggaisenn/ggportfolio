import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ExternalLink, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const astralinxImages = [
    "/projects/1.avif",
    "/projects/2.avif",
    "/projects/3.avif",
    "/projects/4.avif",
  ];

  const [astralinxIdx, setAstralinxIdx] = useState({ current: 0, prev: null });
  const astralinxLenRef = useRef(astralinxImages.length);

  useEffect(() => {
    astralinxLenRef.current = astralinxImages.length;
  }, [astralinxImages.length]);

  useEffect(() => {
    if (astralinxLenRef.current <= 1) return;
    const timer = setInterval(() => {
      setAstralinxIdx((prev) => ({
        prev: prev.current,
        current: (prev.current + 1) % astralinxLenRef.current
      }));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAstralinxPrev = () => {
    setAstralinxIdx((prev) => ({
      prev: prev.current,
      current: prev.current === 0 ? astralinxImages.length - 1 : prev.current - 1
    }));
  };

  const handleAstralinxNext = () => {
    setAstralinxIdx((prev) => ({
      prev: prev.current,
      current: (prev.current + 1) % astralinxImages.length
    }));
  };

  const getSlideClass = (idx, current, prev) => {
    if (idx === current) return 'translate-x-0 opacity-100 z-10';
    if (idx === prev) return 'translate-x-full opacity-100 z-0';
    return '-translate-x-full opacity-0 z-0';
  };

  return (
    <section id="projects" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Projects</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      {/* ASTRALINX W.L.L. Website */}
      <div className="glass-card p-8 md:p-10 mb-12 relative overflow-hidden group grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up">
        <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
          <Terminal size={240} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-3xl font-bold theme-text">ASTRALINX W.L.L.</h3>
            <a href="https://astra-linx.com/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-colors shadow-sm border border-purple-500/20" title="Visit Website">
              <Globe size={24} />
            </a>
          </div>
          <p className="text-purple-400 font-medium mb-6 text-lg">Website</p>

          <p className="theme-muted leading-relaxed mb-8">
            Built a multi-page site presenting the range of solutions ASTRALINX provides across security, IT infrastructure, audio-visual, smart automation, events and marketing.
          </p>


          <div className="flex flex-wrap gap-2">
            {['HTML5', 'CSS3', 'JavaScript (ES6+)'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-[var(--card-bg)] theme-muted rounded-full text-sm font-medium border border-[var(--border-subtle)]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Astralinx Image Slider */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-inner bg-slate-900/40 group/slider">
          {/* Dummy image to force container to match exact aspect ratio */}
          <img src={astralinxImages[0]} alt="placeholder" className="w-full h-auto opacity-0 pointer-events-none select-none" />
          
          {astralinxImages.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`ASTRALINX W.L.L. ${idx}`}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${getSlideClass(idx, astralinxIdx.current, astralinxIdx.prev)}`}
            />
          ))}

          {astralinxImages.length > 1 && (
            <>
              <button
                onClick={handleAstralinxPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/70"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleAstralinxNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/70"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* ggcli Project */}
      <div className="glass-card p-8 md:p-10 mb-12 relative overflow-hidden group" data-aos="fade-up">
        <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Terminal size={240} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-3xl font-bold theme-text">ggcli</h3>
              <a href="https://github.com/ggaisenn/ggcli" target="_blank" rel="noreferrer" className="theme-muted hover:theme-text transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-purple-400 font-medium mb-6 text-lg">Command Line Interface Tool</p>

            <p className="theme-muted leading-relaxed mb-8">
              A Command Line Interface tool built using Node.js. It features dynamic configuration loading via `cosmiconfig`, robust configuration validation using `ajv` schemas, detailed validation error formatting with `better-ajv-errors`, and namespace-based console logging.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['JavaScript', 'Node.js', 'CLI'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[var(--card-bg)] theme-muted rounded-full text-sm font-medium border border-[var(--border-subtle)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border-subtle)] font-mono text-sm shadow-inner">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="theme-muted space-y-2">
              <p><span className="text-purple-600 dark:text-purple-400">Step 1:</span> Script binary entry (`bin/index.js`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 2:</span> Command-line arguments parsing (`arg`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 3:</span> Custom logging with color themes (`chalk`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 4:</span> Launcher command logic (`open`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 5:</span> Configuration file search (`cosmiconfig`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 6:</span> Global package execution links (`npm link`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 7:</span> Custom JSON Schema configuration rules  <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 8:</span> Schema-based verification (`ajv`)  <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 9:</span> Better validation logs (`better-ajv-errors`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 10:</span> Namespace debugging flag (`debug`) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 11:</span> Cross-platform URL format validation <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 12:</span> Host system local app check (command-exists) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 13:</span> (`www.`) protocol handling <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 14:</span> macOS App Launch (e.g., --open Slack)	 <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 15:</span> Cross-Platform App launcher <span className="text-green-600 dark:text-yellow-400">....</span></p>
            </div>
          </div>
        </div>
      </div>
      {/* ggalloc Project */}
      <div className="glass-card p-8 md:p-10 relative overflow-hidden group" data-aos="fade-up">
        <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Terminal size={240} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-3xl font-bold theme-text">ggalloc</h3>
              <a href="https://github.com/ggaisenn/ggalloc" target="_blank" rel="noreferrer" className="theme-muted hover:theme-text transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-purple-400 font-medium mb-6 text-lg">Custom Dynamic Memory Allocator</p>

            <p className="theme-muted leading-relaxed mb-8">
              A memory allocator built from scratch using raw POSIX system calls. Implements a custom heap manager with block splitting, memory coalescing, and free-list management. A deep-dive into how your OS actually hands memory to programs.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['C++', 'POSIX', 'Memory Management'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[var(--card-bg)] theme-muted rounded-full text-sm font-medium border border-[var(--border-subtle)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-[var(--card-bg)] rounded-xl p-6 border border-[var(--border-subtle)] font-mono text-sm shadow-inner">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="theme-muted space-y-2">
              <p><span className="text-purple-600 dark:text-purple-400">Step 1:</span> Block metadata struct <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 2:</span> Alignment Macros <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 3:</span> First-Fit search algorithm <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 4:</span> OS memory request (sbrk) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 5:</span> Block splitting <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 6:</span> Core allocator (ggalloc) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 7:</span> GC Mark Phase <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 8:</span> GC Sweep Phase <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 9:</span> Manual free (ggfree) <span className="text-green-600 dark:text-green-400">✔</span></p>
              <p><span className="text-purple-600 dark:text-purple-400">Step 10:</span> Coalescing (defrag) <span className="text-green-600 dark:text-green-400">✔</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
