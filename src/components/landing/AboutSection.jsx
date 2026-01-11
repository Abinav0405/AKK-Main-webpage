import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Shield, Users } from 'lucide-react';

const stats = [
  { icon: Building2, label: 'Incorporated', value: '2019' },
  { icon: Award, label: 'BCA License', value: 'ME05-L1' },
  { icon: Shield, label: 'Core Business', value: 'Electrical' },
  { icon: Users, label: 'Sectors', value: 'Public & Private' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
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
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] bg-clip-text text-transparent">
              AKK Engineering
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                <span className="font-semibold text-[#B91C4A]">AKK ENGINEERING PTE. LTD.</span> is a local based electrical contractor company that has the privilege of providing services to many distinguished owners, main contractors and leading industrial and commercial clients.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                We provide quality services for <span className="font-semibold">Electrical Engineering</span> and <span className="font-semibold">Tele-communications installations</span> for construction industries, both in public and private sectors.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                AKK ENGINEERING PTE. LTD. is in operation in Singapore and was incorporated on <span className="font-semibold">30th May 2019</span>. We are a registered company with Building Construction Authority as <span className="text-[#B91C4A] font-semibold">ME05 – L1</span> and our main core of business is in Electrical Engineering.
              </p>
            </div>

            {/* Core services badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Electrical Works', 'Fire Protection', 'Plumbing & Sanitary', 'M&E Management'].map((service, i) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-[#B91C4A]/10 to-[#DC6B2F]/10 text-[#B91C4A] rounded-full text-sm font-medium"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#B91C4A] to-[#DC6B2F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 glow-hover"
                     style={{ boxShadow: '0 10px 20px rgba(185, 28, 74, 0.3)' }}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}