import React from 'react';
import { Phone, Mail, MapPin, Hammer, Shield, Clock } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-white/5 pt-16 pb-8 overflow-hidden relative">
      {/* Soft blue glowing ambient backing */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Pitch & Logo */}
          <div className="lg:col-span-4 space-y-5">
            <Logo light={true} size="lg" />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Expert Home Renovations & Property Improvements. We are committed to rendering outstanding, precise joinery and building finishes for your living space. Handcrafted locally in Rotherham, UK.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                <Shield className="h-3.5 w-3.5 text-brand-blue-light" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                <Hammer className="h-3.5 w-3.5 text-brand-blue-light" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-brand-blue-light">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-brand-blue-light">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-xs sm:text-sm">
              <li>Media Walls & Feature Walls</li>
              <li>Custom Built Wardrobes</li>
              <li>Kitchen Refurbishments</li>
              <li>Acoustic & Traditional Panelling</li>
              <li>Garage Conversions</li>
              <li>Made to Measure Storage</li>
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-brand-blue-light">
              Contact Details
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+447488234409"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Phone className="h-4.5 w-4.5 text-brand-blue-light flex-shrink-0" />
                  <span>+44 7488 234409</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiriesfaulkreno@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-xs sm:text-sm min-w-0"
                >
                  <Mail className="h-4.5 w-4.5 text-brand-blue-light flex-shrink-0" />
                  <span className="truncate">enquiriesfaulkreno@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm">
                <MapPin className="h-4.5 w-4.5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span>Rotherham, United Kingdom</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-xs">
                <Clock className="h-4.5 w-4.5 text-brand-blue-light flex-shrink-0" />
                <span>Mon - Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Faulkner Renovations. All rights reserved. Registered in South Yorkshire, UK.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenQuote} className="hover:text-white transition-colors">
              Request A Quote
            </button>
            <span className="text-gray-700">|</span>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-white transition-colors">
              Book Appointment
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
