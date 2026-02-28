import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop',
    title: 'PORSCHE 911 GT3 RS',
    subtitle: 'Rennsport für die Straße',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
    title: 'FERRARI F8 TRIBUTO',
    subtitle: 'Die V8-Legende',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
    title: 'ASTON MARTIN DBS',
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
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[var(--color-prestige-accent)] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
              {slides[current].subtitle}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8">
              {slides[current].title}
            </h1>
            <button className="border border-white/30 hover:border-white/80 hover:bg-white/10 transition-all duration-300 px-8 py-3 rounded-full text-sm tracking-widest uppercase">
              Entdecken
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-12 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 transition-all duration-500 rounded-full ${idx === current ? 'w-12 bg-[var(--color-prestige-accent)]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}
