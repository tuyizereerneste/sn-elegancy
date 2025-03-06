import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';


const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Thompson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
      content: "Working with SN Elegancy was an absolute dream. They transformed our dated living space into a modern, functional haven that perfectly reflects our style. Their attention to detail and professional approach made the entire process seamless.",
      rating: 5,
      project: "Modern Apartment Renovation"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
      content: "The team at SN Elegancy brought our vision for a contemporary dining space to life. Their innovative design solutions and understanding of commercial requirements resulted in a restaurant that our customers love.",
      rating: 5,
      project: "Fine Dining Restaurant Design"
    },
    {
      id: 3,
      name: "Sarah Martinez",
      role: "CEO, Tech Startup",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
      content: "Our office renovation by SN Elegancy has completely transformed our workplace. The thoughtful design has improved team collaboration and created an inspiring environment that our employees love coming to every day.",
      rating: 5,
      project: "Office Space Renovation"
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
            <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-200">
              Hear what our clients have to say about their experience with SN Elegancy.
            </p>
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
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8">
              Join our satisfied clients and transform your space with SN Elegancy.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;