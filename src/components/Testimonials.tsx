import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

const testimonials = [
  {
    id: 1,
    name: '[Client / Event Producer Placeholder]',
    position: 'Director of Corporate Events',
    company: 'Pan-African Summit',
    quote:
      'Macall brought unmatched commanding presence to our international gala. His poise on the microphone and spontaneous crowd rapport kept 800+ executive delegates engaged from opening keynote to the closing toast.',
  },
  {
    id: 2,
    name: '[Media Executive Placeholder]',
    position: 'Head of Programming',
    company: 'National Broadcast Network',
    quote:
      'One of the most natural, authentic voices on contemporary Ghanaian radio. Macall commands conversations with precision, cultural relevance, and memorable warmth.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className={`relative py-28 lg:py-36 border-t overflow-hidden transition-colors duration-500 ${
        isLight
          ? 'bg-[#F8F9FD] text-[#090D1E] border-slate-200'
          : 'bg-[#050711] text-white border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-purple-500" />
          <span
            className={`font-display text-xs tracking-[0.3em] uppercase font-semibold ${
              isLight ? 'text-purple-600' : 'text-purple-400'
            }`}
          >
            Testimonials
          </span>
        </div>

        <div className="mb-16">
          <h2
            className={`font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase ${
              isLight ? 'text-[#090D1E]' : 'text-white'
            }`}
          >
            WHAT PEOPLE SAY.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Quote
            className={`w-24 h-24 absolute -top-8 -left-10 pointer-events-none ${
              isLight ? 'text-purple-600/10' : 'text-purple-500/10'
            }`}
          />

          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <p
                  className={`font-serif italic text-xl sm:text-2xl lg:text-3xl leading-relaxed ${
                    isLight ? 'text-slate-800' : 'text-slate-200'
                  }`}
                >
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center text-xs font-display font-bold ${
                      isLight
                        ? 'bg-purple-100 border-purple-200 text-purple-800'
                        : 'bg-purple-950/40 border-purple-500/30 text-purple-300'
                    }`}
                  >
                    MM
                  </div>
                  <div>
                    <h4
                      className={`font-display font-bold text-sm uppercase tracking-wider ${
                        isLight ? 'text-[#090D1E]' : 'text-white'
                      }`}
                    >
                      {testimonials[current].name}
                    </h4>
                    <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {testimonials[current].position} • {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div
            className={`flex items-center gap-3 mt-10 pt-6 border-t ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}
          >
            <button
              onClick={prev}
              className={`p-2.5 rounded-full border transition-colors ${
                isLight
                  ? 'border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600 bg-white'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-purple-400'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <span
              className={`text-xs font-display tracking-widest ${
                isLight ? 'text-slate-500' : 'text-slate-500'
              }`}
            >
              0{current + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={next}
              className={`p-2.5 rounded-full border transition-colors ${
                isLight
                  ? 'border-slate-300 text-slate-700 hover:border-purple-600 hover:text-purple-600 bg-white'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-purple-400'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
