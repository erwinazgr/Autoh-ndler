import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = scrolled ? 'text-[var(--color-prestige-text)]' : 'text-white';
  const logoBorderClass = scrolled ? 'border-[var(--color-prestige-accent)]' : 'border-white/50';
  const logoTextClass = scrolled ? 'text-[var(--color-prestige-accent)]' : 'text-white';
  const linkClass = scrolled ? 'text-[var(--color-prestige-text-muted)] hover:text-[var(--color-prestige-accent)]' : 'text-white/80 hover:text-white';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[var(--color-prestige-surface)]/95 backdrop-blur-md py-4 border-b border-[var(--color-prestige-border)] shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 group ${textColorClass}`}>
          <div className={`w-8 h-8 flex items-center justify-center border ${logoBorderClass} rounded-sm group-hover:bg-[var(--color-prestige-accent)] group-hover:border-[var(--color-prestige-accent)] transition-colors`}>
            <span className={`font-serif text-lg font-bold ${logoTextClass} group-hover:text-white`}>P</span>
          </div>
          <span className="font-serif text-xl tracking-widest uppercase">
            Prestige <span className="text-[var(--color-prestige-accent)]">Motors</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Kollektion', 'Philosophie', 'Service', 'Kontakt'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative group ${linkClass}`}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--color-prestige-accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden transition-colors ${textColorClass} hover:text-[var(--color-prestige-accent)]`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--color-prestige-surface)] border-b border-[var(--color-prestige-border)] py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {['Kollektion', 'Philosophie', 'Service', 'Kontakt'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-prestige-text-muted)] hover:text-[var(--color-prestige-accent)] transition-colors"
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
