import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, ShieldCheck } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface MCEventsProps {
  suitMicSrc: string;
  ghanaianPodiumSrc: string;
}

const eventCategories = [
  { name: 'Corporate Events', detail: 'Annual AGMs, executive retreats & investor summits' },
  { name: 'Awards & Galas', detail: 'High-profile red carpets, entertainment & industry awards' },
  { name: 'Weddings', detail: 'Elite nuptials celebrating love with bespoke charm and grandeur' },
  { name: 'Conferences', detail: 'Multi-track international summits & trade symposiums' },
  { name: 'Brand Activations', detail: 'Experiential product rollouts & high-energy live roadshows' },
  { name: 'Entertainment Events', detail: 'Arena concerts, comedy specials & televised showcases' },
  { name: 'Panel Moderation', detail: 'Thought-leadership forums & policy debates' },
];

export default function MCEvents({ suitMicSrc, ghanaianPodiumSrc }: MCEventsProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      id="experience"
      className={`overflow-hidden transition-colors duration-500 ${
        isLight ? 'bg-[#F8F9FD] text-[#090D1E]' : 'bg-[#050711] text-white'
      }`}
    >
      {/* ============================================================== */}
      {/* 1. COMMANDING THE STAGE (Cinematic Black Suit & Mic)           */}
      {/* ============================================================== */}
      <section
        className={`relative py-28 lg:py-40 border-t ${
          isLight ? 'border-slate-200' : 'border-white/[0.06]'
        }`}
      >
        {/* Atmospheric backlight */}
        <div
          className={`absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${
            isLight ? 'bg-purple-200/30' : 'bg-purple-900/15'
          }`}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-purple-500" />
            <span
              className={`font-display text-xs tracking-[0.3em] uppercase font-semibold ${
                isLight ? 'text-purple-600' : 'text-purple-400'
              }`}
            >
              Live Stage Mastery
            </span>
          </div>

          {/* Overlapping Section Composition */}
          <div className="relative">
            {/* Heading That Frames the Section */}
            <div className="relative z-20 pointer-events-none mb-6 sm:mb-8 lg:-mb-10">
              <h2
                className={`font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.92] ${
                  isLight ? 'text-[#090D1E]' : 'text-white'
                }`}
              >
                COMMANDING
                <br />
                <span
                  className={`text-transparent bg-clip-text ${
                    isLight
                      ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-[#090D1E]'
                      : 'bg-gradient-to-r from-purple-400 via-white to-purple-200'
                  }`}
                >
                  THE STAGE.
                </span>
              </h2>
            </div>

            {/* Cinematic Stage Photo Frame with Overlapping Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              {/* Cinematic Photo (Macall in black suit with microphone) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="lg:col-span-8 relative z-10"
              >
                <div
                  className={`relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border shadow-2xl group transition-colors duration-500 ${
                    isLight
                      ? 'border-slate-200 bg-white shadow-slate-200/60'
                      : 'border-white/10 bg-[#080B1C] shadow-purple-950/40'
                  }`}
                >
                  <img
                    src={suitMicSrc}
                    alt="Macall Mensah commanding the stage in black suit with microphone"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-700"
                  />

                  {/* Gradient Scrim */}
                  <div
                    className={`absolute inset-0 opacity-70 pointer-events-none ${
                      isLight
                        ? 'bg-gradient-to-t from-white/90 via-transparent to-transparent'
                        : 'bg-gradient-to-t from-[#050711] via-transparent to-transparent'
                    }`}
                  />

                  {/* On-stage Badge Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <div
                      className={`flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md ${
                        isLight
                          ? 'bg-white/90 border-slate-200 text-[#090D1E]'
                          : 'bg-black/60 border-white/15 text-slate-200'
                      }`}
                    >
                      <Mic size={14} className={isLight ? 'text-purple-600' : 'text-purple-400'} />
                      <span className="font-display text-xs tracking-widest uppercase font-semibold">
                        Live Host & Stage Anchor
                      </span>
                    </div>
                    <span className="font-display text-xs text-gold font-bold tracking-widest uppercase hidden sm:block">
                      Signature Poise
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Event Categories List */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-4 flex flex-col justify-end"
              >
                <p
                  className={`text-xs font-display tracking-[0.25em] uppercase mb-6 font-semibold ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}
                >
                  Curated Engagements
                </p>

                <div className="space-y-3">
                  {eventCategories.map((cat, idx) => (
                    <div
                      key={cat.name}
                      onClick={() => setActiveCategory(idx)}
                      onMouseEnter={() => setActiveCategory(idx)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        activeCategory === idx
                          ? isLight
                            ? 'bg-purple-50/80 border-purple-300 translate-x-2 shadow-sm'
                            : 'bg-purple-950/30 border-purple-500/40 translate-x-2'
                          : isLight
                          ? 'bg-white border-slate-200/80 hover:border-purple-300'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-display font-bold text-sm tracking-wider uppercase ${
                            isLight ? 'text-[#090D1E]' : 'text-white'
                          }`}
                        >
                          {cat.name}
                        </span>
                        <ArrowRight
                          size={14}
                          className={`transition-colors duration-200 ${
                            activeCategory === idx
                              ? isLight ? 'text-purple-600' : 'text-purple-400'
                              : isLight ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        />
                      </div>
                      <p
                        className={`text-xs mt-1.5 font-light leading-relaxed ${
                          isLight ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {cat.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={`https://wa.me/233208022554?text=${encodeURIComponent(
                      "Hello Macall, I would like to book you as MC for an upcoming event."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-display font-semibold text-xs tracking-[0.2em] text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/30 hover:scale-[1.02]"
                  >
                    <span>BOOK MACALL FOR YOUR EVENT</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CULTURAL / EVENT FEATURE (Traditional Ghanaian Attire)      */}
      {/* ============================================================== */}
      <section
        className={`relative py-28 lg:py-36 border-t border-b overflow-hidden transition-colors duration-500 ${
          isLight
            ? 'bg-[#F1F4F9] border-slate-200'
            : 'bg-[#070A18] border-white/[0.06]'
        }`}
      >
        {/* Warm gold and purple atmospheric accents */}
        <div
          className={`absolute -top-24 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
            isLight ? 'bg-amber-400/10' : 'bg-amber-500/5'
          }`}
        />
        <div
          className={`absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none ${
            isLight ? 'bg-purple-300/20' : 'bg-purple-600/10'
          }`}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Editorial Narrative of Cultural Identity & State Excellence */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="font-display text-xs tracking-[0.3em] uppercase text-gold font-bold">
                  Cultural Heritage & State Protocol
                </span>
              </div>

              <h3
                className={`font-display font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.95] ${
                  isLight ? 'text-[#090D1E]' : 'text-white'
                }`}
              >
                HERITAGE ON
                <br />
                <span
                  className={`text-transparent bg-clip-text ${
                    isLight
                      ? 'bg-gradient-to-r from-amber-600 via-amber-500 to-[#090D1E]'
                      : 'bg-gradient-to-r from-gold via-yellow-200 to-white'
                  }`}
                >
                  THE GLOBAL STAGE.
                </span>
              </h3>

              <p
                className={`text-base sm:text-lg font-light leading-relaxed ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                From the stage to the podium, Macall brings an engaging presence to live events. Enquire about availability for your occasion.
              </p>

              <div
                className={`pt-4 grid grid-cols-2 gap-6 border-t ${
                  isLight ? 'border-slate-300/80' : 'border-white/10'
                }`}
              >
                <div>
                  <h4
                    className={`font-display font-bold text-xl tracking-wide ${
                      isLight ? 'text-[#090D1E]' : 'text-white'
                    }`}
                  >
                    Protocol Fluent
                  </h4>
                  <p
                    className={`text-xs mt-1 font-light leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Adept at state etiquette, traditional council conventions, and dignitary introductions.
                  </p>
                </div>
                <div>
                  <h4
                    className={`font-display font-bold text-xl tracking-wide ${
                      isLight ? 'text-[#090D1E]' : 'text-white'
                    }`}
                  >
                    Pan-African Pride
                  </h4>
                  <p
                    className={`text-xs mt-1 font-light leading-relaxed ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    Celebrating Ghanaian identity with modern elegance that resonates globally.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Large Editorial Feature Photograph (Ghanaian Attire at Podium) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-6"
            >
              <div
                className={`relative aspect-[4/5] sm:aspect-[5/6] w-full rounded-2xl overflow-hidden border shadow-2xl group transition-colors duration-500 ${
                  isLight
                    ? 'border-slate-300 bg-white shadow-slate-300/60'
                    : 'border-white/10 bg-[#060814] shadow-black/80'
                }`}
              >
                <img
                  src={ghanaianPodiumSrc}
                  alt="Macall Mensah in traditional Ghanaian attire at the podium delivering address"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Protective gradient scrim at bottom */}
                <div
                  className={`absolute inset-0 opacity-60 pointer-events-none ${
                    isLight
                      ? 'bg-gradient-to-t from-white/90 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-[#070A18] via-transparent to-transparent'
                  }`}
                />

                {/* Cultural Identity Caption */}
                <div
                  className={`absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-xl border backdrop-blur-md ${
                    isLight
                      ? 'bg-white/90 border-slate-200 text-[#090D1E]'
                      : 'bg-black/60 border-white/10 text-white'
                  }`}
                >
                  <div>
                    <span className="font-display text-[10px] tracking-[0.25em] text-gold uppercase font-bold block">
                      Podium Address • Ghana
                    </span>
                    <span className="font-display font-bold text-sm uppercase tracking-wider">
                      Macall Mensah
                    </span>
                  </div>
                  <ShieldCheck size={22} className="text-gold opacity-90" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
