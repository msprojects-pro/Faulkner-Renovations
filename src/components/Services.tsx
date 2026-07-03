import React from 'react';
import { motion } from 'motion/react';
import { Tv, DoorClosed, ChefHat, Layers, Warehouse, Maximize, ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES, Service } from '../data';

// Map of icon names to Lucide Icon components
const ICON_MAP = {
  Tv: Tv,
  DoorClosed: DoorClosed,
  ChefHat: ChefHat,
  Layers: Layers,
  Warehouse: Warehouse,
  Maximize: Maximize,
  // Fallbacks if ever needed
  Clapperboard: Tv,
  Wrench: Maximize,
};

interface ServicesProps {
  onOpenQuote: (serviceTitle: string) => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Our Specialist Skillset
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mt-2">
            Bespoke Renovation Services
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg font-light">
            We deliver handcrafted excellence across multiple property improvements, managing every single step from design and materials to final paint coat.
          </p>
        </div>

        {/* Services Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Maximize;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-brand-light border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300"
              >
                {/* Decorative hover background highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="h-12 w-12 rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/25 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-brand-navy tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                        <Check className="h-4 w-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer / Action button */}
                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="relative z-10 w-full flex items-center justify-center gap-2 rounded-xl bg-white text-brand-navy hover:bg-brand-blue hover:text-white border border-gray-200 hover:border-transparent py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-98"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Global Services Footer Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-brand-navy text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 relative overflow-hidden"
        >
          {/* Spotlight overlay background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[50px]" />
          
          <div className="relative z-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold">Have a Custom Project in Mind?</h3>
            <p className="text-gray-400 text-sm mt-1 max-w-xl font-light">
              Don’t worry if your exact request isn’t listed here. We specialize in custom woodwork, specific storage needs, and multi-room renovations. Speak with our lead joiner today.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Custom Joinery')}
            className="relative z-10 flex-shrink-0 bg-brand-blue text-white hover:bg-brand-blue-light font-bold text-sm px-6 py-3.5 rounded-lg shadow-lg shadow-brand-blue/25 transition-all duration-300"
          >
            Custom Project Inquiry
          </button>
        </motion.div>

      </div>
    </section>
  );
}
