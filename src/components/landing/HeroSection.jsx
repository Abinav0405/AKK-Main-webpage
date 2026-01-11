import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

export default function HeroSection({ logo }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <FloatingShapes />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#B91C4A]/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#DC6B2F]/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateY: 0,
          }}
          transition={{ duration: 0.8 }}
          className="mb-8 float-animation"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="AKK Engineering Logo" 
              className="w-32 h-32 md:w-44 md:h-44 mx-auto object-contain drop-shadow-2xl relative z-10"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(185, 28, 74, 0.3))' }}
            />
            {/* 3D shadow layers */}
            <div className="absolute inset-0 w-32 h-32 md:w-44 md:h-44 mx-auto opacity-30 blur-xl bg-gradient-radial from-[#B91C4A]/40 to-transparent"
                 style={{ transform: 'translateZ(-20px)' }} />
          </div>
        </motion.div>

        {/* Company Name with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span className="bg-gradient-to-r from-[#B91C4A] via-[#DC6B2F] to-[#B91C4A] bg-clip-text text-transparent text-shimmer inline-block"
                style={{ textShadow: '0 10px 30px rgba(185, 28, 74, 0.2)' }}>
            AKK ENGINEERING
          </span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600">
            PTE. LTD.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 font-light"
        >
          Engineering the Future with Innovation & Excellence
        </motion.p>

        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B91C4A]/10 text-[#B91C4A] text-sm font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#B91C4A] animate-pulse" />
          ENGINEERING EXCELLENCE SINCE 2019
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="group px-8 py-4 bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-[#B91C4A] text-[#B91C4A] rounded-full font-semibold text-lg hover:bg-[#B91C4A] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#B91C4A]/50" />
        </motion.div>
      </div>
    </section>
  );
}