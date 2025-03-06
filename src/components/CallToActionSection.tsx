import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTASection: React.FC = () => (
    <section className="py-20 bg-gray-50">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's create something extraordinary together.
        </p>
        <Link to="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;