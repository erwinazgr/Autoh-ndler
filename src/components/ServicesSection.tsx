import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, Truck, CreditCard } from 'lucide-react';

const services = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Maßgeschneiderte Finanzierung',
    description: 'Individuelle Leasing- und Finanzierungsmodelle, die perfekt auf Ihre Bedürfnisse abgestimmt sind.'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Premium Wartung',
    description: 'Unser zertifiziertes Werkstatt-Team garantiert den Werterhalt und die optimale Performance Ihres Fahrzeugs.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Weltweiter Transport',
    description: 'Sichere und diskrete Lieferung Ihres neuen Fahrzeugs an jeden gewünschten Ort weltweit im geschlossenen Transporter.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Garantie & Sicherheit',
    description: 'Umfassende Garantiepakete und detaillierte Fahrzeughistorien für Ihre absolute Sorgenfreiheit.'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[var(--color-prestige-bg)] relative" id="service">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[var(--color-prestige-accent)]" />
            <span className="text-[var(--color-prestige-accent)] uppercase tracking-[0.2em] text-xs font-semibold">
              Exzellenz in jedem Detail
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-prestige-accent)]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-prestige-text)]">
            Unser <span className="italic text-[var(--color-prestige-accent)]">Service</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border border-[var(--color-prestige-border)] flex items-center justify-center mb-6 text-[var(--color-prestige-accent)] group-hover:bg-[var(--color-prestige-accent)] group-hover:text-white transition-all duration-300 shadow-sm bg-[var(--color-prestige-surface)]">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl mb-4 text-[var(--color-prestige-text)]">{service.title}</h3>
              <p className="text-[var(--color-prestige-text-muted)] font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
