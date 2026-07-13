import React from 'react';
import { Mic2, Video } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const Activities = () => {

  const publicSpeakingImages = [

  ];

  const contentCreationImages = [

  ];

  return (
    <section id="activities" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Activities & Talents</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 group" data-aos="fade-up">
          <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Mic2 size={32} className="text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold theme-text mb-4">Public Speaking</h3>
          <p className="text-slate-300 leading-relaxed mb-6 theme-muted">
            I have a strong passion for public speaking and have actively participated in various school assemblies, delivering speeches on a wide range of topics. These experiences have sharpened my ability to engage diverse audiences and confidently present in front of large groups.
          </p>
          <ul className="space-y-2 theme-subtle">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Inter-school competitions</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Oratory & Presentation skills</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Leadership development</li>
          </ul>
        </div>

        <div className="glass-card p-8 group" data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaYoutube size={32} className="text-red-500" />
            </div>
            <a href="https://www.youtube.com/@gaisenntalks" target="_blank" rel="noreferrer" className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full hover:bg-red-500/20 transition-colors">
              GaisennTalks
            </a>
          </div>
          <h3 className="text-2xl font-bold theme-text mb-4">Content Creation</h3>
          <p className="text-slate-300 leading-relaxed mb-6 theme-muted">
            Passionate about content creation, having produced videos on YouTube and a few short documentaries. My work has been showcased in film festivals and competitions, gaining valuable experience in storytelling and editing.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--border-subtle)] flex items-center gap-4">
              <Video className="theme-muted" />
              <div>
                <h4 className="theme-text font-medium">Quiet Leadership</h4>
                <p className="text-sm theme-muted">Student World Impact Film Festival (Honorable Mention)</p>
              </div>
            </div>
            <div className="p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--border-subtle)] flex items-center gap-4">
              <Video className="theme-muted" />
              <div>
                <h4 className="theme-text font-medium">The Tale of a Leader</h4>
                <p className="text-sm theme-muted">1.6K+ Views Documentary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
