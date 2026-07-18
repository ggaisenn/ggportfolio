import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const certificationsData = [
  {
    id: 1,
    year: "2026",
    title: "AI SYNERGY HACKATHON 2026",
    organiser: "ABV-IIITM GWALIOR",
    image: "../../public/certifications/Gaurav_Gaisenn_AI_SYNERGY_HACKATHON_2026.jpg",
  },
  {
    id: 2,
    year: "2025-26",
    title: "Google Cloud Study Jams 2025",
    organiser: "Google Cloud",
    image: "../../public/certifications/Gaurav_Gaisenn_Google-Cloud-Study-Jams-2025.jpeg",
  },
  {
    id: 3,
    year: "2025",
    title: "Outskill Generative AI Mastermind",
    organiser: "Outskill",
    image: "../../public/certifications/Gaurav_Gaisenn_Outskill_Certificate.png",
  },{
    id: 4,
    year: "2024-25",
    title: "5th Bharat Ko Janiye Quiz",
    organiser: "Ministry of External Affairs, Government of India",
    image:"../../public/certifications/Gaurav_Gaisenn_Bharat_Ko_Janiye_Certificate.png",
  },{

    id: 5,
    year: "2022",
    title: "Student World Impact Film Festival",
    organiser: "SWIFF, Waldwick, New Jersey, USA",
    image:"../../public/certifications/Gaurav-Gaisenn-Student-World-Impact-Film-Festival-Honorable-Mention-The-Quiet-Leadership-of-Carlo-Ancelotti-2022.jpg",
  },{
    id: 6,
    year: "2021",
    title: "GCL New York AI+Healthcare Summit",
    organiser: "GCL, New York Chapter, USA",
    image:"../../public/certifications/Gaurav Gaisenn-GCL-NY-AI+Healthcare-Summit-2021.jpeg",
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="pt-20">
      {/* Title Header Matching Achievements Layout */}
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Certifications</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      {/* Grid wrapper matching the 3-column breakpoint distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((item, index) => (
          <div 
            key={index} 
            className="glass-card p-6 flex flex-col h-full theme-card-hover border border-[var(--border-subtle)] rounded-xl relative overflow-hidden group bg-[var(--card-bg)]"
            data-aos="zoom-in" 
            data-aos-delay={(index % 3) * 100}
          >
            {/* 1. Large Top Image Preview */}
            <div className="w-full overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-black/5 aspect-[16/12] mb-5 shrink-0">
              <img 
                src={item.image} 
                alt={`${item.title} preview`} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            
            {/* 2. Top Header Row inside the Content Area */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--card-bg)] flex items-center justify-center border border-[var(--card-border)]">
                <Award className="text-purple-400" size={24} />
              </div>
              <span className="text-sm font-bold theme-muted bg-[var(--card-bg)] px-3 py-1 rounded-full border border-[var(--card-border)]">
                {item.year}
              </span>
            </div>

            {/* Decorative background logo inside card spaces */}
            <div className="absolute right-2 bottom-2 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none">
              <Award size={100} />
            </div>

            {/* 3. Content Base Stacked Below */}
            <div className="flex flex-col flex-grow">
              {/* Title */}
              <h2 className="text-xl font-bold theme-text mb-2 leading-tight">
                {item.title}
              </h2>
              
              {/* Organiser */}
              <p className="text-purple-400 font-semibold text-sm mb-4">
                {item.organiser}
              </p>

              {/* 4. Credentials Link */}
              {item.link && item.link !== "#" && (
                <div className="mt-auto pt-2">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-medium theme-muted hover:theme-text transition-colors"
                  >
                    Verify Credential <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;