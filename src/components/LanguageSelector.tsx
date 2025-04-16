// src/components/LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1 cursor-pointer" onClick={() => handleLanguageChange('en')}>
        <img src="/uk.jpg" alt="EN" className="h-5 w-5 rounded-full" />
        <span className="text-sm text-white">English</span>
      </div>
      <div className="flex items-center space-x-1 cursor-pointer" onClick={() => handleLanguageChange('fr')}>
        <img src="/fr.jpg" alt="FR" className="h-5 w-5 rounded-full" />
        <span className="text-sm text-white">Français</span>
      </div>
    </div>
  );
};

export default LanguageSelector;