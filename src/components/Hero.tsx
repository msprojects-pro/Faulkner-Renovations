import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Star, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  // Container variant for staggering children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-20">
      {/* Dynamic Overlay Image with Referrer Policy */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_media_wall_1783101277176.jpg"
          alt="Premium Living Room Renovation and Bespoke Media Wall by Faulkner Renovations"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 scale-105 animate-subtle-zoom"
        />
        {/* Navy/Blue Gradient Overlays for maximum readability and visual punch */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/70 to-transparent lg:block hidden" />
        {/* Soft Royal Blue circular spotlight overlay in the corner */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-blue/15 blur-[120px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Subheader / Trust tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-white mb-6"
          >
            <Sparkles className="h-4 w-4 text-brand-blue-light animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-white/90">
              Rotherham’s Premium Renovation Specialists
            </span>
          </motion.div>

          {/* Master Display Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            Expert Home Renovations & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light to-blue-400">
              Property Improvements
            </span>
          </motion.h1>

          {/* Value Pitch Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl font-light"
          >
            Transform your living space with bespoke joinery, contemporary media walls, tailored custom wardrobes, and high-end refurbishments. Handcrafted in Rotherham with meticulous attention to detail.
          </motion.p>

          {/* Responsive Primary Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            {/* Get a Free Quote */}
            <button
              onClick={() => onOpenQuote()}
              className="group flex items-center justify-center gap-2 bg-brand-blue text-white hover:bg-brand-blue-light font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/30 transition-all duration-300 active:scale-98"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Call Now Button */}
            <a
              href="tel:+447488234409"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-98"
            >
              <Phone className="h-5 w-5 text-brand-blue-light" />
              <span>Call +44 7488 234409</span>
            </a>
          </motion.div>

          {/* Hero Trust Badges Footer Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light mt-0.5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Fully Insured</h4>
                <p className="text-gray-400 text-xs mt-0.5">Comprehensive local coverage & guarantees</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Rotherham Based</h4>
                <p className="text-gray-400 text-xs mt-0.5">Serving S60-S66 & South Yorkshire</p>
              </div>
            </div>

            <div className="flex items-start gap-3 col-span-2 md:col-span-1">
              <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light mt-0.5">
                <Star className="h-5 w-5 fill-brand-blue-light" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">5-Star Quality</h4>
                <p className="text-gray-400 text-xs mt-0.5">Voted for precise bespoke craftsmanship</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Bottom Wave/Curvature Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-brand-light" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
    </section>
  );
}
