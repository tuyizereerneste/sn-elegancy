import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div
    key={index}
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
    <p className="text-gray-700 italic">{testimonial.quote}</p>
  </motion.div>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
      quote: 'SN Elegancy transformed our home beyond our expectations. Their attention to detail and creativity is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
      quote: 'Professional, innovative, and reliable. They delivered our office renovation project on time and within budget.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
      quote: "Working with SN Elegancy was a pleasure. Their team's expertise and creativity are truly remarkable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;