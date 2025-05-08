import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const Header = ({ onBookCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkBaseStyle = "text-base font-medium transition-colors duration-250 ease-in-out relative";
  const navLinkStyle = "text-neutral-800 hover:text-swiss-red";
  
  // Active indicator style for nav links
  const LinkIndicator = () => (
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-swiss-red transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled 
                    ? 'bg-white/95 shadow-header backdrop-blur-md py-3' 
                    : 'bg-white py-5'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-10 w-auto" src="/aisk.png" alt="AI Swiss Knife Logo" /> 
              <span className="ml-3 text-xl font-bold text-neutral-900">
                AI Swiss Knife
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-10">
              <a 
                href="#how-it-works" 
                className={`${navLinkBaseStyle} ${navLinkStyle} group`}
              >
                How it works
                <LinkIndicator />
              </a>
              <a 
                href="#faqs" 
                className={`${navLinkBaseStyle} ${navLinkStyle} group`}
              >
                FAQs
                <LinkIndicator />
              </a>
            </nav>
            <CTAButton 
              onClick={onBookCall} 
              className="text-sm py-2.5 px-5 md:text-base md:py-3 md:px-6"
            >
              Book Intro Call
            </CTAButton>
          </div>

          {/* Mobile menu button - can be expanded later */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-neutral-800 hover:text-swiss-red hover:bg-neutral-100 transition-colors duration-250">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 