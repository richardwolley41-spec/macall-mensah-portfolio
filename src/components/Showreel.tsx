import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export default function Showreel() {
  return (
    <section id="showreel" className="py-24 md:py-32 bg-charcoal-light relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="See Macall In Action" alignment="center" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative aspect-video w-full max-w-5xl mx-auto bg-charcoal border border-offwhite/10 flex items-center justify-center overflow-hidden group cursor-pointer"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/40 transition-colors duration-500 z-10" />
          
          <span className="text-offwhite/20 font-display text-sm uppercase tracking-widest absolute z-0">Video Thumbnail Placeholder</span>
          
          {/* Play Button */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gold/10 backdrop-blur-sm border border-gold rounded-full flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
              <Play className="text-gold group-hover:text-charcoal w-8 h-8 md:w-10 md:h-10 ml-2 transition-colors duration-500" />
            </div>
            <span className="mt-6 font-display font-medium uppercase tracking-[0.2em] text-sm text-offwhite group-hover:text-gold transition-colors duration-300">
              Watch Full Showreel
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
