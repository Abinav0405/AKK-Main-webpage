import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Error boundary wrapper
function withErrorBoundary(Component, fallbackName) {
  return function ErrorBoundedComponent(props) {
    const [hasError, setHasError] = useState(false)
    
    if (hasError) {
      return (
        <motion.button
          className={props.className || ''}
          onClick={props.onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {props.children}
        </motion.button>
      )
    }
    
    try {
      return <Component {...props} />
    } catch (error) {
      console.error(`${fallbackName} error:`, error)
      setHasError(true)
      return null
    }
  }
}

// Magnetic Button Component
function MagneticButtonBase({ children, className = '', onClick, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const translateX = useSpring(x, springConfig)
  const translateY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    const maxDistance = Math.max(rect.width, rect.height)
    const strength = 0.3
    
    x.set((distanceX / maxDistance) * strength * 100)
    y.set((distanceY / maxDistance) * strength * 100)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        translateX: translateX,
        translateY: translateY,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Liquid Button with Morphing Effect
function LiquidButtonBase({ children, className = '', onClick, ...props }) {
  const ref = useRef(null)
  const pathLength = useMotionValue(0)
  const opacity = useMotionValue(0)

  return (
    <motion.button
      ref={ref}
      className={`relative group ${className}`}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {/* Liquid Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-akk-orange via-akk-yellow to-akk-orange-light opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ 
          scale: 1.1, 
          opacity: 0.3,
          transition: { duration: 0.4, ease: "easeInOut" }
        }}
      />
      
      {/* Morphing Border */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="12"
          fill="none"
          stroke="url(#liquidGradient)"
          strokeWidth="2"
          variants={{
            initial: {
              pathLength: 0,
              opacity: 0,
            },
            hover: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.3 }
              }
            }
          }}
        />
        <defs>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#F7931E" />
            <stop offset="100%" stopColor="#FF8C42" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Button Content */}
      <span className="relative z-10 block">
        {children}
      </span>
      
      {/* Ripple Effect */}
      <motion.span
        className="absolute inset-0 rounded-lg bg-akk-orange opacity-0"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{
          scale: [0, 1, 1.5],
          opacity: [0.5, 0.3, 0],
          transition: { duration: 0.6 }
        }}
      />
    </motion.button>
  )
}

// Glowing Button with Neon Effect
function GlowingButtonBase({ children, className = '', onClick, ...props }) {
  return (
    <motion.button
      className={`relative group ${className}`}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-akk-orange opacity-0 blur-xl"
        variants={{
          hover: {
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 }
          }
        }}
      />
      
      {/* Inner Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-akk-orange to-akk-yellow opacity-0 blur-md"
        variants={{
          hover: {
            opacity: 0.6,
            transition: { duration: 0.2 }
          }
        }}
      />
      
      {/* Button Background */}
      <motion.div
        className="relative rounded-lg border-2 border-akk-orange bg-transparent px-8 py-4"
        variants={{
          hover: {
            borderColor: "#F7931E",
            transition: { duration: 0.2 }
          }
        }}
      >
        <motion.span
          className="relative z-10 font-semibold text-akk-text-primary"
          variants={{
            hover: {
              color: "#FF6B35",
              transition: { duration: 0.2 }
          }
        }}
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.button>
  )
}

// Floating Action Button
function FloatingButtonBase({ children, className = '', onClick, ...props }) {
  return (
    <motion.button
      className={`relative ${className}`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        y: -5,
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      {...props}
    >
      {/* Shadow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-akk-orange/20 blur-xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Button Content */}
      {children}
    </motion.button>
  )
}

// Interactive Card with 3D Tilt Effect
function InteractiveCardBase({ children, className = '', ...props }) {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateXValue = ((e.clientY - centerY) / rect.height) * -10
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 10
    
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative transform-gpu ${className}`}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        z: 50,
        transition: { duration: 0.2 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Export wrapped components with error handling
export const MagneticButton = withErrorBoundary(MagneticButtonBase, 'MagneticButton')
export const LiquidButton = withErrorBoundary(LiquidButtonBase, 'LiquidButton')
export const GlowingButton = withErrorBoundary(GlowingButtonBase, 'GlowingButton')
export const FloatingButton = withErrorBoundary(FloatingButtonBase, 'FloatingButton')
export const InteractiveCard = withErrorBoundary(InteractiveCardBase, 'InteractiveCard')
