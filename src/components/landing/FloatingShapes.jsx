import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating triangle with 3D effect */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          rotateY: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <div className="w-full h-full border-2 border-[#B91C4A]/30 transform rotate-12 shadow-2xl" 
             style={{ 
               clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
               boxShadow: '0 20px 60px rgba(185, 28, 74, 0.2)'
             }} />
        {/* 3D shadow layer */}
        <div className="absolute inset-0 w-full h-full border-2 border-[#B91C4A]/10 transform rotate-12 translate-x-2 translate-y-2 blur-sm" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </motion.div>

      {/* Glowing orb with depth */}
      <motion.div
        className="absolute top-40 left-10 w-20 h-20 md:w-32 md:h-32"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#DC6B2F]/20 to-[#B91C4A]/20 blur-2xl" />
        <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-[#B91C4A]/10 to-transparent blur-xl" 
             style={{ transform: 'translateZ(20px)' }} />
      </motion.div>

      {/* Geometric hexagon with 3D layers */}
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 md:w-36 md:h-36"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
          rotateX: [0, 20, 0],
          rotateY: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full border-2 border-[#DC6B2F]/40 rotate-45 rounded-lg shadow-lg" 
             style={{ boxShadow: '0 10px 40px rgba(220, 107, 47, 0.3)' }} />
        <div className="absolute inset-0 w-full h-full border border-[#DC6B2F]/20 rotate-45 rounded-lg translate-x-1 translate-y-1 blur-sm" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#DC6B2F]/5 to-transparent rotate-45 rounded-lg" 
             style={{ transform: 'translateZ(10px) rotate(45deg)' }} />
      </motion.div>

      {/* Small floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#B91C4A]/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* 3D Wire frame cube effect */}
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 md:w-24 md:h-24"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {/* Multiple cube faces for depth */}
        <div className="absolute inset-0 w-full h-full border-2 border-[#B91C4A]/20 transform rotate-45" 
             style={{ transform: 'translateZ(0px) rotate(45deg)' }} />
        <div className="absolute inset-0 w-full h-full border border-[#B91C4A]/15 transform rotate-45" 
             style={{ transform: 'translateZ(10px) rotate(45deg)' }} />
        <div className="absolute inset-0 w-full h-full border border-[#B91C4A]/10 transform rotate-45" 
             style={{ transform: 'translateZ(20px) rotate(45deg)' }} />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#B91C4A]/5 to-transparent" 
             style={{ transform: 'translateZ(-10px)' }} />
      </motion.div>
    </div>
  );
}