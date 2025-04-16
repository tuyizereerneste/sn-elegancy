import React from 'react';
import { motion } from 'framer-motion';
import FinalCTASection from '../components/CallToActionSection'
import {
  Paintbrush,
  Home,
  Ruler,
  Sofa,
  Clock,
  Wrench,
  Lightbulb,
  Brush,
  Leaf,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation('services');

  const services = [
    {
      icon: Sofa,
      title: t('services.servicesList.SnFurnitures.SnFurniturestitle'),
      description: t('services.servicesList.SnFurnitures.SnFurnituresdescription'),
      features: [
        t('services.servicesList.SnFurnitures.SnFurnituresList1'),
        t('services.servicesList.SnFurnitures.SnFurnituresList2'),
        t('services.servicesList.SnFurnitures.SnFurnituresList3'),
        t('services.servicesList.SnFurnitures.SnFurnituresList4'),
      ],
    },
    {
      icon: Wrench,
      title: t('services.servicesList.SnPlumbing.SnPlumbingtitle'),
      description: t('services.servicesList.SnPlumbing.SnPlumbingdescription'),
      features: [
        t('services.servicesList.SnPlumbing.SnPlumbingList1'),
        t('services.servicesList.SnPlumbing.SnPlumbingList2'),
        t('services.servicesList.SnPlumbing.SnPlumbingList3'),
        t('services.servicesList.SnPlumbing.SnPlumbingList4'),
      ],
    },
    {
      icon: Lightbulb,
      title: t('services.servicesList.SnElectricity.SnElectricitytitle'),
      description: t('services.servicesList.SnElectricity.SnElectricitydescription'),
      features: [
        t('services.servicesList.SnElectricity.SnElectricityList1'),
        t('services.servicesList.SnElectricity.SnElectricityList2'),
        t('services.servicesList.SnElectricity.SnElectricityList3'),
        t('services.servicesList.SnElectricity.SnElectricityList4'),
      ],
    },
    {
      icon: Layers,
      title: t('services.servicesList.SnMasonry.SnMasonrytitle'),
      description: t('services.servicesList.SnMasonry.SnMasonrydescription'),
      features: [
        t('services.servicesList.SnMasonry.SnMasonryList1'),
        t('services.servicesList.SnMasonry.SnMasonryList2'),
        t('services.servicesList.SnMasonry.SnMasonryList3'),
        t('services.servicesList.SnMasonry.SnMasonryList4'),
      ],
    },
    {
      icon: Paintbrush,
      title: t('services.servicesList.SnPainting.SnPaintingtitle'),
      description: t('services.servicesList.SnPainting.SnPaintingdescription'),
      features: [
        t('services.servicesList.SnPainting.SnPaintingList1'),
        t('services.servicesList.SnPainting.SnPaintingList2'),
        t('services.servicesList.SnPainting.SnPaintingList3'),
        t('services.servicesList.SnPainting.SnPaintingList4'),
      ],
    },
    {
      icon: Leaf,
      title: t('services.servicesList.SnLandscape.SnLandsctitle'),
      description: t('services.servicesList.SnLandscape.SnLandscapedescription'),
      features: [
        t('services.servicesList.SnLandscape.SnLandscapeList1'),
        t('services.servicesList.SnLandscape.SnLandscapeList2'),
        t('services.servicesList.SnLandscape.SnLandscapeList3'),
        t('services.servicesList.SnLandscape.SnLandscapeList4'),
      ],
    },
    {
      icon: Home,
      title: t('services.servicesList.SnCeiling.SnCeilingtitle'),
      description: t('services.servicesList.SnCeiling.SnCeilingdescription'),
      features: [
        t('services.servicesList.SnCeiling.SnCeilingList1'),
        t('services.servicesList.SnCeiling.SnCeilingList2'),
        t('services.servicesList.SnCeiling.SnCeilingList3'),
        t('services.servicesList.SnCeiling.SnCeilingList4'),
      ],
    },
    {
      icon: Brush,
      title: t('services.servicesList.SnTiling.SnTilingtitle'),
      description: t('services.servicesList.SnTiling.SnTilingdescription'),
      features: [
        t('services.servicesList.SnTiling.SnTilingList1'),
        t('services.servicesList.SnTiling.SnTilingList2'),
        t('services.servicesList.SnTiling.SnTilingList3'),
        t('services.servicesList.SnTiling.SnTilingList4'),
      ],
    },
    {
      icon: Ruler,
      title: t('services.servicesList.SnArchitecture.SnArchitecturetitle'),
      description: t('services.servicesList.SnArchitecture.SnArchitecturedescription'),
      features: [
        t('services.servicesList.SnArchitecture.SnArchitectureList1'),
        t('services.servicesList.SnArchitecture.SnArchitectureList2'),
        t('services.servicesList.SnArchitecture.SnArchitectureList3'),
        t('services.servicesList.SnArchitecture.SnArchitectureList4'),
      ],
    },
    {
      icon: Clock,
      title: t('services.servicesList.SnProject.SnProjecttitle'),
      description: t('services.servicesList.SnProject.SnProjectdescription'),
      features: [
        t('services.servicesList.SnProject.SnProjectList1'),
        t('services.servicesList.SnProject.SnProjectList2'),
        t('services.servicesList.SnProject.SnProjectList3'),
        t('services.servicesList.SnProject.SnProjectList4'),
        t('services.servicesList.SnProject.SnProjectList5'),
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{t(service.title)}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FinalCTASection />
    </div>
  );
};

export default ServicesPage;