import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FlagIcon = ({ code }) => {
  const flags = {
    en: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#012169" d="M0 0h640v480H0z"/>
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
        <path fill="#C8102E" d="M0 193v94h640v-94H0zM273 0v480h94V0h-94z"/>
      </svg>
    ),
    fr: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#002654" d="M0 0h213.3v480H0z"/>
        <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
        <path fill="#ED2939" d="M426.7 0H640v480H426.7z"/>
      </svg>
    ),
    de: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#000" d="M0 0h640v160H0z"/>
        <path fill="#D00" d="M0 160h640v160H0z"/>
        <path fill="#FFCE00" d="M0 320h640v160H0z"/>
      </svg>
    ),
    it: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#009246" d="M0 0h213.3v480H0z"/>
        <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
        <path fill="#CE2B37" d="M426.7 0H640v480H426.7z"/>
      </svg>
    )
  };
  return flags[code];
};

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'it', label: 'IT' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-offwhite transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-offset-2"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <FlagIcon code={currentLang.code} />
        <span className="text-sm font-medium text-ink leading-none">{currentLang.label}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-offwhite transition-colors duration-150 ${
                lang.code === currentLang.code ? 'bg-offwhite' : ''
              }`}
            >
              <FlagIcon code={lang.code} />
              <span className="text-sm font-medium text-ink leading-none">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
