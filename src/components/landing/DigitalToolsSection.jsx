import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, ExternalLink, ArrowRight, BarChart3, Users, CheckCircle } from 'lucide-react';

const tools = [
  {
    icon: Package,
    title: 'Material Tracker',
    subtitle: 'Smart Material Management',
    description: 'A centralized platform to track, manage, and monitor materials in real time across projects. Advanced real-time material management system with intelligent tracking and analytics.',
    link: 'https://material-tracker.akk.sg',
    color: 'from-[#B91C4A] to-[#DC6B2F]',
    features: ['Real-time Tracking', 'Inventory Analytics', 'Request Management']
  },
  {
    icon: Clock,
    title: 'Timesheet Manager',
    subtitle: 'Intelligent Workforce System',
    description: 'A smart workforce system for managing attendance, overtime, payroll calculations, and comprehensive reporting. Automated payroll with detailed analytics.',
    link: 'https://timesheet-manager.akk.sg',
    color: 'from-[#DC6B2F] to-[#B91C4A]',
    features: ['Automated Payroll', 'Attendance Tracking', 'Detailed Reports']
  }
];

export default function DigitalToolsSection() {
  return (
    <section id="tools" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B91C4A]/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#DC6B2F] font-semibold tracking-wider uppercase text-sm">
            Digital Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] bg-clip-text text-transparent">
              Digital Tools
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Innovative software solutions to streamline your operations
          </p>
        </motion.div>

        {/* Tools cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-full p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group-hover:-translate-y-3 group-hover:rotate-1" 
                   style={{ transform: 'translateZ(0)' }}>
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* 3D depth shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-shimmer" 
                     style={{ transform: 'translateZ(5px)', backgroundSize: '200% 200%' }} />
                
                {/* Icon and badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    LIVE
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#B91C4A] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-[#DC6B2F] font-medium mb-4">{tool.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.features.map((feature) => (
                    <span 
                      key={feature}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${tool.color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                >
                  Visit Platform
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main website link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="text-left">
              <p className="text-gray-500 text-sm mb-1">Visit our main website</p>
              <p className="text-lg font-semibold text-gray-900">akk.com.sg</p>
            </div>
            <a
              href="https://akk.com.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Go to Website
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}