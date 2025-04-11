import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import FinalCTASection from '../components/CallToActionSection';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <FeaturedProjectsSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <FinalCTASection />
  </>
);

export default HomePage;