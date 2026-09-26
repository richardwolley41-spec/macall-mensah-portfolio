import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../utils/themeContext';

interface GalleryProps {
  photos: Record<string, string>;
}

export default function Gallery({ photos }: GalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const galleryItems = [
    { id: 1, title: 'Macall on Stage', category: 'Event Hosting', src: photos.mcSuitMic, aspect: 'aspect-[3/4]', colSpan: 'lg:col-span-4', offsetY: 'lg:translate-y-6', caption: 'Macall speaking on stage.' },
    { id: 2, title: 'At the Podium', category: 'Event Hosting', src: photos.ghanaianPodium, aspect: 'aspect-[4/5]', colSpan: 'lg:col-span-5', offsetY: 'lg:-translate-y-10', caption: 'Macall at a podium in traditional attire.' },
    { id: 3, title: 'Studio Portrait', category: 'Portrait', src: photos.heroTurquoise, aspect: 'aspect-[3/4]', colSpan: 'lg:col-span-5', offsetY: 'lg:-translate-y-4', caption: 'Portrait of Macall in turquoise.' },
    { id: 4, title: 'Professional Portrait', category: 'Portrait', src: photos.aboutPortrait, aspect: 'aspect-square', colSpan: 'lg:col-span-4', offsetY: 'lg:translate-y-8', caption: 'Professional portrait of Macall.' },
  ];

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section
      id="gallery"
      className={`relative py-32 lg:py-44 overflow-hidden transition-colors duration-500 ${
        isLight ? 'bg-white text-[#090D1E]' : 'bg-[#050711] text-white'
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none ${
          isLight ? 'bg-purple-200/30' : 'bg-purple-950/20'
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
            Visual Archive
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-10 lg:mb-14">
          <h2
            className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.92] ${
              isLight ? 'text-[#090D1E]' : 'text-white'
            }`}
          >
            SELECTED
            <br />
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? 'bg-gradient-to-r from-purple-700 via-indigo-600 to-[#090D1E]'
                  : 'bg-gradient-to-r from-purple-400 via-indigo-200 to-white'
              }`}
            >
              MOMENTS.
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base font-light max-w-xl mt-6 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            An interactive editorial chronicle of stage command, broadcast highlights, and distinguished cultural assemblies.
          </p>
        </div>

        {/* Editorial Asymmetric Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              onClick={() => setSelectedIdx(idx)}
              className={`${item.colSpan} ${item.offsetY} cursor-pointer group relative`}
            >
              <div
                className={`relative ${item.aspect} w-full rounded-2xl overflow-hidden border transition-all duration-700 ${
                  isLight
                    ? 'border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/50 group-hover:border-purple-400 group-hover:shadow-purple-200/50'
                    : 'border-white/10 bg-[#080B1E] shadow-2xl shadow-black/80 group-hover:border-purple-500/50 group-hover:shadow-purple-950/40'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                />

                {/* Subtle dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Reveal Card Info */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Maximize2 size={14} />
                    </div>
                  </div>

                  <div>
                    <span className="font-display text-[10px] tracking-[0.25em] uppercase text-purple-300 font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Quiet caption underneath */}
              <div className="mt-3 flex items-baseline justify-between px-1 text-slate-500 text-xs">
                <span className="font-display uppercase tracking-widest text-[11px] text-slate-400">
                  {item.category}
                </span>
                <span className="font-mono text-[10px]">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Top Bar with counter & close */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
              <span className="font-display text-xs tracking-widest text-slate-400 uppercase">
                {selectedIdx + 1} / {galleryItems.length} • {galleryItems[selectedIdx].category}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors pointer-events-auto"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Prev/Next arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
            >
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#060814]">
                <img
                  src={galleryItems[selectedIdx].src}
                  alt={galleryItems[selectedIdx].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">
                  {galleryItems[selectedIdx].title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-lg">
                  {galleryItems[selectedIdx].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
