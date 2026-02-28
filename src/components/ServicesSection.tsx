import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, Truck, CreditCard } from 'lucide-react';

const services = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Finanzierung',
    description: 'Individuelle Leasing- und Finanzierungsmodelle, die perfekt auf Ihre Bedürfnisse abgestimmt sind.'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Premium Wartung',
    description: 'Unser zertifiziertes Werkstatt-Team garantiert den Werterhalt und die optimale Performance.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Transport',
    description: 'Sichere und diskrete Lieferung Ihres neuen Fahrzeugs an jeden gewünschten Ort weltweit.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Garantie',
    description: 'Umfassende Garantiepakete und detaillierte Fahrzeughistorien für Ihre absolute Sorgenfreiheit.'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-[var(--color-brand-bg)] relative" id="service">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[var(--color-brand-cta)]" />
            <span className="font-body text-[var(--color-brand-cta)] uppercase tracking-[0.2em] text-xs font-bold">
              Exzellenz in jedem Detail
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-brand-cta)]" />
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--color-brand-text)]">
            Unser <span className="font-accent italic font-light text-[var(--color-brand-accent)]">Service</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + (idx * 0.1) }}
              className="flex flex-col items-center text-center group bg-white p-10 border-beam hover-lift shadow-sm"
            >
              <div className="w-20 h-20 rounded-full border border-[var(--color-brand-accent)]/20 flex items-center justify-center mb-8 text-[var(--color-brand-cta)] group-hover:bg-[var(--color-brand-cta)] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[var(--color-brand-text)]">{service.title}</h3>
              <p className="font-body text-[var(--color-brand-accent)] font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
