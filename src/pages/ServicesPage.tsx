import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Home, Ruler, Sofa, Clock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Full-service interior design solutions tailored to your style and needs.',
      features: [
        'Space planning and layout optimization',
        'Color and material selection',
        'Custom furniture design',
        'Lighting design',
      ],
    },
    {
      icon: Home,
      title: 'Renovation',
      description: 'Complete renovation services to transform your space.',
      features: [
        'Kitchen and bathroom remodeling',
        'Structural modifications',
        'Flooring installation',
        'Custom built-ins',
      ],
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Strategic space planning to maximize functionality and flow.',
      features: [
        '2D and 3D floor plans',
        'Traffic flow analysis',
        'Furniture layout',
        'Storage solutions',
      ],
    },
    {
      icon: Sofa,
      title: 'Custom Furniture',
      description: 'Bespoke furniture designed and crafted for your space.',
      features: [
        'Custom design and fabrication',
        'Material selection',
        'Upholstery services',
        'Installation',
      ],
    },
    {
      icon: Clock,
      title: 'Project Management',
      description: 'End-to-end project management for seamless execution.',
      features: [
        'Timeline development',
        'Contractor coordination',
        'Budget management',
        'Quality control',
      ],
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Ongoing maintenance services to keep your space perfect.',
      features: [
        'Regular inspections',
        'Repairs and touch-ups',
        'Furniture care',
        'Seasonal updates',
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
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive design and renovation solutions to transform your space 
              into something extraordinary.
            </p>
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
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-gray-600 mb-8">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;