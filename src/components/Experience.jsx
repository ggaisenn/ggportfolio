import React from 'react';
import { Award } from 'lucide-react';

const Experience = () => {
  const roles = [
    {
      title: 'ASTRALINX W.L.L.',
      subtitle: 'Web Development Intern',
      school: '',
      description: 'Design and Development of the ASTRALINX W.L.L. corporate website.',
      active: true,
      image: '/experiences/ASTX-INT-2026-001.avif',
      isLarge: true
    },
    {
      title: 'Infotsav 25 - Volunteer',
      period: '2025',
      school: 'Infotsav — Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior',
      description: 'Anchor for the Inaugural Ceremony, Anchor for the PINNACLE Competition, and a Volunteer for the Managerial Division.',
      active: false
    },
    {
      title: 'CBSE Head Boy Senior',
      period: '2024-25',
      school: 'Al Noor International School',
      description: 'Led the student body, organized major school events, and acted as a liaison between students and school administration.',
      active: false
    },
    {
      title: 'CBSE Grade 11 Prefect',
      period: '2023-24',
      school: 'Al Noor International School',
      description: 'Maintained discipline, assisted in event management, and mentored junior students.',
      active: false
    },
    {
      title: 'CBSE Grade 10 Prefect',
      period: '2022-23',
      school: 'Al Noor International School',
      description: 'First major leadership role. Responsible for grade representation and assisting teachers.',
      active: false
    }
  ];

  return (
    <section id="experience" className="pt-20">
      <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold theme-text">Experiences</h2>
        <div className="h-px bg-[var(--border-subtle)] flex-grow max-w-xs"></div>
      </div>

      <div className="relative border-l border-[var(--border-subtle)] ml-4 md:ml-6 space-y-12">
        {roles.map((role, index) => (
          <div key={index} className="relative pl-8 md:pl-12" data-aos="fade-up" data-aos-delay={index * 100}>
            {/* Timeline dot */}
            <div className={`absolute -left-3 top-1 w-6 h-6 rounded-full border-4 border-[var(--bg-base)] flex items-center justify-center ${role.active ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]' : 'bg-[var(--text-subtle)]'}`}>
            </div>

            <div className={`glass-card p-6 ${role.active ? 'border-purple-500/30' : ''} w-full`}>
              <div className={`flex flex-col md:flex-row justify-between gap-6 ${role.isLarge ? 'md:items-center' : ''}`}>
                <div className="flex-1">
                  <div className={`flex flex-col md:flex-row justify-between mb-4 gap-2 ${!role.isLarge ? 'md:items-center' : ''}`}>
                    <div className="flex flex-col justify-center">
                      <h3 className={`font-bold theme-text flex items-center gap-2 ${role.isLarge ? 'text-3xl md:text-4xl mb-2' : 'text-xl'}`}>
                        {role.title}
                        {role.active && <Award size={18} className="text-purple-400" />}
                      </h3>
                      {role.subtitle && (
                        <h4 className={`font-bold theme-text ${role.isLarge ? 'text-xl md:text-2xl mb-4 text-purple-400/90' : 'text-lg'}`}>
                          {role.subtitle}
                        </h4>
                      )}
                      {role.school && <p className="theme-muted">{role.school}</p>}
                    </div>
                    {!role.image && (
                      <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium w-fit shrink-0 mt-2 md:mt-0">
                        {role.period}
                      </span>
                    )}
                  </div>
                  <p className={`theme-muted ${role.isLarge ? 'text-lg md:text-xl font-medium' : ''}`}>
                    {role.description}
                  </p>
                </div>

                {role.image && (
                  <div className="flex flex-col items-start md:items-end gap-4 shrink-0 md:w-2/5 lg:w-[45%] pt-4 md:pt-0">
                    <img src={role.image} alt={role.title} className="w-full rounded-lg border border-[var(--border-subtle)] object-contain shadow-lg" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
