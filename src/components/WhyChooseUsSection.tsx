import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => (
  <section className="py-20">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">Why Choose SN Elegancy?</h2>
          <div className="space-y-4">
            {[
              'Award-winning design team',
              'Personalized approach to every project',
              'Exceptional attention to detail',
              'Comprehensive project management',
              'Quality craftsmanship guaranteed'
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
            alt="Interior Design Process"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;