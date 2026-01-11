import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'ISO 45001:2018',
    issuer: 'BQSR Quality Assurance',
    description: 'Occupational Health & Safety Management System',
    scope: 'Provision of Building Construction, Mechanical & Electrical Works',
    certNumber: 'BQSR17249',
    validUntil: '25/08/2028',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69630166e34bf8c82065bceb/7bf4e4f99_image.png',
    badge: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69630166e34bf8c82065bceb/02895a56a_image.png'
  },
  {
    title: 'bizSAFE Level Star',
    issuer: 'Workplace Safety and Health Council',
    description: 'The highest level of bizSAFE certification',
    certNumber: 'E34218',
    validUntil: '25/08/2028',
    image: '/cert1.jpeg',
    badge: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69630166e34bf8c82065bceb/690d9be92_image.png'
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B91C4A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC6B2F]/5 rounded-full blur-3xl" />
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
            Quality Assurance
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Committed to the highest standards of safety, quality, and excellence in engineering
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:-translate-y-2">
                {/* Certificate image */}
                <div className="relative h-80 md:h-96 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50" />
                </div>

                {/* Certificate details */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#B91C4A] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[#DC6B2F] font-medium">{cert.issuer}</p>
                    </div>
                    {cert.badge && (
                      <img 
                        src={cert.badge} 
                        alt={`${cert.title} Badge`}
                        className="w-16 h-16 object-contain"
                      />
                    )}
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  {cert.scope && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm font-medium text-gray-700 mb-1">Scope:</p>
                      <p className="text-sm text-gray-600">{cert.scope}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Certificate No.</p>
                      <p className="font-semibold text-gray-900">{cert.certNumber}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Valid Until</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <p className="font-semibold text-gray-900">{cert.validUntil}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#B91C4A] to-[#DC6B2F] rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Safety First</h4>
            <p className="text-gray-600 text-sm">
              Committed to maintaining the highest safety standards
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#B91C4A] to-[#DC6B2F] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Certified Excellence</h4>
            <p className="text-gray-600 text-sm">
              Internationally recognized quality management systems
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#B91C4A] to-[#DC6B2F] rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Assured</h4>
            <p className="text-gray-600 text-sm">
              Rigorous quality control and assurance processes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}