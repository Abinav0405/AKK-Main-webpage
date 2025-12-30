import { motion } from 'framer-motion';

const MaterialTrackerSymbol = () => {
  return (
    <div className="relative p-6">
      {/* 3D Shadow/Depth effect */}
      <div className="absolute inset-0 bg-akk-orange/10 rounded-2xl blur-xl transform translate-x-2 translate-y-2"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-akk-orange/20 to-transparent rounded-2xl"></div>

      {/* Main container with padding and 3D effect */}
      <motion.div
        className="relative bg-gradient-to-br from-white to-akk-gray-light rounded-2xl p-4 shadow-2xl border border-akk-orange/20"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          boxShadow: '0 25px 50px -12px rgba(255, 107, 53, 0.25), 0 0 0 1px rgba(255, 107, 53, 0.1)',
        }}
      >
        <motion.svg
          width="160"
          height="160"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        >
      {/* Central hexagon */}
      <motion.polygon
        points="100,40 140,60 140,100 100,120 60,100 60,60"
        stroke="url(#hexGradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Flow arrows */}
      <motion.path
        d="M80,50 L100,30 L120,50"
        stroke="url(#arrowGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path
        d="M120,90 L140,70 L160,90"
        stroke="url(#arrowGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
      <motion.path
        d="M80,110 L60,130 L40,110"
        stroke="url(#arrowGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />

      {/* Inventory blocks */}
      <motion.rect
        x="85"
        y="75"
        width="10"
        height="10"
        fill="url(#blockGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.rect
        x="100"
        y="75"
        width="10"
        height="10"
        fill="url(#blockGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <motion.rect
        x="115"
        y="75"
        width="10"
        height="10"
        fill="url(#blockGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      />

          {/* Gradients */}
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#F7931E" />
            </linearGradient>
            <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="100%" stopColor="#F7931E" />
            </linearGradient>
          </defs>

          {/* Additional decorative elements */}
          {/* Circuit-like connections */}
          <motion.path
            d="M70,85 L85,75 M115,75 L130,85 M85,95 L70,105 M130,105 L115,95"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          />

          {/* Data flow particles */}
          <motion.circle
            cx="75"
            cy="90"
            r="2"
            fill="url(#particleGradient)"
            animate={{
              cx: [75, 125, 125, 75],
              cy: [90, 90, 110, 110]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          {/* Gear elements */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="50" cy="50" r="8" stroke="url(#gearGradient)" strokeWidth="1" fill="none" />
            {[...Array(8)].map((_, i) => (
              <rect
                key={i}
                x="49"
                y="42"
                width="2"
                height="4"
                fill="url(#gearGradient)"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </motion.g>

          {/* Subtle rotation animation */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {/* Invisible circle for rotation center */}
            <circle cx="100" cy="80" r="1" fill="none" />
          </motion.g>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default MaterialTrackerSymbol;
