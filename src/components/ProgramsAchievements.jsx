import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';

const ProgramsAchievements = () => {
  const achievements = [
    { year: '2025', title: 'Grade 12 Board Exam', detail: 'School Subject Topper - Physics & Biology', type: 'gold' },
    { year: '2025', title: 'Grade 12 Board Exam', detail: '2nd School Topper', type: 'silver' },
    { year: '2024', title: 'Inter-School Debate', detail: 'NMS Reverberations 2024', type: 'bronze' },
    { year: '2024', title: 'Quiz Competition', detail: '5th Bharat Ko Janiye (Govt. of India)', type: 'silver' },
    { year: '2023', title: 'Grade 10 Board Exam', detail: 'School Subject Topper - Social Science', type: 'gold' },
    { year: '2023', title: 'Elocution', detail: 'Al Noor International School', type: 'silver' },
    { year: '2022', title: 'Reading for All', detail: 'Al Noor International School', type: 'gold' },
    { year: '2022', title: 'Film Making Competition', detail: 'SWIFF (Honorable Mention)', type: 'silver' },
    { year: '2021', title: 'Debate Competition', detail: 'LoopGood.org (Winner)', type: 'gold' },
    { year: '2021', title: 'Video Making Competition', detail: 'Technovation - VID-TECH', type: 'silver' },
  ];

  const getIconColor = (type) => {
    switch (type) {
      case 'gold': return 'text-yellow-400';
      case 'silver': return 'text-slate-300';
      case 'bronze': return 'text-amber-600';
      default: return 'text-purple-400';
    }
  };

  return (
    <section id="achievements" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Programs & Achievements</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <div key={index} className="glass-card p-6 flex flex-col h-full theme-card-hover" data-aos="zoom-in" data-aos-delay={(index % 3) * 100}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--card-bg)] flex items-center justify-center border border-[var(--card-border)]">
                <Trophy className={getIconColor(item.type)} size={24} />
              </div>
              <span className="text-sm font-bold theme-muted bg-[var(--card-bg)] px-3 py-1 rounded-full border border-[var(--card-border)]">
                {item.year}
              </span>
            </div>
            <h3 className="text-lg font-bold theme-text mb-2">{item.title}</h3>
            <p className="theme-muted text-sm mt-auto">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsAchievements;
