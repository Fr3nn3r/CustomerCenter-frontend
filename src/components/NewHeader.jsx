import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NewHeader = ({ onLetsTalkClick }) => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/aisk.png"
              alt="AI Swiss Knife"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-ink">AI Swiss Knife</span>
          </div>

          {/* Nav + Language + CTA */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#case-studies"
                className="text-sm font-medium text-ink hover:text-swiss-red transition-colors duration-150"
              >
                {t('nav.caseStudies')}
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-ink hover:text-swiss-red transition-colors duration-150"
              >
                {t('nav.about')}
              </a>
            </nav>

            <LanguageSwitcher />

            <button
              onClick={onLetsTalkClick}
              className="bg-swiss-red text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#C00500] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-offset-2"
            >
              {t('nav.letsTalk')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
