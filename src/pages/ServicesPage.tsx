import React from 'react';
import { motion } from 'framer-motion';
import FinalCTASection from '../components/CallToActionSection';
import {
  Wrench,
  Sofa,
  Lightbulb,
  Layers,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation('services');

  const services = [
    {
      icon: Sofa,
      media: '/20h.jpeg',
      title: t('services.servicesList.Construction.ConstructionTitle'),
      description: t('services.servicesList.Construction.ConstructionDescription'),
      features: [
        t('services.servicesList.Construction.ConstructionList1'),
        t('services.servicesList.Construction.ConstructionList2'),
        t('services.servicesList.Construction.ConstructionList3'),
        t('services.servicesList.Construction.ConstructionList4'),
      ],
    },
    {
      icon: Wrench,
      media: '/38r.jpeg',
      title: t('services.servicesList.InteriorDesign.InteriorDesignTitle'),
      description: t('services.servicesList.InteriorDesign.InteriorDesignDescription'),
      features: [
        t('services.servicesList.InteriorDesign.InteriorDesignList1'),
        t('services.servicesList.InteriorDesign.InteriorDesignList2'),
        t('services.servicesList.InteriorDesign.InteriorDesignList3'),
        t('services.servicesList.InteriorDesign.InteriorDesignList4'),
      ],
    },
    {
      icon: Lightbulb,
      media: '/54h.jpeg',
      title: t('services.servicesList.Renovation.RenovationTitle'),
      description: t('services.servicesList.Renovation.RenovationDescription'),
      features: [
        t('services.servicesList.Renovation.RenovationList1'),
        t('services.servicesList.Renovation.RenovationList2'),
        t('services.servicesList.Renovation.RenovationList3'),
        t('services.servicesList.Renovation.RenovationList4'),
      ],
    },
    {
      icon: Layers,
      media: '/image.jpg',
      title: t('services.servicesList.3DPlans.3DPlansTitle'),
      description: t('services.servicesList.3DPlans.3DPlansDescription'),
      features: [
        t('services.servicesList.3DPlans.3DPlansList1'),
        t('services.servicesList.3DPlans.3DPlansList2'),
        t('services.servicesList.3DPlans.3DPlansList3'),
        t('services.servicesList.3DPlans.3DPlansList4'),
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-xl text-gray-200">{t('services.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Services */}
      <section className="py-20">
        <div className="container space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-10`}
            >
              <div className="flex-1">
                <img
                  src={service.media}
                  alt="Service Visual"
                  className="w-full h-80 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <div className="mt-1 mr-2 w-2 h-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-100">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Discover Our Work in Action</h2>
            <p className="text-gray-600">Watch how we transform ideas into reality through our expert services.</p>
          </div>
          <div className="w-full max-w-5xl mx-auto bg-white p-4 rounded-2xl shadow-lg">
            <video
              controls
              muted
              poster="/4h.jpeg"
              className="w-full h-auto rounded-xl"
            >
              <source src="/video1.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <FinalCTASection />
    </div>
  );
};

export default ServicesPage;