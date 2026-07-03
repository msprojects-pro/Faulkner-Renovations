import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white border-b border-gray-100 overflow-hidden relative">
      {/* Subtle decorative background blur spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-blue/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Customer Satisfaction
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mt-2">
            Trusted by Rotherham Homeowners
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base font-light">
            We let our premium, precise workmanship speak for itself. Here is what some of our real clients in South Yorkshire have to say about their experience with Faulkner Renovations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-brand-light p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-6 text-brand-blue/10 pointer-events-none">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div>
                {/* 5-Star Indicator */}
                <div className="flex items-center gap-1 text-yellow-500 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-200/60 mt-auto flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {t.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                    {t.project}
                  </span>
                  <p className="text-[9px] text-gray-400 mt-1">
                    {t.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google / Local review confidence widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left bg-gray-50 border border-gray-200/80 p-5 rounded-2xl max-w-xl mx-auto"
        >
          <div className="p-2.5 rounded-full bg-green-50 text-green-600">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-brand-navy">All Reviews Are 100% Verified Local Homeowners</h4>
            <p className="text-xs text-gray-500 mt-0.5">
              We stand by our work. Complete contact details of references from Moorgate, Wickersley or Bramley can be supplied upon project consult.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
