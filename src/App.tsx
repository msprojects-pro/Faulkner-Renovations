import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Star, ShieldCheck, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show scroll-to-top button
  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const openQuoteWithService = (service: string = '') => {
    setPrefilledService(service);
    setIsQuoteOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-blue selection:text-white bg-brand-light">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenQuote={openQuoteWithService} />

      {/* Main Content Layout */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenQuote={openQuoteWithService} />

        {/* 3. About Us Section */}
        <About onOpenQuote={() => openQuoteWithService()} />

        {/* 4. Services Section Grid */}
        <Services onOpenQuote={openQuoteWithService} />

        {/* 5. Completed Work Showcase Gallery (including Lightbox) */}
        <Gallery />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Contact Us Form & Location Map Section */}
        <Contact />
      </main>

      {/* 8. Premium Footer */}
      <Footer onOpenQuote={() => openQuoteWithService()} />

      {/* 9. Floating Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={prefilledService}
      />

      {/* 10. Floating "Call Now" Quick Action for Mobile viewports with brand royal blue theme */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="fixed bottom-6 right-6 z-30 lg:hidden flex flex-col gap-3"
        >
          <a
            href="tel:+447488234409"
            id="mobile-floating-call-btn"
            className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-4 py-3.5 rounded-full shadow-2xl active:scale-95 transition-all duration-300 border border-white/10"
          >
            <Phone className="h-5 w-5 animate-bounce" />
            <span className="text-xs uppercase tracking-widest font-bold font-display">Call Now</span>
          </a>
        </motion.div>
      </AnimatePresence>

      {/* 11. Scroll-To-Top Button (Desktop) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={handleScrollToTop}
            id="scroll-to-top-btn"
            className="hidden lg:flex fixed bottom-8 left-8 z-30 h-11 w-11 items-center justify-center rounded-full bg-brand-navy border border-white/10 hover:bg-brand-blue text-white shadow-xl transition-all duration-300 active:scale-95"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
