import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, Radio, Projector, Mic2, Flame, 
  Droplets, Wind, Wrench, FileCheck, Tv, FolderKanban 
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical System',
    description: 'Supply, Installation, Testing and Commissioning of Electrical System.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Earthing System',
    description: 'Supply, Installation, Testing and Commissioning of Lightning Protection and Earthing System.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Radio,
    title: 'Security System',
    description: 'Supply, Installation, Testing and Commissioning of Communication and Security System.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    description: 'Project management is the practice of initiating, planning, executing, controlling, and closing the work of a team.',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: Tv,
    title: 'SCV, MATV & CATV System',
    description: 'Supply, Installation, Testing and Commissioning of SCV, MATV and CATV System.',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: Mic2,
    title: 'Public Address System',
    description: 'Supply, Installation, Testing and Commissioning of Public Address System.',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: Flame,
    title: 'Fire Protection System',
    description: 'Supply, Installation, Testing and Commissioning of Fire Protection System.',
    color: 'from-red-400 to-orange-500'
  },
  {
    icon: Droplets,
    title: 'Plumbing & Sanitary',
    description: 'Supply, Installation, Testing and Commissioning of Plumbing and sanitary system.',
    color: 'from-cyan-400 to-teal-500'
  },
  {
    icon: Wind,
    title: 'Mechanical Ventilation',
    description: 'Supply, installation, Testing and Commissioning of Aircon and Mechanical ventilation system.',
    color: 'from-sky-400 to-blue-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Servicing',
    description: 'To provide comprehensive Maintenance and Servicing solutions.',
    color: 'from-gray-400 to-slate-500'
  },
  {
    icon: FileCheck,
    title: 'Licensing & Endorsement',
    description: 'A signature authorizing the legal transfer of a negotiable instrument between parties is an endorsement.',
    color: 'from-amber-400 to-yellow-500'
  },
  {
    icon: Projector,
    title: 'M&E Project Management',
    description: 'Complete Mechanical & Electrical project management services for all scales.',
    color: 'from-[#B91C4A] to-[#DC6B2F]'
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#DC6B2F] font-semibold tracking-wider uppercase text-sm">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to meet your project requirements
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="h-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:-translate-y-2 group-hover:rotate-1" 
                   style={{ transform: 'translateZ(0)' }}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* 3D depth layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                     style={{ transform: 'translateZ(5px)' }} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-[#B91C4A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}