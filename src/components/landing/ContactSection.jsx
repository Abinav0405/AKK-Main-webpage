import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Building2, Briefcase, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '15 Kaki Bukit Rd 4, #01-50, Singapore 417808',
    link: 'https://maps.google.com/?q=15+Kaki+Bukit+Rd+4+Singapore+417808'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+65 86084119',
    link: 'tel:+6586084119'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'admin@akk.com.sg',
    link: 'mailto:admin@akk.com.sg'
  }
];

const socialLinks = [
  { 
    icon: Facebook, 
    label: 'Facebook', 
    href: 'https://www.facebook.com/akk.com.sg/',
    color: 'hover:bg-blue-600'
  },
  { 
    icon: Building2, 
    label: 'SGP Business Profile', 
    href: 'https://www.sgpbusiness.com/company/Akk-Engineering-Pte-Ltd',
    color: 'hover:bg-emerald-600'
  },
  { 
    icon: Briefcase, 
    label: 'Career Opportunities', 
    href: 'https://www.mycareersfuture.gov.sg/companies/akk-engineering-201917458W',
    color: 'hover:bg-orange-600'
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-[#B91C4A] to-[#DC6B2F] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.link}
                target={info.icon === MapPin ? '_blank' : undefined}
                rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B91C4A] to-[#DC6B2F] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-[#B91C4A] transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 pt-4"
            >
              <span className="text-gray-500 text-sm font-medium">Connect with us:</span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    className={`group flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 ${social.color} hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7539614896974!2d103.90419567496584!3d1.334723098642901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f8d63c8d71%3A0x5f7f3c0a3b9f0b0a!2s15%20Kaki%20Bukit%20Rd%204%2C%20Singapore%20417808!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AKK Engineering Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}