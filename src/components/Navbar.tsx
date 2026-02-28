import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = scrolled ? 'bg-[var(--color-brand-bg)] shadow-md' : 'bg-transparent';
  const textColor = scrolled ? 'text-[var(--color-brand-text)]' : 'text-white';
  const logoColor = scrolled ? 'text-[var(--color-brand-cta)]' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg} py-5`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-3 group ${textColor}`}>
          <div className={`w-10 h-10 flex items-center justify-center border border-current rounded-sm transition-colors duration-300 group-hover:border-[var(--color-brand-cta)]`}>
            <span className={`font-heading text-xl font-bold ${logoColor} group-hover:text-[var(--color-brand-cta)]`}>P</span>
          </div>
          <span className="font-heading text-2xl tracking-widest uppercase font-bold">
            Prestige <span className="font-accent italic text-[var(--color-brand-cta)] lowercase text-xl">motors</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Kollektion', 'Philosophie', 'Service', 'Kontakt'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-body text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:text-[var(--color-brand-cta)] ${textColor}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          className={`md:hidden transition-colors duration-300 ${textColor} hover:text-[var(--color-brand-cta)]`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%', filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: '-100%', filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 w-full bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-accent)]/20 py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {['Kollektion', 'Philosophie', 'Service', 'Kontakt'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-heading text-2xl tracking-wider text-[var(--color-brand-text)] hover:text-[var(--color-brand-cta)] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
