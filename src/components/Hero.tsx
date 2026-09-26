import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Mic, Radio } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface HeroProps {
  portraitSrc: string;
  onOpenPhotoManager?: () => void;
}

export default function Hero({ portraitSrc, onOpenPhotoManager }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural physics
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  // Layer parallax transforms
  const glowX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const leftTextX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const rightTextX = useTransform(springX, [-0.5, 0.5], [12, -12]);

  const portraitX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className={`relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 select-none transition-colors duration-500 ${
        isLight ? 'bg-[#F8F9FD] text-[#090D1E]' : 'bg-[#050711] text-white'
      }`}
    >
      {/* ============================================================== */}
      {/* 1. ATMOSPHERIC LIGHTING & PURPLE GLOW (Backdrop Layer)          */}
      {/* ============================================================== */}
      <motion.div
        style={{ x: isMobile ? 0 : glowX, y: isMobile ? 0 : glowY }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Primary soft purple atmospheric glow behind Macall */}
        <div
          className={`absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[850px] rounded-full blur-2xl lg:blur-3xl animate-pulse duration-[8000ms] ${
            isLight
              ? 'bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,rgba(99,102,241,0.06)_40%,transparent_70%)]'
              : 'bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(99,102,241,0.1)_40%,transparent_70%)]'
          }`}
        />

        {/* Subtle warm gold rim glow */}
        <div className="absolute top-[40%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(226,192,119,0.08)_0%,transparent_70%)] blur-3xl" />

        {/* Ambient bottom fade */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-40 pointer-events-none transition-colors duration-500 ${
            isLight
              ? 'bg-gradient-to-t from-[#F8F9FD] via-[#F8F9FD]/80 to-transparent'
              : 'bg-gradient-to-t from-[#050711] via-[#050711]/80 to-transparent'
          }`}
        />
      </motion.div>

      {/* ============================================================== */}
      {/* 2. MAIN HERO CONTAINER: MACALL [ANIMATED PORTRAIT] MENSAH      */}
      {/* ============================================================== */}
      <div className="relative z-20 max-w-[1520px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center">
        
        {/* --- DESKTOP LAYOUT (lg+): Balanced 3-column split with image in center --- */}
        <div className="hidden lg:grid grid-cols-12 gap-4 xl:gap-8 items-center w-full my-auto py-2">
          
          {/* LEFT COLUMN: "MACALL" + Intro + Booking Actions */}
          <motion.div
            style={{ x: isMobile ? 0 : leftTextX }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-4 flex flex-col justify-center pr-2 xl:pr-6 z-30"
          >
            {/* Small Intro Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-purple-500" />
              <span
                className={`font-display font-bold tracking-[0.3em] uppercase text-xs ${
                  isLight ? 'text-purple-600' : 'text-purple-400'
                }`}
              >
                Hello, I'm
              </span>
            </div>

            {/* FIRST NAME: "MACALL" */}
            <h1
              className={`font-display font-extrabold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight leading-[0.95] uppercase transition-colors duration-300 ${
                isLight
                  ? 'text-[#090D1E]'
                  : 'text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.8)]'
              }`}
            >
              Macall
            </h1>

            {/* Sub-tagline */}
            <p
              className={`mt-3 text-sm xl:text-base font-display font-medium tracking-wide ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Broadcaster & Premier Event Host
            </p>

            {/* Location & Global Reach */}
            <div className="mt-2.5 flex items-center gap-2 text-xs font-display tracking-widest uppercase">
              <span className="text-gold font-bold">TAKORADI</span>
              <span className="text-purple-500">/</span>
              <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>GHANA</span>
              <span className="text-purple-500">/</span>
              <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>GLOBAL</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full text-xs font-display font-bold tracking-widest uppercase bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Book For Events
              </a>
              <a
                href={`https://wa.me/233208022554?text=${encodeURIComponent(
                  "Hello Macall, I visited your website and would like to enquire about your availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-display tracking-widest uppercase transition-colors duration-200 group ${
                  isLight
                    ? 'text-purple-700 hover:text-purple-900 font-semibold'
                    : 'text-purple-300 hover:text-white'
                }`}
              >
                <span>WhatsApp</span>
                <span className="text-purple-500 group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>

          {/* CENTER COLUMN: THE ANIMATED FIRST IMAGE (Macall in Turquoise) */}
          <div className="col-span-4 relative flex items-end justify-center h-[56vh] xl:h-[62vh] max-h-[580px] z-20 group">
            
            {/* Ambient halo behind portrait */}
            <div className="absolute inset-0 bg-radial-purple opacity-50 blur-2xl pointer-events-none" />

            {/* Animated Motion Wrapper: Entrance + Smooth Gentle Floating Breathing */}
            <motion.div
              style={{ x: isMobile ? 0 : portraitX, y: isMobile ? 0 : portraitY }}
              initial={{ opacity: 0, y: 70, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex items-end justify-center pointer-events-auto"
            >
              {/* Continuous subtle organic floating motion */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-end justify-center"
              >
                {/* Image Frame with mask at base - Face is completely clear and uncovered */}
                <div className="w-full h-full relative overflow-hidden rounded-t-[36px] xl:rounded-t-[48px] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] flex items-end justify-center">
                  <img
                    src={portraitSrc}
                    alt="Macall Mensah - Broadcaster and Premier MC"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Seamless floor melt */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-28 pointer-events-none transition-colors duration-500 ${
                    isLight
                      ? 'bg-gradient-to-t from-[#F8F9FD] via-[#F8F9FD]/80 to-transparent'
                      : 'bg-gradient-to-t from-[#050711] via-[#050711]/80 to-transparent'
                  }`}
                />

                {/* Change photo button trigger */}
                {onOpenPhotoManager && (
                  <button
                    onClick={onOpenPhotoManager}
                    className={`absolute bottom-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] font-display px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-lg ${
                      isLight
                        ? 'bg-white/90 hover:bg-purple-50 text-purple-900 border border-purple-200'
                        : 'bg-black/75 hover:bg-purple-900/90 text-purple-200 border border-purple-500/40'
                    }`}
                    title="Change Photo"
                  >
                    <Sparkles size={12} className="text-purple-500" />
                    <span>Change Photo</span>
                  </button>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: "MENSAH" + Key Credentials & Stage Identity */}
          <motion.div
            style={{ x: isMobile ? 0 : rightTextX }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-4 flex flex-col justify-center pl-2 xl:pl-6 z-30"
          >
            {/* LAST NAME: "MENSAH" */}
            <h2
              className={`font-display font-extrabold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight leading-[0.95] uppercase transition-colors duration-300 ${
                isLight
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#090D1E] via-purple-950 to-purple-800'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-slate-400 drop-shadow-[0_12px_35px_rgba(0,0,0,0.8)]'
              }`}
            >
              Mensah
            </h2>

            {/* Accolade & Voice Title */}
            <p
              className={`mt-3 text-sm xl:text-base font-display font-semibold ${
                isLight ? 'text-purple-700' : 'text-purple-300'
              }`}
            >
              The Voice of Authority & Distinction
            </p>

            {/* Quick Micro-Credentials Cards */}
            <div className="mt-5 space-y-2.5 max-w-sm">
              <div
                className={`p-2.5 rounded-xl border backdrop-blur-md flex items-center gap-3 transition-colors duration-300 ${
                  isLight
                    ? 'bg-white/80 border-slate-200/80 shadow-sm'
                    : 'bg-white/[0.04] border-white/10'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                  <Mic size={16} />
                </div>
                <div>
                  <div className={`text-xs font-display font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Professional Event Hosting
                  </div>
                  <div className={`text-[11px] font-sans ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Events, celebrations & live audiences
                  </div>
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border backdrop-blur-md flex items-center gap-3 transition-colors duration-300 ${
                  isLight
                    ? 'bg-white/80 border-slate-200/80 shadow-sm'
                    : 'bg-white/[0.04] border-white/10'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0">
                  <Radio size={16} />
                </div>
                <div>
                  <div className={`text-xs font-display font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Radio & Broadcasting
                  </div>
                  <div className={`text-[11px] font-sans ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Conversations that connect with listeners
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* --- MOBILE & TABLET LAYOUT (< lg): Stacked with image cleanly between name --- */}
        <div className="lg:hidden flex flex-col items-center justify-between w-full py-2 relative">
          
          {/* 1. TOP HEADER: "MACALL" (Above image, never touches face) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full text-center z-30"
          >
            <div className="inline-flex items-center gap-2 mb-1 px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
              <span
                className={`font-display font-bold tracking-[0.2em] uppercase text-[10px] ${
                  isLight ? 'text-purple-700' : 'text-purple-300'
                }`}
              >
                Hello, I'm
              </span>
              <span className="text-purple-400">•</span>
              <span className="text-[10px] font-display font-bold text-gold tracking-widest uppercase">
                Takoradi, Ghana
              </span>
            </div>

            <h1
              className={`font-display font-black text-3xl xs:text-4xl sm:text-5xl tracking-tight uppercase leading-[0.95] ${
                isLight ? 'text-[#090D1E]' : 'text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)]'
              }`}
            >
              Macall
            </h1>
          </motion.div>

          {/* 2. MIDDLE: THE ANIMATED FIRST IMAGE (Free of any face obstruction) */}
          <div className="relative w-full h-[28vh] xs:h-[32vh] sm:h-[36vh] max-h-[300px] flex items-end justify-center my-0.5 z-20 group">
            
            {/* Ambient soft glow */}
            <div className="absolute inset-0 bg-radial-purple opacity-40 blur-xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full h-full flex items-end justify-center"
            >
              {/* Continuous breathing floating animation */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-end justify-center"
              >
                <div className="w-full h-full relative overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] flex items-end justify-center">
                  <img
                    src={portraitSrc}
                    alt="Macall Mensah - Takoradi Ghana"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] filter contrast-[1.04]"
                  />
                </div>

                {/* Bottom gradient fade */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-14 pointer-events-none transition-colors duration-500 ${
                    isLight
                      ? 'bg-gradient-to-t from-[#F8F9FD] to-transparent'
                    : 'bg-gradient-to-t from-[#050711] to-transparent'
                  }`}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* 3. BOTTOM HEADER: "MENSAH" (Positioned strictly below portrait / chest) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full text-center z-30 flex flex-col items-center"
          >
            <h2
              className={`font-display font-black text-3xl xs:text-4xl sm:text-5xl tracking-tight uppercase leading-[0.95] ${
                isLight
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#090D1E] via-purple-900 to-purple-700'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)]'
              }`}
            >
              Mensah
            </h2>

            <p
              className={`mt-1 text-xs sm:text-sm font-display font-medium tracking-wide ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Premier MC • Broadcaster • State Protocol
            </p>

            {/* Mobile Actions */}
            <div className="mt-3 flex items-center justify-center gap-3 w-full max-w-xs">
              <a
                href="#contact"
                className="flex-1 py-2 px-4 rounded-full text-center text-xs font-display font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30"
              >
                Book Events
              </a>
              <a
                href={`https://wa.me/233208022554?text=${encodeURIComponent(
                  "Hello Macall, I visited your website and would like to enquire about booking you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 rounded-full text-center text-xs font-display font-semibold tracking-wider uppercase border ${
                  isLight
                    ? 'border-purple-300 text-purple-700 bg-white/80'
                    : 'border-purple-500/40 text-purple-300 bg-purple-950/30'
                }`}
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 3. BOTTOM SCROLL INDICATOR                                     */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-30 w-full pb-6 sm:pb-8 flex flex-col items-center justify-center pointer-events-auto"
      >
        <a
          href="#about"
          className={`group flex flex-col items-center gap-1.5 transition-colors duration-300 ${
            isLight ? 'text-slate-500 hover:text-purple-700' : 'text-slate-400 hover:text-purple-300'
          }`}
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] sm:text-xs font-display uppercase tracking-[0.25em] font-medium group-hover:tracking-[0.35em] transition-all duration-300">
            Explore Macall Mensah
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-purple-500" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
