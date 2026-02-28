import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { cars, Car } from '../data';

export default function CarGallery() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <section className="py-32 bg-[var(--color-brand-bg)] relative" id="kollektion">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-[var(--color-brand-text)]">
              Unsere <span className="font-accent italic font-light text-[var(--color-brand-cta)]">Kollektion</span>
            </h2>
            <p className="font-body text-[var(--color-brand-text-muted)] font-light max-w-xl text-lg">
              Entdecken Sie unsere handverlesene Auswahl an exklusiven Fahrzeugen. 
              Jedes Modell repräsentiert die Spitze automobiler Ingenieurskunst.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-8 md:mt-0 font-body text-sm uppercase tracking-widest border-b-2 border-[var(--color-brand-cta)] pb-1 text-[var(--color-brand-text)] hover:text-[var(--color-brand-cta)] transition-colors font-bold"
          >
            Alle ansehen
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + (idx * 0.1) }}
              className="group cursor-pointer relative bg-[var(--color-brand-surface)] hover-lift"
              onClick={() => setSelectedCar(car)}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover brightness-75 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-8 flex justify-between items-end bg-[var(--color-brand-surface)] border border-t-0 border-[var(--color-brand-accent)]/20">
                <div>
                  <p className="font-body text-[var(--color-brand-cta)] text-xs uppercase tracking-[0.2em] font-bold mb-3">
                    {car.brand}
                  </p>
                  <h3 className="font-heading text-3xl font-bold text-[var(--color-brand-text)]">
                    {car.model}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[var(--color-brand-accent)]/50 flex items-center justify-center group-hover:bg-[var(--color-brand-cta)] group-hover:border-[var(--color-brand-cta)] group-hover:text-[var(--color-brand-bg)] transition-all duration-300 text-[var(--color-brand-text)]">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="bg-[var(--color-brand-surface)] w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row shadow-2xl border border-[var(--color-brand-accent)]/20"
            >
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-text)] hover:bg-[var(--color-brand-cta)] hover:text-[var(--color-brand-bg)] transition-all shadow-lg hover-lift border border-[var(--color-brand-accent)]/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full lg:w-3/5 h-[40vh] lg:h-auto relative overflow-hidden">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.model}
                  className="w-full h-full object-cover brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-[var(--color-brand-surface)]">
                <p className="font-body text-[var(--color-brand-cta)] text-xs uppercase tracking-[0.2em] font-bold mb-4">
                  {selectedCar.brand}
                </p>
                <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-8 text-[var(--color-brand-text)]">
                  {selectedCar.model}
                </h2>
                
                <p className="font-body text-[var(--color-brand-text-muted)] font-light leading-relaxed mb-12 text-base">
                  {selectedCar.description}
                </p>

                <div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-14 border-t border-b border-[var(--color-brand-accent)]/20 py-8">
                  <div>
                    <p className="font-body text-xs text-[var(--color-brand-text-muted)] uppercase tracking-widest mb-2 font-bold">Leistung</p>
                    <p className="font-heading text-xl text-[var(--color-brand-text)] font-bold">{selectedCar.specs.power}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[var(--color-brand-text-muted)] uppercase tracking-widest mb-2 font-bold">0-100 km/h</p>
                    <p className="font-heading text-xl text-[var(--color-brand-text)] font-bold">{selectedCar.specs.acceleration}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[var(--color-brand-text-muted)] uppercase tracking-widest mb-2 font-bold">Motor</p>
                    <p className="font-heading text-xl text-[var(--color-brand-text)] font-bold">{selectedCar.specs.engine}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[var(--color-brand-text-muted)] uppercase tracking-widest mb-2 font-bold">Preis</p>
                    <p className="font-heading text-xl text-[var(--color-brand-cta)] font-bold">{selectedCar.price}</p>
                  </div>
                </div>

                <button className="w-full py-5 bg-[var(--color-brand-cta)] text-[var(--color-brand-bg)] hover:bg-white transition-colors uppercase tracking-widest text-sm font-bold ripple-btn">
                  Anfrage Senden
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
