import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      interface ContactResponse {
        message: string;
      }

      const response = await axios.post<ContactResponse>('https://sn-elegancy-project.onrender.com/message/create', formData);

      if (response.data.message) {
        setResponseMessage('Your message has been sent successfully!');
      }
    } catch (error) {
      setResponseMessage('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-gray-200">{t('contact.description')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">{t('contact.getInTouch.title')}</h2>
                <p className="text-gray-600 mb-8">{t('contact.getInTouch.description')}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">{t('contact.getInTouch.visitUs')}</h3>
                    <p className="text-gray-600">
                      8éme tranche Angres<br />
                      Abidjan, Côte d'Ivoire<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">{t('contact.getInTouch.callUs')}</h3>
                    <p className="text-gray-600">+225 0713131355</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">{t('contact.getInTouch.emailUs')}</h3>
                    <p className="text-gray-600">info@snelegancy.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">{t('contact.getInTouch.officeHours')}</h3>
                    <p className="text-gray-600">{t('contact.getInTouch.monday')} - {t('contact.getInTouch.friday')}: 8:00 AM - 5:00 PM<br />
                      {t('contact.getInTouch.saturday')}: 10:00 AM - 2:00 PM<br />
                      {t('contact.getInTouch.sunday')}: {t('contact.getInTouch.closed')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary">{t('contact.sendMessage.title')}</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.sendMessage.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.sendMessage.emailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.sendMessage.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.sendMessage.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : t('contact.sendMessage.sendButton')}
                  </button>
                </div>

                {responseMessage && (
                  <div className="mt-6 text-center text-gray-600">
                    <p>{responseMessage}</p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3972.146686395449!2d-3.9848795250160407!3d5.394607494584435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMjMnNDAuNiJOIDPCsDU4JzU2LjMiVw!5e0!3m2!1sen!2srw!4v1744305903888!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;