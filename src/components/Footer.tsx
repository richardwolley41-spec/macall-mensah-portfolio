import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative border-t pt-16 sm:pt-20 pb-12 overflow-hidden transition-colors duration-500 ${
        isLight
          ? 'bg-slate-100/70 border-slate-200 text-[#090D1E]'
          : 'bg-[#04060E] border-white/[0.08] text-white'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b items-start ${
            isLight ? 'border-slate-200' : 'border-white/[0.08]'
          }`}
        >
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <h2
              className={`font-display font-extrabold text-2xl sm:text-3xl tracking-[0.2em] uppercase ${
                isLight ? 'text-[#090D1E]' : 'text-white'
              }`}
            >
              MACALL MENSAH
            </h2>
            <p
              className={`font-display text-xs tracking-[0.3em] uppercase font-semibold ${
                isLight ? 'text-purple-700' : 'text-purple-400'
              }`}
            >
              MC • RADIO HOST • MEDIA PERSONALITY • PUBLIC SPEAKER
            </p>

            {/* Location tag badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-display tracking-wider ${
                isLight
                  ? 'bg-white border-slate-200 text-slate-700'
                  : 'bg-white/[0.03] border-white/10 text-slate-300'
              }`}
            >
              <MapPin size={13} className="text-gold" />
              <span>Based in <strong>Takoradi, Western Region, Ghana</strong> • Available Globally</span>
            </div>

            <p
              className={`text-sm font-light max-w-md leading-relaxed pt-2 ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Event hosting, radio and engaging conversations from Takoradi, Ghana.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span
              className={`font-display text-xs tracking-[0.25em] uppercase font-semibold block mb-4 ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Navigation
            </span>
            <ul
              className={`space-y-2.5 text-xs font-display tracking-widest uppercase ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <li>
                <a href="#home" className="hover:text-purple-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-600 transition-colors">
                  About Macall
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-600 transition-colors">
                  MC & Stage
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-purple-600 transition-colors">
                  Radio & Broadcasting
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-purple-600 transition-colors">
                  Selected Moments
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-600 transition-colors">
                  Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="md:col-span-3 space-y-4">
            <span
              className={`font-display text-xs tracking-[0.25em] uppercase font-semibold block mb-4 ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Connect
            </span>
            <div className="flex flex-wrap gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/macall-mensah-5759b799/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-700 hover:border-purple-500 hover:text-purple-700 shadow-sm'
                    : 'bg-white/[0.03] border-white/10 hover:border-purple-500/50 hover:bg-purple-950/30 text-slate-300 hover:text-white'
                }`}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/233208022554"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-display tracking-widest uppercase transition-colors ${
                  isLight ? 'text-purple-700 hover:text-purple-900 font-semibold' : 'text-gold hover:text-white'
                }`}
              >
                WhatsApp: +233 20 802 2554
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
            isLight ? 'text-slate-500' : 'text-slate-500'
          }`}
        >
          <p>© 2026 Macall Mensah. Takoradi, Ghana. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 transition-colors font-display tracking-wider text-[11px] uppercase ${
              isLight ? 'text-slate-600 hover:text-purple-700' : 'text-slate-400 hover:text-purple-400'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
