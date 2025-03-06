import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Clock, label: 'Projects Completed', value: '1000+' },
    { icon: Target, label: 'Design Awards', value: '25+' },
  ];

  const team = [
    {
      name: 'Sarah Norton',
      role: 'Principal Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
      bio: 'With over 15 years of experience in luxury interior design, Sarah leads our creative vision.',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop',
      bio: 'Michael specializes in sustainable architecture and innovative space planning.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop',
      bio: 'Emma ensures every project is delivered on time and exceeds client expectations.',
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
            <h1 className="text-5xl font-bold mb-6">About SN Elegancy</h1>
            <p className="text-xl text-gray-200">
              We are passionate about creating extraordinary spaces that inspire,
              comfort, and elevate the way people live and work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, SN Elegancy has grown from a small design studio
                  to one of the most respected names in interior design and renovation.
                </p>
                <p>
                  Our journey has been defined by our unwavering commitment to excellence,
                  innovation, and our clients' satisfaction. We believe that every space
                  has a story to tell, and we're here to help tell it beautifully.
                </p>
                <p>
                  Today, we continue to push boundaries and set new standards in the
                  industry, bringing dreams to life one space at a time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mission is to transform spaces into inspiring, functional, and beautiful environments
              that reflect our clients' unique personalities and needs. We strive to exceed expectations
              through innovative design, exceptional craftsmanship, and unparalleled customer service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our vision is to be the leading interior design firm, recognized for our creativity,
              integrity, and the positive impact we have on people's lives through the spaces we create.
              We aim to inspire and set trends in the industry while fostering long-lasting relationships
              with our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">Integrity</h3>
                <p>We uphold the highest standards of honesty and transparency in all our actions.</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                <p>We foster creativity and embrace new ideas to stay at the forefront of design trends.</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">Excellence</h3>
                <p>We are committed to delivering exceptional quality in every project we undertake.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of designers, architects, and project managers work
              together to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;