import React from 'react';
import { Mail, Phone, Code2 } from 'lucide-react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-10">
      <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden" data-aos="fade-up">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Currently open to new opportunities, open-source contributions, and PRs.
          Let's forge greatness together..
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a href="mailto:gauravgaisenn@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-white">
            <Mail size={20} className="text-purple-400" />
            gauravgaisenn@gmail.com
          </a>
          <a href="tel:+97339006732" className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-white">
            <Phone size={20} className="text-purple-400" />
            +91 91085 56629
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/ggaisenn" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-500 hover:bg-slate-700 transition-all hover:-translate-y-1">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/gaisenn_talks/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-slate-700 transition-all hover:-translate-y-1">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/@gaisenntalks" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-slate-700 transition-all hover:-translate-y-1">
            <FaYoutube size={24} />
          </a>
          <a href="https://codeforces.com/profile/gaurav_gaisenn" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-500 hover:bg-slate-700 transition-all hover:-translate-y-1">
            <Code2 size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
