import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './components/Logo';
import MaterialTrackerSymbol from './components/MaterialTrackerSymbol';
import TimesheetManagerSymbol from './components/TimesheetManagerSymbol';
import { CSS3DElements, EnhancedTimeline } from './components/CSS3DEffects';

const App = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handlePrefersColorScheme = (e) => {
      document.documentElement.style.setProperty('--prefers-dark', e.matches ? '1' : '0');
    };

    document.addEventListener('mousemove', handleMouseMove);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handlePrefersColorScheme);
    handlePrefersColorScheme(mediaQuery);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handlePrefersColorScheme);
    };
  }, []);

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Mouse Following Glow */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        animate={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 53, 0.15), transparent 40%)`
        }}
        transition={{ type: 'tween', duration: 0.1 }}
      />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-32"
        style={{ y: backgroundY }}
      >
        {/* CSS 3D Elements */}
        <CSS3DElements />

        <div className="absolute inset-0 bg-gradient-to-br from-akk-bg-primary via-akk-bg-secondary to-akk-bg-accent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-akk-orange/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-akk-orange-light/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-akk-orange/10 via-akk-yellow/10 to-akk-orange-light/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Diagonal Tool Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Hammer Pattern */}
          <div className="absolute top-20 left-20 transform -rotate-12 opacity-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-akk-orange">
              <path d="M2 19.63c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V9c0-.5-.4-.87-.87-.87H2.87C2.4 8.13 2 8.5 2 9v10.63z"/>
              <path d="M12.87 2c-.47 0-.87.37-.87.87v5.26c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V2.87C21 2.4 20.6 2 20.13 2h-7.26z"/>
              <path d="M2.87 2C2.4 2 2 2.4 2 2.87v5.26c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V2.87C11 2.4 10.6 2 10.13 2H2.87z"/>
              <path d="M12.87 10.13c-.47 0-.87.37-.87.87v7.26c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87v-7.26c0-.5-.4-.87-.87-.87h-7.26z"/>
            </svg>
          </div>

          {/* Screwdriver Pattern */}
          <div className="absolute top-40 right-32 transform rotate-15 opacity-15">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" className="text-akk-amber">
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"/>
            </svg>
          </div>

          {/* Wrench Pattern */}
          <div className="absolute bottom-32 left-40 transform -rotate-25 opacity-25">
            <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor" className="text-akk-yellow">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
          </div>

          {/* Hammer Pattern 2 */}
          <div className="absolute bottom-20 right-20 transform rotate-45 opacity-20">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor" className="text-akk-orange">
              <path d="M2 19.63c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V9c0-.5-.4-.87-.87-.87H2.87C2.4 8.13 2 8.5 2 9v10.63z"/>
              <path d="M12.87 2c-.47 0-.87.37-.87.87v5.26c0 .5.4.87.87.87h7.26c.47 0 .87-.37.87-.87V2.87C21 2.4 20.6 2 20.13 2h-7.26z"/>
            </svg>
          </div>

          {/* Screwdriver Pattern 2 */}
          <div className="absolute top-60 left-1/3 transform -rotate-30 opacity-18">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-akk-amber">
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 mb-16">
          <Logo />
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-akk-text-primary mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            Welcome to AKK Engineering Pte. Ltd.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-akk-text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
          >
            Engineering the Future with Innovation & Excellence
          </motion.p>
          
          {/* Add floating action buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              className="px-6 py-3 bg-akk-orange text-white rounded-full font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ y: { duration: 2, repeat: Infinity } }}
              onClick={() => handleRedirect('https://akk.com.sg')}
            >
              Explore Our Work
            </motion.button>
            <motion.button
              className="px-6 py-3 border-2 border-akk-orange text-akk-orange rounded-full font-semibold"
              whileHover={{ scale: 1.1, backgroundColor: "#FF6B35", color: "white" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:admin@akk.com.sg'}
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Two Feature Boxes */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Material Tracker Box */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              onClick={() => handleRedirect('https://material-tracker.akk.sg')}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(255, 107, 53, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-akk-orange/40 hover:border-akk-orange/60 transition-all duration-300 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-akk-orange/10 via-akk-yellow/10 to-akk-orange-light/10"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(255,107,53,0.1), rgba(247,147,30,0.1))',
                      'linear-gradient(135deg, rgba(255,140,66,0.15), rgba(255,107,53,0.15))',
                      'linear-gradient(225deg, rgba(247,147,30,0.1), rgba(255,140,66,0.1))',
                      'linear-gradient(315deg, rgba(255,107,53,0.15), rgba(247,147,30,0.15))',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                <div className="relative z-10 flex items-center justify-center mb-6">
                  <motion.svg
                    width="80"
                    height="80"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-2xl"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.6))'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="85"
                      stroke="url(#glowGradient)"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.4"
                      initial={{ scale: 0, pathLength: 0 }}
                      animate={{ scale: 1, pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />

                    <motion.polygon
                      points="100,45 138,68 138,132 100,155 62,132 62,68"
                      stroke="url(#hexGradient)"
                      strokeWidth="5"
                      fill="url(#hexFill)"
                      initial={{ pathLength: 0, scale: 0.8 }}
                      animate={{ pathLength: 1, scale: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />

                    <defs>
                      <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#F7931E" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="50%" stopColor="#FF8C42" />
                        <stop offset="100%" stopColor="#F7931E" />
                      </linearGradient>
                      <linearGradient id="hexFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#F7931E" stopOpacity="0.08" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </div>
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-heading font-bold text-akk-text-primary mb-3 text-center"
                    whileHover={{ scale: 1.05, color: '#FF6B35' }}
                    transition={{ duration: 0.15 }}
                  >
                    Material Tracker
                  </motion.h3>
                  <p className="text-akk-text-secondary text-center text-base leading-relaxed">
                    Advanced real-time material management system with intelligent tracking and analytics
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timesheet Manager Box */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
              onClick={() => handleRedirect('https://timesheet-manager.akk.sg')}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                rotateY: -5,
                boxShadow: '0 25px 50px -12px rgba(247, 147, 30, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-akk-yellow/40 hover:border-akk-yellow/60 transition-all duration-300 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-akk-yellow/10 via-akk-orange/10 to-akk-yellow-light/10"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(247,147,30,0.1), rgba(255,107,53,0.1))',
                      'linear-gradient(135deg, rgba(255,140,66,0.15), rgba(247,147,30,0.15))',
                      'linear-gradient(225deg, rgba(255,107,53,0.1), rgba(255,140,66,0.1))',
                      'linear-gradient(315deg, rgba(247,147,30,0.15), rgba(255,107,53,0.15))',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                <div className="relative z-10 flex items-center justify-center mb-6">
                  <motion.svg
                    width="80"
                    height="80"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-2xl"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: -360,
                      filter: 'drop-shadow(0 0 20px rgba(247, 147, 30, 0.6))'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="85"
                      stroke="url(#clockGlowGradient)"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.4"
                      initial={{ scale: 0, pathLength: 0 }}
                      animate={{ scale: 1, pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />

                    <motion.circle
                      cx="100"
                      cy="100"
                      r="65"
                      stroke="url(#clockRingGradient)"
                      strokeWidth="5"
                      fill="url(#clockFaceFill)"
                      initial={{ pathLength: 0, scale: 0.8 }}
                      animate={{ pathLength: 1, scale: 1 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />

                    {/* Animated clock hands */}
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    >
                      <line
                        x1="100"
                        y1="100"
                        x2="100"
                        y2="65"
                        stroke="url(#handGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </motion.g>

                    <defs>
                      <linearGradient id="clockGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F7931E" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="clockRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F7931E" />
                        <stop offset="50%" stopColor="#FF8C42" />
                        <stop offset="100%" stopColor="#FF6B35" />
                      </linearGradient>
                      <linearGradient id="clockFaceFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F7931E" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.08" />
                      </linearGradient>
                      <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F7931E" />
                        <stop offset="100%" stopColor="#FF6B35" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </div>
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-heading font-bold text-akk-text-primary mb-3 text-center"
                    whileHover={{ scale: 1.05, color: '#F7931E' }}
                    transition={{ duration: 0.15 }}
                  >
                    Timesheet Manager
                  </motion.h3>
                  <p className="text-akk-text-secondary text-center text-base leading-relaxed">
                    Intelligent workforce management with automated payroll and comprehensive reporting
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="relative z-10 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="w-6 h-10 border-2 border-akk-orange rounded-full flex justify-center mx-auto">
            <motion.div
              className="w-1 h-3 bg-akk-orange rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Section Divider */}
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-akk-amber/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      />

      {/* Material Tracker Section */}
      <section className="min-h-screen flex items-center py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Symbol */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80">
                <MaterialTrackerSymbol />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-akk-text-primary mb-6">
                Material Tracker System
              </h2>
              <p className="text-lg text-akk-text-secondary mb-8 leading-relaxed">
                A centralized platform to track, manage, and monitor materials in real time across projects.
              </p>
              <motion.button
                className="group relative px-8 py-4 bg-transparent border-2 border-akk-orange text-akk-text-primary font-semibold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRedirect('https://material-tracker.akk.sg')}
              >
                <span className="relative z-10">Visit Material Tracker here →</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-akk-orange via-akk-yellow to-akk-white opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider 2 */}
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-akk-amber/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      />

      {/* Timesheet Manager Section */}
      <section className="min-h-screen flex items-center py-32 bg-gradient-to-b from-akk-bg-secondary to-akk-bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-akk-text-primary mb-6">
                Timesheet Manager
              </h2>
              <p className="text-lg text-akk-text-secondary mb-8 leading-relaxed">
                A smart workforce system for managing attendance, overtime, payroll calculations, and reporting.
              </p>
              <motion.button
                className="group relative px-8 py-4 bg-transparent border-2 border-akk-orange text-akk-text-primary font-semibold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRedirect('https://timesheet-manager.akk.sg')}
              >
                <span className="relative z-10">Visit Timesheet Manager here →</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-akk-orange via-akk-yellow to-akk-white opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Symbol */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80">
                <TimesheetManagerSymbol />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-akk-bg-secondary border-t border-akk-orange/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-akk-orange via-akk-yellow to-akk-white mx-auto mb-6 rounded-full" />
            <p className="text-akk-text-secondary">
              © AKK Engineering Pte. Ltd.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
