import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Projects</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

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
              <p><span className="text-purple-600 dark:text-purple-400">Step 13:</span> Cross-Platform App launcher <span className="text-green-600 dark:text-yellow-400">....</span></p>            
            </div>
          </div>
        </div>
      </div>

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
