import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('footer');
  return (
    <footer className="bg-primary mt-12 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">{t('footer.title')}</h3>
            <p className="text-gray-300">{t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href=" https://www.instagram.com/sn_elegancy_abidjan?igsh=MXFnaXV3aGc4N3Z5bA==&utm_source=ig_contact_invite" className="hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-300 transition-colors">{t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300 transition-colors">{t('footer.links.services')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gray-300 transition-colors">{t('footer.links.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gray-300 transition-colors">{t('footer.links.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.ourServices.title')}</h4>
            <ul className="space-y-2">
              <li>{t('footer.ourServices.furnitures')}</li>
              <li>{t('footer.ourServices.plumbing')}</li>
              <li>{t('footer.ourServices.electricity')}</li>
              <li>{t('footer.ourServices.masonry')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+225 0713131355</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@snelegancy.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>8éme tranche Angres, Abidjan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} SN Elegancy. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;