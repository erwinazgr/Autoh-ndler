import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-prestige-surface)] pt-24 pb-12 border-t border-[var(--color-prestige-border)]" id="kontakt">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 flex items-center justify-center border border-[var(--color-prestige-accent)] rounded-sm group-hover:bg-[var(--color-prestige-accent)] transition-colors">
              <span className="font-serif text-2xl font-bold text-[var(--color-prestige-accent)] group-hover:text-white">P</span>
            </div>
            <span className="font-serif text-2xl tracking-widest uppercase text-[var(--color-prestige-text)]">
              Prestige <span className="text-[var(--color-prestige-accent)]">Motors</span>
            </span>
          </a>
          <p className="text-[var(--color-prestige-text-muted)] font-light leading-relaxed mb-8 text-sm">
            Ihr exklusiver Partner für Premium-Sportwagen und Luxusautomobile. 
            Wir verwirklichen automobile Träume mit Leidenschaft und Expertise.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-prestige-border)] flex items-center justify-center text-[var(--color-prestige-text-muted)] hover:bg-[var(--color-prestige-accent)] hover:text-white hover:border-[var(--color-prestige-accent)] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-prestige-border)] flex items-center justify-center text-[var(--color-prestige-text-muted)] hover:bg-[var(--color-prestige-accent)] hover:text-white hover:border-[var(--color-prestige-accent)] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-prestige-border)] flex items-center justify-center text-[var(--color-prestige-text-muted)] hover:bg-[var(--color-prestige-accent)] hover:text-white hover:border-[var(--color-prestige-accent)] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[var(--color-prestige-text)] font-serif text-xl mb-8">Navigation</h4>
          <ul className="space-y-4">
            {['Startseite', 'Kollektion', 'Philosophie', 'Service', 'Kontakt'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-[var(--color-prestige-text-muted)] hover:text-[var(--color-prestige-accent)] transition-colors text-sm uppercase tracking-widest">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[var(--color-prestige-text)] font-serif text-xl mb-8">Kontakt</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[var(--color-prestige-accent)] shrink-0 mt-1" />
              <span className="text-[var(--color-prestige-text-muted)] text-sm leading-relaxed">
                Königsallee 1<br />
                40212 Düsseldorf<br />
                Deutschland
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[var(--color-prestige-accent)] shrink-0" />
              <span className="text-[var(--color-prestige-text-muted)] text-sm">
                +49 (0) 211 123 456
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[var(--color-prestige-accent)] shrink-0" />
              <span className="text-[var(--color-prestige-text-muted)] text-sm">
                info@prestige-motors.de
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[var(--color-prestige-text)] font-serif text-xl mb-8">Newsletter</h4>
          <p className="text-[var(--color-prestige-text-muted)] font-light leading-relaxed mb-6 text-sm">
            Abonnieren Sie unseren Newsletter für exklusive Angebote und Neuigkeiten.
          </p>
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Ihre E-Mail Adresse" 
              className="bg-transparent border-b border-[var(--color-prestige-border)] py-3 text-sm text-[var(--color-prestige-text)] focus:outline-none focus:border-[var(--color-prestige-accent)] transition-colors placeholder:text-gray-400"
            />
            <button 
              type="submit" 
              className="text-left text-sm uppercase tracking-widest text-[var(--color-prestige-accent)] hover:text-[var(--color-prestige-text)] transition-colors font-medium mt-2"
            >
              Abonnieren
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[var(--color-prestige-border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--color-prestige-text-muted)] text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Prestige Motors. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[var(--color-prestige-text-muted)] hover:text-[var(--color-prestige-accent)] transition-colors text-xs uppercase tracking-widest">Impressum</a>
          <a href="#" className="text-[var(--color-prestige-text-muted)] hover:text-[var(--color-prestige-accent)] transition-colors text-xs uppercase tracking-widest">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
