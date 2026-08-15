import React, { useEffect, useState, useRef } from 'react';
import { Mic2, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const Activities = () => {
  const publicSpeakingImages = [
    "/talents/ps/1.avif",
    "/talents/ps/2.avif",
    "/talents/ps/3.avif",
    "/talents/ps/4.avif",
    "/talents/ps/5.avif",
    "/talents/ps/6.avif",
  ];

  const contentCreationImages = [
    "/talents/gt/1.avif",
    "/talents/gt/2.avif",    
  ];
  
  // Track current index and previous index to isolate the transition states
  const [speaking, setSpeaking] = useState({ current: 0, prev: null });
  const [content, setContent] = useState({ current: 0, prev: null });

  // Use refs to always have the latest array lengths in the intervals
  const speakingLenRef = useRef(publicSpeakingImages.length);
  const contentLenRef = useRef(contentCreationImages.length);

  useEffect(() => {
    speakingLenRef.current = publicSpeakingImages.length;
    contentLenRef.current = contentCreationImages.length;
  }, [publicSpeakingImages.length, contentCreationImages.length]);
  
  // Public Speaking Slider Timer
  useEffect(() => {
    if (speakingLenRef.current <= 1) return;
    const timer = setInterval(() => {
      setSpeaking((prev) => ({
        prev: prev.current,
        current: (prev.current + 1) % speakingLenRef.current
      }));
    }, 5000); 

    return () => clearInterval(timer); 
  }, []);

  // Content Creation Slider Timer
  useEffect(() => {
    if (contentLenRef.current <= 1) return;
    const timer = setInterval(() => {
      setContent((prev) => ({
        prev: prev.current,
        current: (prev.current + 1) % contentLenRef.current
      }));
    }, 5000); 

    return () => clearInterval(timer); 
  }, []);

  // Public Speaking Navigation
  const handleSpeakingPrev = () => {
    setSpeaking((prev) => ({
      prev: prev.current,
      current: prev.current === 0 ? publicSpeakingImages.length - 1 : prev.current - 1
    }));
  };

  const handleSpeakingNext = () => {
    setSpeaking((prev) => ({
      prev: prev.current,
      current: (prev.current + 1) % publicSpeakingImages.length
    }));
  };

  // Content Creation Navigation
  const handleContentPrev = () => {
    setContent((prev) => ({
      prev: prev.current,
      current: prev.current === 0 ? contentCreationImages.length - 1 : prev.current - 1
    }));
  };

  const handleContentNext = () => {
    setContent((prev) => ({
      prev: prev.current,
      current: (prev.current + 1) % contentCreationImages.length
    }));
  };

  // Helper function to explicitly define positions for standard rightward push transitions
  const getSlideClass = (idx, current, prev) => {
    if (idx === current) {
      return 'translate-x-0 opacity-100 z-10';
    }
    if (idx === prev) {
      return 'translate-x-full opacity-100 z-0';
    }
    return '-translate-x-full opacity-0 z-0';
  };

  const doubleContent = [...contentCreationImages, ...contentCreationImages];

  return (
    <section id="activities" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Activities & Talents</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Public Speaking Block */}
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

          {/* Public Speaking Slider Frame Container */}
          <div className="relative h-64 md:h-full min-h-[480px] rounded-xl overflow-hidden shadow-inner bg-slate-900/40 group/slider">
            {publicSpeakingImages.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Public Speaking ${idx}`}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${getSlideClass(idx, speaking.current, speaking.prev)}`}
              />
            ))}

            {publicSpeakingImages.length > 1 && (
              <>
                <button 
                  onClick={handleSpeakingPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleSpeakingNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content Creation Block */}
        <div className="glass-card-content p-8 group grid md:grid-cols-2 gap-8 items-center bg-green-600 text-orange-500" data-aos="fade-up" data-aos-delay="100">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaYoutube size={32} className="text-red-500" />
              </div>
              <a href="https://www.youtube.com/@gaisenntalks" target="_blank" rel="noreferrer" className="text-sm font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full hover:bg-red-500/20 transition-colors">
                GaisennTalks
              </a>
            </div>

            <h3 className="text-2xl font-bold text-orange-400 mb-4">Content Creation</h3>     
            <p className="text-orange-200/90 leading-relaxed mb-6">
              Passionate about content creation, having produced videos on YouTube and a few short documentaries. My work has been showcased in film festivals and competitions, gaining valuable experience in storytelling and editing.
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-[var(--card-bg-content))] rounded-lg border border-[var(--card-border-content)] flex items-center gap-4">
                <Video className="text-orange-400" />
                <div>
                  <h4 className="text-orange-300 font-medium">Quiet Leadership</h4>
                  <p className="text-sm text-orange-200/70">Student World Impact Film Festival (Honorable Mention)</p>
                </div>
              </div>
              <div className="p-4 bg-[var(--card-bg-content)] rounded-lg border border-[var(--card-border-content)] flex items-center gap-4">
                <Video className="text-orange-400" />
                <div>
                  <h4 className="text-orange-300 font-medium">The Tale of a Leader</h4>
                  <p className="text-sm text-orange-200/70">1.6K+ Views Documentary</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Outer Box */}
          <div className="relative w-full h-64 md:h-full min-h-[480px] rounded-xl overflow-hidden shadow-inner bg-slate-900/40 flex-none">
            <div 
              className="animate-queue-flow h-full flex"
              style={{ 
                '--item-count': contentCreationImages.length,
                '--speed': '20s'
              }}
            >
              {doubleContent.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  className="h-full flex-shrink-0"
                  style={{ width: `calc(100% / (${contentCreationImages.length} * 1.5))` }}
                >
                  <img
                    src={imgUrl}
                    alt={`Content Creation ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
