import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, Facebook, Briefcase, Building2 } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

const toolLinks = [
  { label: 'Material Tracker', href: 'https://material-tracker.akk.sg' },
  { label: 'Timesheet Manager', href: 'https://timesheet-manager.akk.sg' },
  { label: 'Main Website', href: 'https://akk.com.sg' },
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
    label: 'SGP Business', 
    href: 'https://www.sgpbusiness.com/company/Akk-Engineering-Pte-Ltd',
    color: 'hover:bg-emerald-600'
  },
  { 
    icon: Briefcase, 
    label: 'Careers', 
    href: 'https://www.mycareersfuture.gov.sg/companies/akk-engineering-201917458W',
    color: 'hover:bg-orange-600'
  },
];

export default function Footer({ logo }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="AKK Engineering Logo" 
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-bold mb-2">AKK Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering Excellence Since 2019. Your trusted partner for electrical and M&E solutions in Singapore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#DC6B2F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Digital Tools</h4>
            <ul className="space-y-3">
              {toolLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#DC6B2F] transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>15 Kaki Bukit Rd 4, #01-50,<br />Singapore 417808</p>
              <p>+65 86084119</p>
              <p>admin@akk.com.sg</p>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2019 AKK ENGINEERING PTE. LTD. All rights reserved
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Design by{' '}
            <a 
              href="https://akk.com.sg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#DC6B2F] hover:underline"
            >
              akk.com.sg
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}