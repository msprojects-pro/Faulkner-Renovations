import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService = '' }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setService(initialService);
      setIsSubmitted(false);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      console.log('--- FREE QUOTE REQUEST SUBMITTED ---', {
        name,
        email,
        phone,
        service,
        message,
        timestamp: new Date().toISOString()
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060517]/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            id="quote-modal-container"
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100"
          >
            {/* Header Accent Line */}
            <div className="h-1.5 w-full bg-brand-blue" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute right-4 top-5 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-brand-navy transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue">
                      <Sparkles className="h-3.5 w-3.5" /> No-Obligation Consultation
                    </span>
                    <h3 className="font-display text-2xl font-bold text-brand-navy mt-2">
                      Request Your Free Quote
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Fill out the form below. Our renovation expert will review your details and contact you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/50"
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
                          className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/50"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other Property Improvement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                        Project Details (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please describe what you'd like renovated (e.g. dimensions, preferences, timeline)..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 bg-gray-50/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative flex items-center justify-center gap-2 rounded-lg bg-brand-blue py-3 font-semibold text-white transition-all duration-300 hover:bg-brand-blue-dark active:scale-[0.98] disabled:opacity-70 mt-2"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <span>Submit Quote Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Phone className="h-3.5 w-3.5 text-brand-blue" />
                    <span>Prefer direct contact? Call us on <a href="tel:+447488234409" className="font-bold hover:underline text-brand-navy">+44 7488 234409</a></span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="mb-4 rounded-full bg-green-50 p-3 text-green-600"
                  >
                    <CheckCircle2 className="h-16 w-16" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy">
                    Request Received!
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-xs text-sm">
                    Thank you, <span className="font-semibold text-brand-navy">{name}</span>. We have logged your request. Our renovation specialist will phone you shortly.
                  </p>
                  
                  <div className="mt-6 w-full rounded-xl bg-gray-50 p-4 text-left text-xs border border-gray-100">
                    <p className="font-bold text-brand-navy uppercase tracking-wider mb-2">Logged details:</p>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-medium text-brand-navy">Phone:</span> {phone}</p>
                      <p><span className="font-medium text-brand-navy">Service:</span> {service || 'General Inquiry'}</p>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="mt-8 rounded-lg bg-brand-navy px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-brand-navy-light active:scale-[0.98]"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
