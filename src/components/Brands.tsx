import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/themeContext';

const placeholderPartners = [
  'Corporate Partner',
  'Broadcasting Network',
  'National Summit',
  'State Ministry',
  'Commercial Brand',
  'Media House',
];

export default function Brands() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      className={`py-24 border-t border-b overflow-hidden transition-colors duration-500 ${
        isLight
          ? 'bg-white border-slate-200'
          : 'bg-[#050711] border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <p
          className={`font-display text-xs tracking-[0.3em] uppercase font-semibold mb-12 ${
            isLight ? 'text-purple-600' : 'text-purple-400'
          }`}
        >
          TRUSTED ON STAGE & ON AIR
        </p>

        {/* Minimalist Logo Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {placeholderPartners.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`h-24 rounded-xl border transition-all duration-300 flex items-center justify-center p-4 group ${
                isLight
                  ? 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 hover:border-purple-300'
                  : 'border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.04] hover:border-purple-500/30'
              }`}
            >
              <span
                className={`text-[11px] font-display uppercase tracking-widest transition-colors text-center ${
                  isLight
                    ? 'text-slate-500 group-hover:text-slate-800'
                    : 'text-slate-500 group-hover:text-slate-300'
                }`}
              >
                [{item} Logo]
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
