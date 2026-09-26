import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface AboutProps {
  portraitSrc: string;
}

const disciplines = [
  {
    num: '01',
    title: 'MC & Event Hosting',
    desc: 'Hosting corporate gatherings, awards, celebrations and live events.',
  },
  {
    num: '02',
    title: 'Radio & Broadcasting',
    desc: 'Anchoring compelling conversations, morning drive programs, and cultural dialogues that shape the contemporary Ghanaian media landscape.',
  },
  {
    num: '03',
    title: 'Public Speaking & Moderation',
    desc: 'Moderating panels and public conversations with clarity and energy.',
  },
  {
    num: '04',
    title: 'Media & Communications',
    desc: 'Collaborating with premier brands and institutions to craft resonant narratives, brand activations, and strategic public presence.',
  },
];

export default function About({ portraitSrc }: AboutProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="about"
      className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-500 ${
        isLight ? 'bg-white text-[#090D1E]' : 'bg-[#050711] text-white'
      }`}
    >
      {/* Ambient background glow */}
      <div
        className={`absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none ${
          isLight ? 'bg-purple-200/30' : 'bg-purple-950/20'
        }`}
      />
      <div
        className={`absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
          isLight ? 'bg-indigo-100/40' : 'bg-indigo-950/20'
        }`}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-purple-500" />
          <span
            className={`font-display text-xs tracking-[0.3em] uppercase font-semibold ${
              isLight ? 'text-purple-600' : 'text-purple-400'
            }`}
          >
            About Macall Mensah
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 lg:mb-14"
        >
          <h2
            className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.92] ${
              isLight ? 'text-[#090D1E]' : 'text-white'
            }`}
          >
            MORE THAN
            <br />
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-[#090D1E]'
                  : 'bg-gradient-to-r from-purple-400 via-purple-300 to-white'
              }`}
            >
              A VOICE.
            </span>
          </h2>
        </motion.div>

        {/* Editorial Layout: Portrait + Prose & Disciplines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div
              className={`relative aspect-[3/4] w-full rounded-2xl overflow-hidden border shadow-2xl group transition-colors duration-500 ${
                isLight
                  ? 'border-slate-200 bg-slate-50 shadow-slate-200/60'
                  : 'border-white/10 bg-[#080B1C] shadow-black/80'
              }`}
            >
              {/* Subtle gradient overlay */}
              <div
                className={`absolute inset-0 opacity-60 z-10 pointer-events-none ${
                  isLight
                    ? 'bg-gradient-to-t from-white/90 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-[#050711] via-transparent to-transparent'
                }`}
              />

              <img
                src={portraitSrc}
                alt="Macall Mensah Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
                <div>
                  <p
                    className={`text-[11px] font-display tracking-widest uppercase font-semibold ${
                      isLight ? 'text-purple-700' : 'text-purple-300'
                    }`}
                  >
                    Broadcaster & MC
                  </p>
                  <p
                    className={`text-sm font-display font-bold uppercase tracking-wider ${
                      isLight ? 'text-[#090D1E]' : 'text-white'
                    }`}
                  >
                    Macall Mensah
                  </p>
                </div>
                <span className="text-xs font-display text-gold font-bold tracking-widest">
                  TAKORADI / GHANA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Disciplines List */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`space-y-6 text-lg sm:text-xl font-light leading-relaxed mb-16 ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <p>
                Based in <strong className={isLight ? 'text-[#090D1E] font-medium' : 'text-white font-medium'}>Takoradi, Ghana</strong>, Macall Mensah works across live hosting, radio and public speaking. He brings personality, preparation and an engaging voice to every audience.
              </p>
              <p className={isLight ? 'text-slate-600 text-base sm:text-lg' : 'text-slate-400 text-base sm:text-lg'}>
                Known as a cultural pillar in the Oil City with nationwide acclaim, Macall combines corporate diplomacy, entertainment culture, and pan-African media excellence—ensuring every production transitions seamlessly into an unforgettable celebration.
              </p>
            </motion.div>

            {/* Editorial Disciplines List */}
            <div
              className={`border-t divide-y transition-colors duration-500 ${
                isLight ? 'border-slate-200 divide-slate-200' : 'border-white/10 divide-white/10'
              }`}
            >
              {disciplines.map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="py-7 group flex flex-col md:flex-row md:items-baseline justify-between gap-4 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-4 md:w-5/12">
                    <span
                      className={`font-display text-xs tracking-widest font-semibold ${
                        isLight ? 'text-purple-600' : 'text-purple-400'
                      }`}
                    >
                      {item.num}
                    </span>
                    <h3
                      className={`font-display font-bold text-xl sm:text-2xl uppercase tracking-wide transition-colors ${
                        isLight
                          ? 'text-[#090D1E] group-hover:text-purple-600'
                          : 'text-white group-hover:text-purple-300'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm md:w-6/12 font-light leading-relaxed transition-colors ${
                      isLight ? 'text-slate-600 group-hover:text-slate-900' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="hidden md:flex md:w-1/12 justify-end">
                    <ArrowUpRight
                      size={18}
                      className={`transition-all duration-200 ${
                        isLight
                          ? 'text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                          : 'text-slate-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
