import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'AKK Engineering was established with a vision to provide exceptional engineering solutions.',
    type: 'milestone'
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description: 'Launched our first digital management systems for material tracking and workforce management.',
    type: 'innovation'
  },
  {
    year: '2018',
    title: 'Expansion',
    description: 'Expanded operations and introduced advanced project management methodologies.',
    type: 'growth'
  },
  {
    year: '2020',
    title: 'Innovation Hub',
    description: 'Developed proprietary Material Tracker and Timesheet Manager systems.',
    type: 'innovation'
  },
  {
    year: '2023',
    title: 'Digital Excellence',
    description: 'Achieved full digital integration across all operational aspects.',
    type: 'achievement'
  },
  {
    year: '2024',
    title: 'Future Ready',
    description: 'Embracing AI and advanced technologies for next-generation engineering solutions.',
    type: 'future'
  }
]

const TimelineEvent = ({ event, index, isEven, isInView }) => {
  const colors = {
    milestone: 'from-akk-orange to-akk-yellow',
    innovation: 'from-akk-orange-light to-akk-amber',
    growth: 'from-akk-yellow to-akk-white',
    achievement: 'from-akk-orange-bright to-akk-orange',
    future: 'from-purple-500 to-akk-orange'
  }

  return (
    <motion.div
      className={`flex items-center mb-12 ${isEven ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Content */}
      <motion.div
        className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${colors[event.type]} text-white text-sm font-semibold mb-3`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {event.year}
        </motion.div>
        <h3 className="text-2xl font-heading font-bold text-akk-text-primary mb-2">
          {event.title}
        </h3>
        <p className="text-akk-text-secondary leading-relaxed">
          {event.description}
        </p>
      </motion.div>

      {/* Timeline Dot */}
      <motion.div
        className="relative z-10 w-8 h-8 bg-akk-orange rounded-full border-4 border-akk-white shadow-lg"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
      >
        <motion.div
          className="absolute inset-0 bg-akk-orange rounded-full animate-ping"
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      </motion.div>

      {/* Timeline Line */}
      <div className={`w-5/12 ${isEven ? 'pl-8' : 'pr-8'}`}>
        <motion.div
          className="h-0.5 bg-gradient-to-r from-akk-orange/20 to-akk-orange/60"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
          style={{ originX: isEven ? 0 : 1 }}
        />
      </div>
    </motion.div>
  )
}

export default function Timeline4D() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={ref}
      className="min-h-screen py-32 relative overflow-hidden"
      style={{ y: backgroundY, opacity }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-akk-bg-secondary via-akk-bg-accent to-akk-bg-primary" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-akk-orange/10 blur-3xl"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-akk-text-primary mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-akk-text-secondary max-w-3xl mx-auto">
            From our humble beginnings to becoming a leader in engineering innovation, 
            our timeline showcases the milestones that shaped our identity.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Central Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-akk-orange via-akk-yellow to-akk-orange-light transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, delay: 0.8 }}
              style={{ originY: 0 }}
            />

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                event={event}
                index={index}
                isEven={index % 2 === 0}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-akk-orange/20 rounded-full blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-akk-yellow/15 rounded-full blur-2xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.section>
  )
}
