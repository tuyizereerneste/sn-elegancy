import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation('hero');
  return (
      <section className="relative h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute min-w-full min-h-full object-cover"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" // Optional: update this to match your local poster image
        >
          <source src="/VIDEO.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative z-10 container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.heroTitle')}</h1>
          <p className="text-xl mb-8">{t('hero.heroText')}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/portfolio" className="btn-primary inline-flex items-center">{t('hero.exprore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">{t('hero.request')}</Link>
          </div>
        </motion.div>
      </div>
    </section>

)};

export default HeroSection;