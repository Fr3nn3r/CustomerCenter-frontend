import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const calendlyLink = "https://calendly.com/frederic-brunner";

  const handleBookCall = () => {
    window.open(calendlyLink, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'bg-white/80 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}
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

          {/* Navigation placeholder - kept for spacing if needed in future */}
          <nav className="hidden md:flex space-x-10">
            {/* Links can go here */}
          </nav>

          {/* Right side CTA Button */}
          <div className="flex items-center">
            <CTAButton onClick={handleBookCall} className="text-sm py-2 px-4 md:text-base md:py-2.5 md:px-6">
              Book Intro Call
            </CTAButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 