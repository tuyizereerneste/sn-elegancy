import React, { useTransition } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Service {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const {t} = useTranslation('serviceSection')
  return (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg"
  >
    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link to="/services" className="text-primary font-semibold flex items-center">{t('serviceSection.learnButton')}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
)};

const ServicesSection: React.FC = () => {
  const {t} = useTranslation('serviceSection');
  const services = [
    {
      title: t('serviceSection.service1.title'),
      description: t('serviceSection.service1.description'),
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: t('serviceSection.service2.title'),
      description: t('serviceSection.service2.description'),
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: t('serviceSection.service3.title'),
      description: t('serviceSection.service3.description'),
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">{t('serviceSection.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('serviceSection.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;