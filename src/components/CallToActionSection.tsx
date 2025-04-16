import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FinalCTASection: React.FC = () => {
  const { t } = useTranslation('cta')

 return (
    <section className="py-20 bg-gray-50">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-primary">{t('cta.ctaTitle')}</h2>
        <p className="text-xl text-gray-600 mb-8">{t('cta.ctaDescription')}</p>
        <Link to="/contact" className="btn-primary">{t('cta.ctaButton')}
        </Link>
      </motion.div>
    </div>
  </section>
)};

export default FinalCTASection;