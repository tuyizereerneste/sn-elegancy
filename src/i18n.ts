import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English
import navbarEn from './i18n/en/navbar.json';
import heroEn from './i18n/en/hero.json';
import servicesEn from './i18n/en/services.json';
import ctaEn from './i18n/en/CallToAction.json';
import aboutEn from './i18n/en/about.json';
import testimonialsEn from './i18n/en/testimonials.json';
import contactEn from './i18n/en/contact.json';
import footerEn from './i18n/en/footer.json';
import chooseEn from './i18n/en/chooseUs.json';
import serviceSectionEn from './i18n/en/serviceSection.json';
import featureSectionEn from './i18n/en/featureSection.json';
import portfolioEn from './i18n/en/portfolio.json';
import loginEn from './i18n/en/login.json';

// French
import navbarFr from './i18n/fr/navbar.json';
import heroFr from './i18n/fr/hero.json';
import servicesFr from './i18n/fr/services.json';
import ctaFr from './i18n/fr/CallToAction.json';
import aboutFr from './i18n/fr/about.json';
import testimonialsFr from './i18n/fr/testimonials.json';
import contactFr from './i18n/fr/contact.json';
import footerFr from './i18n/fr/footer.json';
import chooseFr from './i18n/fr/chooseUs.json';
import serviceSectionFr from './i18n/fr/serviceSection.json';
import featureSectionFr from './i18n/fr/featureSection.json';
import portfolioFr from './i18n/fr/portfolio.json';
import loginFr from './i18n/fr/login.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        navbar: navbarEn,
        hero: heroEn,
        services: servicesEn,
        cta: ctaEn,
        about: aboutEn,
        testimonials: testimonialsEn,
        contact: contactEn,
        footer: footerEn,
        chooseUs: chooseEn,
        serviceSection: serviceSectionEn,
        featureSection: featureSectionEn,
        portfolio: portfolioEn,
        login: loginEn,
      },
      fr: {
        navbar: navbarFr,
        hero: heroFr,
        services: servicesFr,
        cta: ctaFr,
        about: aboutFr,
        testimonials: testimonialsFr,
        contact: contactFr,
        footer: footerFr,
        chooseUs: chooseFr,
        serviceSection: serviceSectionFr,
        featureSection: featureSectionFr,
        portfolio: portfolioFr,
        login: loginFr
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    ns: ['navbar',
          'hero',
          'services',
          'cta',
          'about',
          'testimonials',
          'contact',
          'footer',
          'chooseUs',
          'serviceSection',
          'featureSection',
          'portfolio',
          'login'],
  });

export default i18n;