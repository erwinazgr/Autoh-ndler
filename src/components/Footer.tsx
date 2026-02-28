import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-primary)] pt-32 pb-12" id="kontakt">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        
        <div>
          <a href="#" className="flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-brand-cta)] rounded-sm group-hover:bg-[var(--color-brand-cta)] transition-colors duration-300">
              <span className="font-heading text-3xl font-bold text-[var(--color-brand-cta)] group-hover:text-white">P</span>
            </div>
            <span className="font-heading text-3xl tracking-widest uppercase font-bold text-[var(--color-brand-bg)]">
              Prestige <span className="font-accent italic text-[var(--color-brand-cta)] lowercase text-2xl">motors</span>
            </span>
          </a>
          <p className="font-body text-[var(--color-brand-accent)] font-light leading-relaxed mb-10 text-sm">
            Ihr exklusiver Partner für Premium-Sportwagen und Luxusautomobile. 
            Wir verwirklichen automobile Träume mit Leidenschaft und Expertise.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-[var(--color-brand-accent)]/30 flex items-center justify-center text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-cta)] hover:border-[var(--color-brand-cta)] transition-all duration-300 hover-lift">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-[var(--color-brand-accent)]/30 flex items-center justify-center text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-cta)] hover:border-[var(--color-brand-cta)] transition-all duration-300 hover-lift">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-[var(--color-brand-accent)]/30 flex items-center justify-center text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-cta)] hover:border-[var(--color-brand-cta)] transition-all duration-300 hover-lift">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[var(--color-brand-bg)] font-heading text-2xl mb-8 font-bold">Navigation</h4>
          <ul className="space-y-5">
            {['Startseite', 'Kollektion', 'Philosophie', 'Service', 'Kontakt'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="font-body text-[var(--color-brand-accent)] hover:text-[var(--color-brand-cta)] transition-colors text-sm uppercase tracking-widest font-bold">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--color-brand-bg)] font-heading text-2xl mb-8 font-bold">Kontakt</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-5">
              <MapPin className="w-6 h-6 text-[var(--color-brand-cta)] shrink-0 mt-1" />
              <span className="font-body text-[var(--color-brand-accent)] text-sm leading-relaxed font-light">
                Königsallee 1<br />
                40212 Düsseldorf<br />
                Deutschland
              </span>
            </li>
            <li className="flex items-center gap-5">
              <Phone className="w-6 h-6 text-[var(--color-brand-cta)] shrink-0" />
              <span className="font-body text-[var(--color-brand-accent)] text-sm font-light">
                +49 (0) 211 123 456
              </span>
            </li>
            <li className="flex items-center gap-5">
              <Mail className="w-6 h-6 text-[var(--color-brand-cta)] shrink-0" />
              <span className="font-body text-[var(--color-brand-accent)] text-sm font-light">
                info@prestige-motors.de
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--color-brand-bg)] font-heading text-2xl mb-8 font-bold">Newsletter</h4>
          <p className="font-body text-[var(--color-brand-accent)] font-light leading-relaxed mb-8 text-sm">
            Abonnieren Sie unseren Newsletter für exklusive Angebote und Neuigkeiten.
          </p>
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Ihre E-Mail Adresse" 
              className="bg-transparent border-b border-[var(--color-brand-accent)]/50 py-4 text-sm text-[var(--color-brand-bg)] focus:outline-none focus:border-[var(--color-brand-cta)] transition-colors placeholder:text-[var(--color-brand-accent)] font-body"
            />
            <button 
              type="submit" 
              className="text-left py-2 font-body text-sm uppercase tracking-widest text-[var(--color-brand-cta)] hover:text-[var(--color-brand-bg)] transition-colors font-bold mt-4"
            >
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-[var(--color-brand-accent)]/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body text-[var(--color-brand-accent)] text-xs uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} Prestige Motors. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-8">
          <a href="#" className="font-body text-[var(--color-brand-accent)] hover:text-[var(--color-brand-cta)] transition-colors text-xs uppercase tracking-widest font-bold">Impressum</a>
          <a href="#" className="font-body text-[var(--color-brand-accent)] hover:text-[var(--color-brand-cta)] transition-colors text-xs uppercase tracking-widest font-bold">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
