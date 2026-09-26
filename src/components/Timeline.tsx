import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/themeContext';

const experiences = [
  {
    year: 'PRESENT',
    role: 'Lead Broadcast Anchor & Host',
    institution: 'Prime Radio & Digital Media Platform',
    detail:
      'Executive presenter and anchor for flagship morning and prime-time broadcasts, driving regional listener discourse, culture, and exclusive VIP dialogues.',
  },
  {
    year: '2023 — 2025',
    role: 'Principal Master of Ceremonies',
    institution: 'National Corporate & Diplomatic Summits',
    detail:
      'Commanded live stages for pan-African conferences, multinational brand rollouts, high-profile galas, and presidential symposiums across Ghana.',
  },
  {
    year: '2020 — 2023',
    role: 'Broadcast Journalist & Event Moderator',
    institution: 'Contemporary Media House',
    detail:
      'Spearheaded audience-driven weekend talk segments, cultural panel moderations, and specialized corporate communication workshops.',
  },
];

export default function Timeline() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      className={`relative py-28 lg:py-36 border-t overflow-hidden transition-colors duration-500 ${
        isLight
          ? 'bg-[#F8F9FD] text-[#090D1E] border-slate-200'
          : 'bg-[#050711] text-white border-white/[0.06]'
      }`}
    >
      {/* Ambient background light */}
      <div
        className={`absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${
          isLight ? 'bg-purple-200/30' : 'bg-purple-900/10'
        }`}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-purple-500" />
          <span
            className={`font-display text-xs tracking-[0.3em] uppercase font-semibold ${
              isLight ? 'text-purple-600' : 'text-purple-400'
            }`}
          >
            Track Record
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <h2
            className={`font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.9] ${
              isLight ? 'text-[#090D1E]' : 'text-white'
            }`}
          >
            CAREER &
            <br />
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-[#090D1E]'
                  : 'bg-gradient-to-r from-purple-400 to-white'
              }`}
            >
              MILESTONES.
            </span>
          </h2>
        </div>

        {/* Minimalist Horizontal / Stacked Timeline */}
        <div
          className={`border-t divide-y transition-colors duration-500 ${
            isLight ? 'border-slate-200 divide-slate-200' : 'border-white/10 divide-white/10'
          }`}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`py-10 lg:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-baseline group px-4 rounded-xl transition-colors ${
                isLight ? 'hover:bg-slate-100/70' : 'hover:bg-white/[0.015]'
              }`}
            >
              <div className="md:col-span-3">
                <span
                  className={`font-display font-bold text-sm tracking-[0.25em] uppercase ${
                    isLight ? 'text-purple-600' : 'text-purple-400'
                  }`}
                >
                  {exp.year}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3
                  className={`font-display font-bold text-xl sm:text-2xl uppercase tracking-wide transition-colors ${
                    isLight
                      ? 'text-[#090D1E] group-hover:text-purple-600'
                      : 'text-white group-hover:text-purple-300'
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`text-xs font-display tracking-widest uppercase mt-1 ${
                    isLight ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  {exp.institution}
                </p>
              </div>

              <div className="md:col-span-5">
                <p
                  className={`text-sm font-light leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  {exp.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
