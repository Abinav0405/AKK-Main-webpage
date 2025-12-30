import { motion } from 'framer-motion';

const TimesheetManagerSymbol = () => {
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
      {/* Outer ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="70"
        stroke="url(#ringGradient)"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Tick marks */}
      {[...Array(12)].map((_, i) => (
        <motion.line
          key={i}
          x1="100"
          y1="35"
          x2="100"
          y2="45"
          stroke="url(#tickGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}

      {/* Inner rotating arc */}
      <motion.path
        d="M100,45 A55,55 0 0,1 155,100"
        stroke="url(#arcGradient)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Workforce nodes */}
      <motion.circle
        cx="130"
        cy="70"
        r="4"
        fill="url(#nodeGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.circle
        cx="145"
        cy="100"
        r="4"
        fill="url(#nodeGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      />
      <motion.circle
        cx="130"
        cy="130"
        r="4"
        fill="url(#nodeGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      />

      {/* Center dot */}
      <motion.circle
        cx="100"
        cy="100"
        r="3"
        fill="url(#centerGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      />

          {/* Gradients */}
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="satelliteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="100%" stopColor="#F7931E" />
            </linearGradient>
            <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7931E" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Additional decorative elements */}
          {/* Digital pulses around the clock */}
          <motion.circle
            cx="100"
            cy="30"
            r="2"
            fill="url(#pulseGradient)"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="170"
            cy="100"
            r="2"
            fill="url(#pulseGradient)"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="100"
            cy="170"
            r="2"
            fill="url(#pulseGradient)"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="30"
            cy="100"
            r="2"
            fill="url(#pulseGradient)"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          {/* Orbiting satellites */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="165" cy="100" r="3" fill="url(#satelliteGradient)" />
          </motion.g>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="35" cy="100" r="2" fill="url(#satelliteGradient)" />
          </motion.g>

          {/* Data streams */}
          <motion.path
            d="M70,70 Q100,50 130,70"
            stroke="url(#streamGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
          <motion.path
            d="M70,130 Q100,150 130,130"
            stroke="url(#streamGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
          />

          {/* Clock hand rotation */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="65"
              stroke="url(#handGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default TimesheetManagerSymbol;
