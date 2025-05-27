import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const showTransparent = isHome && !isScrolled;

  const navLinks = [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.about'), href: '/about' },
    { name: t('navbar.services'), href: '/services' },
    { name: t('navbar.portfolio'), href: '/portfolio' },
    { name: t('navbar.testimonials'), href: '/testimonials' },
    { name: t('navbar.blog'), href: '/blog' },
    { name: t('navbar.contact'), href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        showTransparent ? 'bg-transparent' : 'bg-primary shadow-md'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/LOGO.jpg" alt="Logo" className="h-10 w-12 mr-2" />
            <span className="text-2xl font-display font-bold text-white">
              SN Elegancy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium transition ${
                    isActive ? 'text-primary-light font-semibold' : 'text-white hover:text-primary-light'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <LanguageSelector />

            <Link to="/login" className="btn-primary px-4 py-2 text-sm">{t('navbar.login')}</Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded bg-white shadow-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block transition ${
                    isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Language Switcher for Mobile */}
            <LanguageSelector />

            <Link
              to="/login"
              className="block w-full text-center mt-3 btn-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}

      </div>
    </nav>
  );
};

export default Navbar;