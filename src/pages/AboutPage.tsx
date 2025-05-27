import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FinalCTASection from '../components/CallToActionSection';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');
  const stats = [
    { icon: Award, label: t('about.yearsOfExperience'), value: '5+' },
    { icon: Users, label: t('about.happyClients'), value: '500+' },
    { icon: Clock, label: t('about.CompletedProjects'), value: '10+' },
    { icon: Target, label: t('about.DesignAwards'), value: '2+' },
  ];

  const team = [
    {
      name: 'Sarah Norton',
      role: t('about.team1.team1Role'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
      bio: t('about.team1.team1Bio'),
    },
    {
      name: 'Michael Chen',
      role: t('about.team2.team2Role'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop',
      bio: t('about.team2.team2Bio'),
    },
    {
      name: 'Emma Rodriguez',
      role: t('about.team3.team3Role'),
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop',
      bio: t('about.team2.team2Bio'),
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
            <h1 className="text-5xl font-bold mb-6">{t('about.aboutTitle')}</h1>
            <p className="text-xl text-gray-200">{t('about.aboutDescription')}</p>
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
              <h2 className="text-4xl font-bold mb-6 text-primary">{t('about.ourStory')}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-primary">{t('about.MissionTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.missionDescription')}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-primary">{t('about.vissionTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.vissionDescription')}
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
            <h2 className="text-4xl font-bold mb-4 text-primary">{t('about.valuesTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">{t('about.value1.value1Title')}</h3>
                <p>{t('about.value1.value1Description')}</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">{t('about.value2.value2Title')}</h3>
                <p>{t('about.value2.value2Description')}</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">{t('about.value3.value3Title')}</h3>
                <p>{t('about.value3.value3Description')}</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">{t('about.value4.value4Title')}</h3>
                <p>{t('about.value4.value4Description')}</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">{t('about.value5.value5Title')}</h3>
                <p>{t('about.value5.value5Description')}</p>
              </div>
              <div className="text-gray-600">
                <h3 className="text-2xl font-bold mb-2">{t('about.value6.value6Title')}</h3>
                <p>{t('about.value6.value6Description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">{t('about.meetOurTeamTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.meetOurTeamDescription')}</p>
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
      </section> */}
      <FinalCTASection />
    </div>
  );
};

export default AboutPage;