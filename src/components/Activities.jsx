import React, {useEffect, useState} from 'react';
import { Mic2, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const Activities = () => {

  const publicSpeakingImages = [

  ];

  const contentCreationImages = [

  ];
  
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [speakingDir, setSpeakingDir] = useState('next');

  const [contentIndex, setContentIndex] = useState(0);
  const [contentDir, setContentDir] = useState('next');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeakingDir('next');
      setContentDir('next');
      setSpeakingIndex((prev) => (prev + 1) % publicSpeakingImages.length);
      setContentIndex((prev) => (prev + 1) % contentCreationImages.length);
    }, 5000); 

    return () => clearInterval(timer); 
  }, [publicSpeakingImages.length, contentCreationImages.length]);

  const handleSpeakingPrev = () => {
    setSpeakingDir('prev');
    setSpeakingIndex((prev) => (prev === 0 ? publicSpeakingImages.length - 1 : prev - 1));
  };

  const handleSpeakingNext = () => {
    setSpeakingDir('next');
    setSpeakingIndex((prev) => (prev + 1) % publicSpeakingImages.length);
  };

  const handleContentPrev = () => {
    setContentDir('prev');
    setContentIndex((prev) => (prev === 0 ? contentCreationImages.length - 1 : prev - 1));
  };

  const handleContentNext = () => {
    setContentDir('next');
    setContentIndex((prev) => (prev + 1) % contentCreationImages.length);
  };

  // Helper function to return correct slide classes based on current index and intent direction
  const getSlideClass = (idx, activeIndex, direction) => {
    if (idx === activeIndex) return 'translate-x-0 opacity-100 z-10';
    
    // Position non-active images outside viewport container
    if (direction === 'next') {
      return idx > activeIndex ? 'translate-x-full opacity-0 z-0' : '-translate-x-full opacity-0 z-0';
    } else {
      return idx < activeIndex ? '-translate-x-full opacity-0 z-0' : 'translate-x-full opacity-0 z-0';
    }
  };

  return (
    <section id="activities" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Activities & Talents</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      <div className="flex flex-col gap-8">
        

        <div className="glass-card p-8 group grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up">

          <div>
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


          <div className="relative h-64 md:h-full min-h-[480px] rounded-xl overflow-hidden shadow-inner bg-slate-900/40">
            {publicSpeakingImages.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Public Speaking ${idx}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === speakingIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>
        </div>

   
        <div className="glass-card p-8 group grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">

          <div>
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

  
          <div className="relative h-64 md:h-full min-h-[240px] rounded-xl overflow-hidden shadow-inner bg-slate-900/40">
            {contentCreationImages.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Content Creation ${idx}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === contentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Activities;
