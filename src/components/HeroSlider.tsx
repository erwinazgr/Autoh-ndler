import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop',
    title: 'PORSCHE',
    subtitle: 'Rennsport für die Straße',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
    title: 'FERRARI',
    subtitle: 'Die V8-Legende',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
    title: 'ASTON',
    subtitle: 'Britische Eleganz',
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[var(--color-brand-bg)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0C0A09] z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative flex flex-col items-center"
          >
            <p className="font-accent italic text-2xl md:text-4xl text-[var(--color-brand-cta)] mb-6">
              {slides[current].subtitle}
            </p>
            <h1 className="font-heading text-7xl md:text-9xl lg:text-[12rem] font-bold text-[var(--color-brand-text)] leading-none mb-12 tracking-tight drop-shadow-2xl">
              {slides[current].title}
            </h1>
            <button className="bg-[var(--color-brand-cta)] text-[var(--color-brand-bg)] px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold hover-lift ripple-btn">
              Entdecken
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-[var(--color-brand-accent)] flex items-center justify-center hover:bg-[var(--color-brand-surface)] transition-colors duration-300 text-[var(--color-brand-text)] hover-glow">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-[var(--color-brand-accent)] flex items-center justify-center hover:bg-[var(--color-brand-surface)] transition-colors duration-300 text-[var(--color-brand-text)] hover-glow">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-12 left-12 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 transition-all duration-500 ${idx === current ? 'w-16 bg-[var(--color-brand-cta)]' : 'w-6 bg-[var(--color-brand-accent)]/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
