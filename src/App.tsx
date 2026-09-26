import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MCEvents from './components/MCEvents';
import Radio from './components/Radio';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { usePhotoStore } from './utils/photoStore';
import { ThemeProvider, useTheme } from './utils/themeContext';

function AppContent() {
  const { photos } = usePhotoStore();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen overflow-x-hidden font-sans selection:bg-purple-600/40 selection:text-white transition-colors duration-500 ${
        isLight ? 'bg-[#F8F9FD] text-[#090D1E]' : 'bg-[#050711] text-[#F8FAFC]'
      }`}
    >

      {/* Minimal Top Navigation with Dark/Light Toggle */}
      <Navbar  />

      <main>
        {/* 1. Hero with Layered Typography & Overlapping Macall Cutout */}
        <Hero
          portraitSrc={photos.heroTurquoise}
          
        />

        {/* 2. About Section: "MORE THAN A VOICE" */}
        <About portraitSrc={photos.aboutPortrait} />

        {/* 3. MC Section: "COMMANDING THE STAGE" & Cultural Feature (Ghanaian Attire at Podium) */}
        <MCEvents
          suitMicSrc={photos.mcSuitMic}
          ghanaianPodiumSrc={photos.ghanaianPodium}
        />

        {/* 4. Radio Section: "BEHIND THE MIC" */}
        <Radio studioSrc={photos.radioStudio} />

        {/* 5. Selected Moments: Interactive Editorial Gallery & Lightbox */}
        <Gallery photos={photos} />

        {/* Booking Section: "LET'S MAKE SOMETHING MEMORABLE" */}
        <Booking />
      </main>

      {/* 10. Minimalist Editorial Footer */}
      <Footer />

      {/* 11. Tasteful Floating WhatsApp Contact */}
      <FloatingWhatsApp />


    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
