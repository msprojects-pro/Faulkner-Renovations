import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ShieldAlert, Sparkles, Award, Hammer, Clock } from 'lucide-react';

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Stunning Photo Grid & Stat Badges */}
          <div className="col-span-1 lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative z-10">
                <img
                  src="/images/acoustic_panelling_1783101329119.jpg"
                  alt="High quality wood slat panelling and renovation work by Faulkner Renovations"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              </div>

              {/* Decorative background shape */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-brand-blue/5 rounded-2xl z-0 border border-brand-blue/10" />

              {/* Floating Stat Widget */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute -bottom-6 -right-6 md:right-4 z-20 bg-brand-navy text-white p-6 rounded-2xl shadow-xl max-w-xs border border-white/10"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <h4 className="text-base font-bold font-display">100% Satisfaction</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Our pride is the quality of our finishes. We do not leave a job until it is absolutely flawless.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Professional Brand Copy */}
          <div className="col-span-1 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Small Tagline */}
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Uncompromising Quality
              </span>
              
              {/* Section Header */}
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mt-2 mb-6">
                Exceptional Craftsmanship, Built to Last.
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Based in Rotherham, <strong className="text-brand-navy">Faulkner Renovations</strong> is built upon a reputation for premium materials, punctual service, and unmatched woodworking artistry. We specialize in making your property improvements seamless, dealing with your home as if it were our own.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                We manage the entire project pipeline. From initial bespoke joinery drawings to insulation, building control requirements, and coordinated electrical work, you have one trusted point of contact from concept to handover.
              </p>

              {/* Core Pillars List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3">
                  <div className="p-2 h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy font-display">Elite Standards</h4>
                    <p className="text-xs text-gray-500 mt-0.5">High-end materials, precise tolerances, and perfect mitres.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy font-display">Bespoke Design</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Made-to-measure sizes to fit standard or awkward rooms.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy font-display">Full Coordination</h4>
                    <p className="text-xs text-gray-500 mt-0.5">We arrange building checks, plastering, wiring, and paint.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy font-display font-display">Punctual & Clean</h4>
                    <p className="text-xs text-gray-500 mt-0.5">We show up on time, treat your home with care, and tidy daily.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-brand-blue text-white hover:bg-brand-blue-dark font-bold px-6 py-3 rounded-lg text-sm text-center shadow-md shadow-brand-blue/10 transition-colors duration-200"
                >
                  Book a Consult
                </button>
                <a
                  href="tel:+447488234409"
                  className="border border-gray-300 hover:border-brand-blue hover:text-brand-blue text-brand-navy font-semibold px-6 py-3 rounded-lg text-sm text-center transition-colors duration-200"
                >
                  Speak Directly
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
