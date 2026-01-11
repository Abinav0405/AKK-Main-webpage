import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ logo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="AKK Engineering" 
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <p className={`font-bold text-lg ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                  AKK Engineering
                </p>
                <p className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-gray-600'}`}>
                  Pte. Ltd.
                </p>
              </div>
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-[#B91C4A] ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://akk.com.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Main Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-[#B91C4A] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://akk.com.sg"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] text-white rounded-full font-semibold"
              >
                Visit Main Site
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}