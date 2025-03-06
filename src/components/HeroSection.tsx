import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <section className="relative h-screen">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute min-w-full min-h-full object-cover"
        poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      >
        <source
          src="https://player.vimeo.com/external/373787639.hd.mp4?s=dee27e23aac0fc7468c8101c52f3530c08355df3&profile_id=175"
          type="video/mp4"
        />
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Space Into a Masterpiece
        </h1>
        <p className="text-xl mb-8">
          Award-winning interior design and renovation services that bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/portfolio" className="btn-primary inline-flex items-center">
            Explore Our Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
            Request Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;