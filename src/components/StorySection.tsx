import React from 'react';
import { motion } from 'motion/react';

export default function StorySection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-prestige-bg)] relative overflow-hidden" id="philosophie">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[var(--color-prestige-accent)]" />
            <span className="text-[var(--color-prestige-accent)] uppercase tracking-[0.2em] text-xs font-semibold">
              Unsere Philosophie
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-[var(--color-prestige-text)]">
            Mehr als nur <br />
            <span className="italic text-[var(--color-prestige-text-muted)]">Automobile.</span>
          </h2>
          
          <p className="text-[var(--color-prestige-text-muted)] font-light leading-relaxed mb-8 text-lg">
            Bei Prestige Motors verstehen wir, dass ein Fahrzeug mehr ist als ein Fortbewegungsmittel. 
            Es ist Ausdruck von Persönlichkeit, ein Kunstwerk der Ingenieurskunst und die Erfüllung 
            eines Traums.
          </p>
          
          <p className="text-[var(--color-prestige-text-muted)] font-light leading-relaxed mb-12 text-lg">
            Seit über zwei Jahrzehnten kuratieren wir die exklusivsten Sport- und Luxuswagen 
            der Welt. Jedes Fahrzeug in unserer Kollektion wird mit größter Sorgfalt geprüft 
            und ausgewählt, um höchsten Ansprüchen gerecht zu werden.
          </p>

          <button className="group flex items-center gap-4 text-sm uppercase tracking-widest font-medium text-[var(--color-prestige-text)] hover:text-[var(--color-prestige-accent)] transition-colors">
            <span>Mehr erfahren</span>
            <div className="w-8 h-[1px] bg-[var(--color-prestige-text)] group-hover:bg-[var(--color-prestige-accent)] transition-colors" />
          </button>
        </motion.div>

        {/* Image Grid */}
        <div className="order-1 lg:order-2 relative h-[600px] w-full">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 right-0 w-3/4 h-4/5 rounded-sm overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1503376713251-850f22167055?q=80&w=2000&auto=format&fit=crop" 
              alt="Porsche Detail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-sm overflow-hidden border-8 border-[var(--color-prestige-bg)] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2000&auto=format&fit=crop" 
              alt="Aston Martin Detail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
