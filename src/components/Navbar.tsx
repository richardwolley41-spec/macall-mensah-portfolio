import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, Camera, Sun, Moon } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface NavbarProps {
  onOpenPhotoManager?: () => void;
}

const WHATSAPP_URL = `https://wa.me/233208022554?text=${encodeURIComponent(
  "Hello Macall, I visited your website and would like to enquire about booking you for an event."
)}`;

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'MEDIA', href: '#media' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenPhotoManager }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isLight
              ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-black/[0.06] shadow-lg shadow-slate-200/40'
              : 'bg-[#050711]/90 backdrop-blur-xl py-4 border-b border-white/[0.06] shadow-2xl shadow-black/40'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Left: Brand mark */}
          <a
            href="#home"
            className={`group font-display font-bold text-lg sm:text-xl tracking-[0.22em] uppercase transition-colors duration-300 flex items-center gap-2 ${
              isLight ? 'text-[#090D1E] hover:text-purple-600' : 'text-white hover:text-purple-300'
            }`}
          >
            <span>MACALL MENSAH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-80 group-hover:scale-150 transition-transform duration-300" />
          </a>

          {/* Right: Minimal Navigation Links + Theme Toggle + BOOK ME */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10">
            <nav className="flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-display text-xs lg:text-[13px] tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300 ${
                    isLight
                      ? 'text-slate-600 hover:text-[#090D1E]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Theme Toggle (Sun / Moon) */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full border transition-all duration-300 ${
                  isLight
                    ? 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-purple-600'
                    : 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-purple-300'
                }`}
                title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                aria-label="Toggle theme mode"
              >
                {isLight ? (
                  <Moon size={15} className="transition-transform duration-300 hover:rotate-12" />
                ) : (
                  <Sun size={15} className="transition-transform duration-300 hover:rotate-45 text-amber-300" />
                )}
              </button>

              {onOpenPhotoManager && (
                <button
                  onClick={onOpenPhotoManager}
                  className={`p-2.5 rounded-full border transition-colors ${
                    isLight
                      ? 'border-slate-200 text-slate-600 hover:text-purple-600 hover:bg-slate-100'
                      : 'border-white/10 text-slate-400 hover:text-purple-300 hover:bg-white/[0.04]'
                  }`}
                  title="Customize Photos"
                  aria-label="Customize Photos"
                >
                  <Camera size={15} />
                </button>
              )}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center px-6 py-2.5 text-xs lg:text-[13px] font-display font-semibold tracking-[0.2em] text-white rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 ml-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageSquare size={13} className="text-purple-200" />
                  BOOK ME
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-colors ${
                isLight
                  ? 'border-slate-300 bg-slate-100 text-slate-700'
                  : 'border-white/10 bg-white/[0.04] text-slate-300'
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={14} /> : <Sun size={14} className="text-amber-300" />}
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-display font-semibold tracking-wider text-white bg-purple-600/90 shadow-md shadow-purple-900/40"
            >
              BOOK ME
            </a>

            <button
              onClick={() => setIsMobileOpen(true)}
              className={`p-2 transition-colors ${isLight ? 'text-slate-800' : 'text-slate-200 hover:text-white'}`}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[100] flex flex-col justify-between p-8 ${
              isLight ? 'bg-white/95 text-slate-900' : 'bg-[#050711]/95 text-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-lg tracking-[0.22em] uppercase">
                MACALL MENSAH
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-slate-400 hover:text-current transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center space-y-7 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  className="font-display font-bold text-3xl sm:text-4xl tracking-widest hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={toggleTheme}
                  className={`px-4 py-2 rounded-full border text-xs font-display tracking-widest uppercase flex items-center gap-2 ${
                    isLight
                      ? 'border-slate-300 bg-slate-100 text-slate-800'
                      : 'border-white/10 bg-white/[0.04] text-slate-200'
                  }`}
                >
                  {isLight ? <Moon size={14} /> : <Sun size={14} className="text-amber-300" />}
                  <span>{isLight ? 'Dark Mode' : 'Light Mode'}</span>
                </button>

                {onOpenPhotoManager && (
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      onOpenPhotoManager();
                    }}
                    className={`px-4 py-2 rounded-full border text-xs font-display tracking-widest uppercase flex items-center gap-2 ${
                      isLight
                        ? 'border-purple-300 text-purple-700 bg-purple-50'
                        : 'border-purple-500/30 text-purple-300 bg-purple-950/20'
                    }`}
                  >
                    <Camera size={14} />
                    <span>Photos</span>
                  </button>
                )}
              </div>
            </div>

            <div className="w-full pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="w-full py-4 text-center rounded-xl font-display font-bold text-sm tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-900/40"
              >
                BOOK VIA WHATSAPP
              </a>
              <p className="text-center text-[11px] text-slate-500 tracking-wider">
                Ghana • Available Worldwide
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
