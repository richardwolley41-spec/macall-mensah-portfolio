import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, className, alignment = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", alignment === 'center' ? "text-center" : "text-left", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-display font-bold text-3xl md:text-5xl uppercase tracking-wider text-offwhite mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold font-medium tracking-widest uppercase text-sm md:text-base"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={cn(
          "h-1 bg-gold mt-6 origin-left", 
          alignment === 'center' ? "mx-auto w-24 origin-center" : "w-24"
        )}
      />
    </div>
  );
}
