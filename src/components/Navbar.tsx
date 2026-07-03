import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Circular Logo */}
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center">
              <Logo light={true} size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-white/85 hover:text-white font-medium text-sm transition-colors duration-200 relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Call To Action Buttons */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Trust Badge */}
              <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <ShieldCheck className="h-4 w-4 text-brand-blue-light" />
                <span>Fully Insured & Local</span>
              </div>

              {/* Direct Phone */}
              <a
                href="tel:+447488234409"
                className="flex items-center gap-2 text-white hover:text-brand-blue-light transition-colors duration-200 text-sm font-semibold"
              >
                <div className="p-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                  <Phone className="h-4 w-4 text-brand-blue-light" />
                </div>
                <span>+44 7488 234409</span>
              </a>

              {/* Free Quote Button */}
              <button
                onClick={() => onOpenQuote()}
                className="bg-brand-blue text-white hover:bg-brand-blue-dark font-semibold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-brand-blue/20 transition-all duration-300 active:scale-95"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:+447488234409"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Call Now"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-brand-navy-dark border-b border-white/10 shadow-xl lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-white/95 hover:bg-white/5 hover:text-white transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-4 px-4">
                <a
                  href="tel:+447488234409"
                  className="flex items-center gap-3 text-white hover:text-brand-blue-light transition-colors duration-200 text-base font-semibold"
                >
                  <Phone className="h-5 w-5 text-brand-blue" />
                  <span>+44 7488 234409</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-brand-blue text-white hover:bg-brand-blue-dark font-semibold text-center py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
