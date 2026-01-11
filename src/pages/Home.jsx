import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import CertificationsSection from '@/components/landing/CertificationsSection';
import DigitalToolsSection from '@/components/landing/DigitalToolsSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

// Logo URL from the uploaded image
const LOGO_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_696300a62e377e88075fae2f/ee87a7052_image.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar logo={LOGO_URL} />
      <HeroSection logo={LOGO_URL} />
      <AboutSection />
      <ServicesSection />
      <CertificationsSection />
      <DigitalToolsSection />
      <ContactSection />
      <Footer logo={LOGO_URL} />
    </div>
  );
}