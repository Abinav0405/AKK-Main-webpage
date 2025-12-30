import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// CSS-based 3D engineering elements behind logo
export function CSS3DElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle engineering tools behind logo */}
      
      {/* Small rotating gear */}
      <motion.div
        className="absolute top-24 left-20 w-12 h-12"
        style={{
          transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateZ: 360
        }}
        transition={{
          rotateZ: { duration: 8, repeat: Infinity, ease: 'linear' }
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-akk-orange/20">
          <path d="M12 2l-2 2v7l2 2 2-2V4l-2-2zm0 18.5l-2-2v-7l2-2 2 2v3l-2 2z"/>
          <path d="M8.5 8.5l-2-2v7l2 2 2-2V11l-2-2zm7 0l-2-2v7l2 2 2-2V11l-2-2z"/>
        </svg>
      </motion.div>

      {/* Small wrench */}
      <motion.div
        className="absolute top-32 right-24 w-10 h-10"
        style={{
          transform: `translateX(${-mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px) rotate(45deg)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: -360
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-akk-yellow/20">
          <path d="M22.7 19l-9.1-9.1c.9-.9.9-2.3.9-3.4 0L13 14.1l-2.1 2.1-2.1 2.1c-.6.6-.6 1.3-.9 2.1-.9l6.4-6.4c.6-.6.9-1.3.9-2.1 0-.8-.3-1.5-.9-2.1L13 5.9l-2.1-2.1c-.6-.6-.9-1.3-.9-2.1 0-.8.3-1.5.9-2.1L2.9 2.9C2 2.4 2 1.7 2 1.1V1.1C2 1.7 2 2.4 2.9 2.9l6.4 6.4c.6.6.9 1.3.9 2.1 0 .8-.3 1.5-.9 2.1l-2.1 2.1 2.1-2.1c.6-.6.9-1.3.9-2.1 0-.8-.3-1.5-.9-2.1l-6.4-6.4c-.6-.6-.9-1.3-.9-2.1 0-.8.3-1.5-.9-2.1L2.9 2.9z"/>
        </svg>
      </motion.div>

      {/* Small hammer */}
      <motion.div
        className="absolute bottom-28 left-32 w-8 h-8"
        style={{
          transform: `translateX(${mousePosition.x * 0.4}px) translateY(${-mousePosition.y * 0.4}px)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: 'linear' }
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-akk-orange/15">
          <path d="M2 19.63c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V9c0-.5-.4-.87-.87-.87H2.87C2.4 8.13 2 8.5 2 9v10.63z"/>
          <path d="M12.87 2c-.47 0-.87.37-.87.87v5.26c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V2.87C21 2.4 20.6 2 20.13 2h-7.26z"/>
          <path d="M2.87 2C2.4 2 2 2.4 2 2.87v5.26c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V2.87C11 2.4 10.6 2 10.13 2H2.87z"/>
        </svg>
      </motion.div>

      {/* Small screwdriver */}
      <motion.div
        className="absolute bottom-20 right-28 w-8 h-8"
        style={{
          transform: `translateX(${-mousePosition.x * 0.3}px) translateY(${-mousePosition.y * 0.3}px) rotate(-30deg)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: -360
        }}
        transition={{
          rotate: { duration: 9, repeat: Infinity, ease: 'linear' }
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-akk-yellow/15">
          <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 10h-2v2h2v-2zm-1 0h-2v2h2v-2z"/>
        </svg>
      </motion.div>

      {/* Small bolt */}
      <motion.div
        className="absolute top-40 left-1/2 w-6 h-6"
        style={{
          transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: 720,
          y: [0, -10, 0]
        }}
        transition={{
          rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-akk-orange/25">
          <path d="M7 2v11h3v9l7-7-7-7V2H7zm10 0v11h3v9l7-7-7-7h-3z"/>
        </svg>
      </motion.div>

      {/* Small ruler */}
      <motion.div
        className="absolute top-36 right-40 w-8 h-8"
        style={{
          transform: `translateX(${-mousePosition.x * 0.4}px) translateY(${mousePosition.y * 0.4}px) rotate(15deg)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: -720
        }}
        transition={{
          rotate: { duration: 7, repeat: Infinity, ease: 'linear' }
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-akk-yellow/20">
          <path d="M3 17v2h6v-2H3zM3 12v2h6v-2H3zM15 7v2h6v-2h-6zM15 12v2h6v-2h-6zM15 17v2h6v-2h-6zM18 2v2h2v-2h-2zM18 7v2h2v-2h-2zM18 12v2h2v-2h-2zM21 2v2h2v-2h-2zM21 7v2h2v-2h-2zM21 12v2h2v-2h-2zM21 17v2h2v-2h-2z"/>
        </svg>
      </motion.div>

      {/* Small compass */}
      <motion.div
        className="absolute bottom-40 left-1/2 w-10 h-10"
        style={{
          transform: `translateX(${mousePosition.x * 0.6}px) translateY(${-mousePosition.y * 0.6}px)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-akk-orange/20">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8-3.59-8-8-8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6 2.69-6 6-6-6-2.69-6-6-6z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </motion.div>

      {/* Small blueprint */}
      <motion.div
        className="absolute top-28 right-1/3 w-12 h-12"
        style={{
          transform: `translateX(${-mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateY: 180,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotateY: { duration: 10, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-akk-yellow/25">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4h-2v16zm0-2h8V4h-2z"/>
          <path d="M8 6v12h8V6H8z"/>
          <path d="M10 8h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z"/>
        </svg>
      </motion.div>

      {/* Subtle particle field */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-akk-orange/30 rounded-full"
          style={{
            width: `${2 + (i % 2) * 1}px`,
            height: `${2 + (i % 2) * 1}px`,
            left: `${15 + i * 4}%`,
            top: `${20 + (i % 4) * 15}%`,
            transform: `translateX(${mousePosition.x * (0.2 + i * 0.02)}px) translateY(${mousePosition.y * (0.2 + i * 0.02)}px)`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
            y: [0, -8, 0]
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1
          }}
        />
      ))}

      {/* Subtle background orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px)`
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: 360
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' }
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-akk-orange/10 via-akk-yellow/10 to-akk-orange-light/10 rounded-full blur-2xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translateX(${-mousePosition.x * 0.15}px) translateY(${mousePosition.y * 0.15}px)`
        }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: -360
        }}
        transition={{
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' }
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-akk-yellow/8 via-akk-orange/8 to-akk-orange-light/8 rounded-full blur-xl" />
      </motion.div>
    </div>
  )
}

// Enhanced timeline with CSS 3D effects
export function EnhancedTimeline() {
  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-akk-bg-secondary via-akk-bg-accent to-akk-bg-primary" />
      
      {/* Floating 3D elements */}
      <CSS3DElements />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-akk-text-primary mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-akk-text-secondary max-w-3xl mx-auto">
            From our humble beginnings to becoming a leader in engineering innovation.
          </p>
        </motion.div>

        {/* Timeline with 3D cards */}
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { year: '2010', title: 'Foundation', desc: 'AKK Engineering was established.' },
            { year: '2015', title: 'Digital Transformation', desc: 'Launched first digital systems.' },
            { year: '2020', title: 'Innovation Hub', desc: 'Developed proprietary systems.' },
            { year: '2024', title: 'Future Ready', desc: 'Embracing advanced technologies.' }
          ].map((event, index) => (
            <motion.div
              key={event.year}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-5/12 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-akk-orange/30"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-akk-orange to-akk-yellow text-white text-sm font-semibold mb-3">
                  {event.year}
                </div>
                <h3 className="text-2xl font-heading font-bold text-akk-text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-akk-text-secondary">{event.desc}</p>
              </motion.div>
              
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className="w-8 h-8 bg-akk-orange rounded-full border-4 border-akk-white shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </div>
              
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
