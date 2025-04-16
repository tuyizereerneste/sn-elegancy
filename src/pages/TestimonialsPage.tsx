import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import FinalCTASection from '../components/CallToActionSection';
import { useTranslation } from 'react-i18next';


const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation('testimonials');
  const testimonials = [
    {
      id: 1,
      name: "Emily Thompson",
      role: t('testimonials.testimony1.ownerTitle'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
      content: t('testimonials.testimony1.ownerMessage'),
      rating: 5,
      project: t('testimonials.testimony1.ownerWork'),
    },
    {
      id: 2,
      name: "David Chen",
      role: t('testimonials.testimony2.ownerTitle'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
      content: t('testimonials.testimony2.ownerMessage'),
      rating: 5,
      project: t('testimonials.testimony2.ownerWork'),
    },
    {
      id: 3,
      name: "Sarah Martinez",
      role: t('testimonials.testimony2.ownerTitle'),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
      content: t('testimonials.testimony3.ownerMessage'),
      rating: 5,
      project: t('testimonials.testimony3.ownerWork'),
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t('testimonials.title')}</h1>
            <p className="text-xl text-gray-200">{t('testimonials.description')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="text-sm text-primary font-semibold">
                  Project: {testimonial.project}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <FinalCTASection />
    </div>
  );
};

export default TestimonialsPage;