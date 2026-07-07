import React from 'react';
import { BookOpen, GraduationCap, MapPin, Calendar } from 'lucide-react';

const AboutEducation = () => {
  return (
    <section id="about" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About & Education</h2>
        <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* About column */}
        <div data-aos="fade-up">
          <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-lg">
            <p>
              Throughout my day, I try to abide by principles of virtue—being humble, kind, disciplined, and supportive—whilst also being ready to face any burdens, taking them up as my responsibility with courage, calmness, and the right vision.
            </p>
            <p>
              I like to be a supporter, a guide, and a mentor to those students who find it difficult to make a name for themselves in an environment where they are expected to deliver. I really enjoy competing and taking part in any event.
            </p>
            <p>
              I prefer to be formal and like to speak with people of great stature—especially elders such as my seniors, teachers, or even students who have achieved great hallmarks. Such conversations enable me to learn about certain ideals and provide me with many examples of how traits such as hard work, humility, kindness, and courage can lead one to success.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="glass-card p-4 flex flex-col gap-2">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">DOB</span>
              <span className="text-white font-medium">20th January 2007</span>
            </div>
            <div className="glass-card p-4 flex flex-col gap-2">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Interests</span>
              <span className="text-white font-medium">Open-Source</span>
            </div>
          </div>
        </div>

        {/* Education column */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-card p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ABV-IIITM Gwalior</h3>
            <p className="text-purple-400 font-medium mb-4">B.Tech Computer Science and Engineering</p>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2"><Calendar size={16} /> <span>Present</span></div>
              <div className="flex items-center gap-2"><MapPin size={16} /> <span>Madhya Pradesh, India</span></div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-300"><span className="text-white font-semibold">1st Year CGPA : </span> 8.34</p>
              <p className="text-sm text-slate-300"><span className="text-white font-semibold">Overall CGPA  : </span>  8.34</p>
            </div>
          </div>

          <div className="glass-card p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Al Noor International School</h3>
            <p className="text-purple-400 font-medium mb-4">CBSE (Grades VII - Science Stream XII)</p>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2"><Calendar size={16} /> <span>2019 - 2025</span></div>
              <div className="flex items-center gap-2"><MapPin size={16} /> <span>Kingdom of Bahrain</span></div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-2">
              <p className="text-sm text-slate-300"><span className="text-white font-semibold">Subjects Taken (Grade XI & XII):</span> Physics, Chemistry, Mathematics, Biology, English Core</p>
              <p className="text-sm text-slate-300"><span className="text-white font-semibold">Grade (XII): </span>92.2%</p>
              <p className="text-sm text-slate-300"><span className="text-white font-semibold">Grade (X): </span>88.8%</p>
            </div>
          </div>

          <div className="glass-card p-6 relative overflow-hidden group opacity-80 hover:opacity-100">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">New Horizon School</h3>
            <p className="text-purple-400 font-medium mb-4">CBSE (Kindergarten - Grade VI)</p>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2"><Calendar size={16} /> <span>2010 - 2019</span></div>
              <div className="flex items-center gap-2"><MapPin size={16} /> <span>Kingdom of Bahrain</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
