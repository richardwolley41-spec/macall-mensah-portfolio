import React, { useState } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/233208022554?text=${encodeURIComponent(
  "Hello Macall, I visited your website and would like to enquire about booking you for an event."
)}`;

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3">
      {/* Subtle Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090D1E]/95 backdrop-blur-md border border-white/10 text-[11px] font-display font-medium tracking-wider text-slate-200 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with Macall</span>
      </div>

      {/* Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#0F142D] via-[#090D1E] to-[#04060E] border border-purple-500/40 hover:border-purple-400 flex items-center justify-center text-white shadow-2xl shadow-purple-950/60 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Direct WhatsApp Contact"
      >
        {/* Subtle glowing halo */}
        <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/35 transition-colors duration-300 pointer-events-none" />

        {/* Pulse indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#050711] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

        <MessageSquare
          size={20}
          className="relative z-10 text-purple-200 group-hover:text-white transition-colors duration-200"
        />
      </a>
    </div>
  );
}
