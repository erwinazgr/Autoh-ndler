import React from 'react';
import { motion } from 'motion/react';

export default function StorySection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-brand-bg)] relative overflow-hidden" id="philosophie">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[var(--color-brand-cta)]" />
            <span className="font-body text-[var(--color-brand-cta)] uppercase tracking-[0.2em] text-xs font-bold">
              Unsere Philosophie
            </span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-[var(--color-brand-text)]">
            Mehr als nur <br />
            <span className="font-accent italic font-light text-[var(--color-brand-cta)]">Automobile.</span>
          </h2>
          
          <p className="font-body text-[var(--color-brand-text-muted)] font-light leading-relaxed mb-8 text-lg">
            Bei Prestige Motors verstehen wir, dass ein Fahrzeug mehr ist als ein Fortbewegungsmittel. 
            Es ist Ausdruck von Persönlichkeit, ein Kunstwerk der Ingenieurskunst und die Erfüllung 
            eines Traums.
          </p>
          
          <p className="font-body text-[var(--color-brand-text-muted)] font-light leading-relaxed mb-12 text-lg">
            Seit über zwei Jahrzehnten kuratieren wir die exklusivsten Sport- und Luxuswagen 
            der Welt. Jedes Fahrzeug in unserer Kollektion wird mit größter Sorgfalt geprüft 
            und ausgewählt, um höchsten Ansprüchen gerecht zu werden.
          </p>

          <button className="group flex items-center gap-4 text-sm uppercase tracking-widest font-bold text-[var(--color-brand-text)] hover:text-[var(--color-brand-cta)] transition-colors duration-300">
            <span>Mehr erfahren</span>
            <div className="w-12 h-[1px] bg-[var(--color-brand-text)] group-hover:bg-[var(--color-brand-cta)] transition-colors duration-300" />
          </button>
        </motion.div>

        <div className="order-1 lg:order-2 relative h-[600px] w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 right-0 w-3/4 h-4/5 overflow-hidden hover-lift"
          >
            <img 
              src="https://images.unsplash.com/photo-1503376713251-850f22167055?q=80&w=2000&auto=format&fit=crop" 
              alt="Porsche Detail" 
              className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="absolute bottom-0 left-0 w-3/5 h-3/5 overflow-hidden border-8 border-[var(--color-brand-bg)] hover-lift"
          >
            <img 
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop" 
              alt="Aston Martin Detail" 
              className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
