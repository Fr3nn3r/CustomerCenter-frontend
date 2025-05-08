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

  const navLinkBaseStyle = "text-base font-medium transition-colors duration-300 ease-in-out";
  const navLinkScrolledStyle = "text-gray-700 hover:text-swiss-red";
  const navLinkTopStyle = "text-gray-700 hover:text-swiss-red"; // Initially dark for visibility over potentially light hero
  // If your hero is always dark, you could use: "text-white hover:text-gray-300";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-10 w-auto" src="/aisk.png" alt="AI Swiss Knife Logo" /> 
              <span className="ml-3 text-xl font-semibold text-gray-800">
                AI Swiss Knife
              </span>
            </a>
          </div>

          {/* Right Aligned Group: Navigation Links + CTA Button */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <a 
                href="#how-it-works" 
                className={`${navLinkBaseStyle} ${isScrolled ? navLinkScrolledStyle : navLinkTopStyle}`}
              >
                How it works
              </a>
              <a 
                href="#faqs" 
                className={`${navLinkBaseStyle} ${isScrolled ? navLinkScrolledStyle : navLinkTopStyle}`}
              >
                FAQs
              </a>
            </nav>
            <CTAButton onClick={onBookCall} className="text-sm py-2 px-4 md:text-base md:py-2.5 md:px-6">
              Book Intro Call
            </CTAButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 