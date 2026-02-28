import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { cars, Car } from '../data';

export default function CarGallery() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <section className="py-24 bg-[var(--color-prestige-surface)] relative border-y border-[var(--color-prestige-border)]" id="kollektion">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 text-[var(--color-prestige-text)]">
              Unsere <span className="italic text-[var(--color-prestige-accent)]">Kollektion</span>
            </h2>
            <p className="text-[var(--color-prestige-text-muted)] font-light max-w-xl">
              Entdecken Sie unsere handverlesene Auswahl an exklusiven Fahrzeugen. 
              Jedes Modell repräsentiert die Spitze automobiler Ingenieurskunst.
            </p>
          </div>
          <button className="mt-8 md:mt-0 text-sm uppercase tracking-widest border-b border-[var(--color-prestige-border)] pb-1 text-[var(--color-prestige-text)] hover:border-[var(--color-prestige-accent)] hover:text-[var(--color-prestige-accent)] transition-colors">
            Alle ansehen
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer relative overflow-hidden rounded-sm bg-[var(--color-prestige-bg)] shadow-sm hover:shadow-xl transition-shadow duration-500"
              onClick={() => setSelectedCar(car)}
            >
              <div className="aspect-[16/10] zoom-container">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover zoom-image opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <p className="text-[var(--color-prestige-accent)] text-xs uppercase tracking-[0.2em] font-semibold mb-2 drop-shadow-md">
                    {car.brand}
                  </p>
                  <h3 className="font-serif text-3xl font-light text-white drop-shadow-md">
                    {car.model}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[var(--color-prestige-surface)] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col lg:flex-row shadow-2xl border border-[var(--color-prestige-border)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--color-prestige-border)] flex items-center justify-center text-[var(--color-prestige-text)] hover:bg-[var(--color-prestige-accent)] hover:text-white hover:border-[var(--color-prestige-accent)] transition-all shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div className="w-full lg:w-3/5 h-[40vh] lg:h-auto relative zoom-container">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.model}
                  className="w-full h-full object-cover zoom-image"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-prestige-surface)] to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-prestige-surface)] hidden lg:block" />
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-[var(--color-prestige-surface)]">
                <p className="text-[var(--color-prestige-accent)] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  {selectedCar.brand}
                </p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6 text-[var(--color-prestige-text)]">
                  {selectedCar.model}
                </h2>
                
                <p className="text-[var(--color-prestige-text-muted)] font-light leading-relaxed mb-10 text-sm lg:text-base">
                  {selectedCar.description}
                </p>

                <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
                  <div>
                    <p className="text-xs text-[var(--color-prestige-text-muted)] uppercase tracking-widest mb-1">Leistung</p>
                    <p className="font-mono text-lg text-[var(--color-prestige-text)]">{selectedCar.specs.power}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-prestige-text-muted)] uppercase tracking-widest mb-1">0-100 km/h</p>
                    <p className="font-mono text-lg text-[var(--color-prestige-text)]">{selectedCar.specs.acceleration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-prestige-text-muted)] uppercase tracking-widest mb-1">Motor</p>
                    <p className="font-mono text-lg text-[var(--color-prestige-text)]">{selectedCar.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-prestige-text-muted)] uppercase tracking-widest mb-1">Preis</p>
                    <p className="font-mono text-lg text-[var(--color-prestige-accent)]">{selectedCar.price}</p>
                  </div>
                </div>

                <button className="w-full py-4 border border-[var(--color-prestige-accent)] text-[var(--color-prestige-accent)] hover:bg-[var(--color-prestige-accent)] hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
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
