import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';

const ProgramsAchievements = () => {
  const achievements = [
    { year: '2026', title: 'AI SYNERGY HACKATHON 2026', event: 'GWALIOR AI SUMMIT 2026', acheivement: 'WINNER', issuer:'ABV-IIITM GWALIOR', venue:'Gwalior, Madhya Pradesh, India', date:'April 2026', type: 'gold'},
    { year: '2025', title: 'Grade 12 Board Exam', event:'-', acheivement: 'School Subject Topper - Physics & Biology', issuer:'CBSE', venue:'-', date:'May 2025', type: 'gold' },
    { year: '2025', title: 'Grade 12 Board Exam', event:'-', acheivement: '2nd School Topper', issuer:'CBSE', venue:'-', date:'May 2025', type: 'silver' }, 
    { year: '2024', title: 'Declamation', event:'-', acheivement: '1st Place', issuer: 'AL NOOR INTERNATIONAL SCHOOL', venue:'Kingdom of Bahrain', date:'December 2024', type: 'gold' },
    { year: '2024', title: 'Inter-School Speech Competition', event: 'AMH MED-ATHLON 2024', acheivement: 'FINALIST', issuer: 'AMERICAN MISSION HOSPITAL', venue:'Kingdom of Bahrain', date:'November 2024', type: 'blue' },       
    { year: '2024', title: 'Inter-School Debate', event:"-", acheivement: '3rd Place', issuer:'NEW MILLENNIUM SCHOOL', venue:'Kingdom of Bahrain', date:'October 2024', type: 'bronze' },
    { year: '2024', title: 'Quiz Competition', event: '5th Bharat Ko Janiye (Govt. of India)', acheivement:'Certificate of Excellence', issuer:'Ministry of External Affairs, Government of India', venue:'-', date:'November, 2024', type: 'silver' },
    { year: '2023', title: 'Poem Recitation', event:'-', acheivement: '1st Place', issuer: 'AL NOOR INTERNATIONAL SCHOOL', venue:'Kingdom of Bahrain', date:'November 2023', type: 'gold' },
    { year: '2023', title: 'Elocution', event:'-', acheivement: '2nd Place', issuer: 'AL NOOR INTERNATIONAL SCHOOL', venue:'Kingdom of Bahrain', date:'October 2023', type: 'silver' },
    { year: '2023', title: 'Grade 10 Board Exam', event:'-', acheivement: ' School Subject Topper - Social Science', issuer: 'CBSE', venue:'-', date:'May, 2023', type: 'gold' },
  ];

  const getIconColor = (type) => {
    switch (type) {
      case 'gold': return 'text-yellow-400';
      case 'silver': return 'text-slate-300';
      case 'bronze': return 'text-amber-600';
      case 'blue': return 'text-blue-300';
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
            <h2 className="text-xl font-bold theme-text mb-2">{item.title}</h2>
            <h3 className="text-lg font-bold theme-text mb-2">{item.acheivement}</h3>
            <p className="theme-muted font-bold text-lg mt-auto">{item.event}</p>
            <p className="theme-muted font-bold text-sm mt-auto">{item.issuer}</p>
            <p className="theme-muted text-sm mt-auto">{item.venue}</p>
            <p className="theme-muted text-sm mt-auto">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsAchievements;
