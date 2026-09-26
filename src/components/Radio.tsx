import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/themeContext';

export default function Radio({ studioSrc }: { studioSrc: string }) {
  const { theme } = useTheme();
  const light = theme === 'light';
  return <section id="media" className={`relative py-28 lg:py-40 border-t ${light ? 'bg-white text-[#090D1E] border-slate-200' : 'bg-[#070916] text-white border-white/10'}`}>
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 grid gap-10 lg:grid-cols-2 items-center">
      <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <p className="text-purple-500 tracking-[0.3em] uppercase text-xs font-bold mb-6">Broadcasting</p>
        <h2 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tighter leading-none mb-8">BEHIND<br/>THE MIC.</h2>
        <p className={`text-lg leading-relaxed mb-8 ${light ? 'text-slate-600' : 'text-slate-300'}`}>Macall brings his voice and personality to radio and live conversations. Ask about broadcasting, interviews and media appearances.</p>
        <a className="inline-flex rounded-full px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest text-xs" target="_blank" rel="noopener noreferrer" href={`https://wa.me/233208022554?text=${encodeURIComponent('Hello Macall, I would like to enquire about a radio or media engagement.')}`}>Enquire on WhatsApp</a>
      </motion.div>
      <div className={`min-h-[300px] rounded-3xl overflow-hidden flex items-center justify-center border ${light ? 'bg-slate-50 border-slate-200' : 'bg-[#101327] border-white/10'}`}>
        <div className="p-12 text-center"><p className="text-purple-400 tracking-[0.3em] text-xs uppercase mb-3">On the air</p><p className="font-display text-xl">Broadcast clips and studio moments coming soon</p></div>
      </div>
    </div>
  </section>;
}
