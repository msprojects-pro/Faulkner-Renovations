import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, CalendarDays } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Renovation');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      console.log('--- CONTACT MESSAGE SUBMITTED ---', {
        name,
        email,
        phone,
        service,
        message,
        timestamp: new Date().toISOString()
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> Direct Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mt-2">
            Let's Discuss Your Project
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base font-light">
            Ready to remodel your property? Write us a message or phone us directly. We provide completely free, fully detailed itemized proposals with zero pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-brand-navy tracking-tight">
                Our Office & Area
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are based in Rotherham, UK, and offer custom joinery and complete renovation solutions throughout Rotherham and the wider South Yorkshire region.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4">
                {/* Phone Card */}
                <a
                  href="tel:+447488234409"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm transition-all duration-300 hover:shadow-md group"
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone Anytime</p>
                    <p className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">+44 7488 234409</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:enquiriesfaulkreno@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm transition-all duration-300 hover:shadow-md group"
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Inquiry</p>
                    <p className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors truncate">enquiriesfaulkreno@gmail.com</p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Based In</p>
                    <p className="text-sm font-bold text-brand-navy">Rotherham, United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Banner */}
              <div className="flex items-center gap-3 p-4 bg-brand-navy text-white rounded-xl border border-white/5 shadow-sm">
                <Clock className="h-5 w-5 text-brand-blue-light flex-shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white/90">Business Hours</p>
                  <p className="text-gray-400 mt-0.5">Mon - Sat: 08:00 - 18:00 | Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <h4 className="font-display text-xl font-bold text-brand-navy">
                        Send An Electronic Message
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Use this form to submit standard inquiries or ask specific carpentry questions.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/40"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +44 7488 234409"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/40"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="smith@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/40"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                            Primary Subject
                          </label>
                          <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/40"
                          >
                            <option value="General Renovation">General Renovation</option>
                            <option value="Media Wall Installation">Media Wall Installation</option>
                            <option value="Bespoke Wardrobes">Bespoke Fitted Wardrobes</option>
                            <option value="Kitchen Refurbishment">Kitchen Refurbishment</option>
                            <option value="Wall Panelling">Wall Panelling (Acoustic/Slat)</option>
                            <option value="Garage Conversion">Garage Conversion</option>
                            <option value="Custom Storage Unit">Custom Storage Unit</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                          How can we help you? *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us about your home and what improvements you are looking to carry out..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/40 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative flex items-center justify-center gap-2 rounded-lg bg-brand-navy py-3.5 font-bold text-white transition-all duration-300 hover:bg-brand-navy-light active:scale-[0.98] disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="mb-5 rounded-full bg-green-50 p-3 text-green-600">
                      <CheckCircle2 className="h-16 w-16" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-navy">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-500 mt-2 max-w-sm text-sm leading-relaxed">
                      Thank you for contacting Faulkner Renovations. Your request is registered. We will call you on the phone number provided shortly!
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 border border-gray-300 hover:border-brand-navy text-brand-navy text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
