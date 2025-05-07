import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-10 w-auto" src="/aisk.png" alt="AI Swiss Knife Logo" /> 
              {/* <span className="ml-3 text-xl font-semibold text-gray-800">AI Swiss Knife</span> */}
            </a>
          </div>

          {/* Navigation placeholder */}
          <nav className="hidden md:flex space-x-10">
            {/* <a href="#features" className={`text-base font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-200 hover:text-white'} hover:text-accent transition-colors`}>Features</a>
            <a href="#pricing" className={`text-base font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-200 hover:text-white'} hover:text-accent transition-colors`}>Pricing</a> */}
          </nav>

          {/* Right side (e.g., CTA or future auth links) - can be a placeholder */}
          <div className="flex items-center">
            {/* Example: <CTAButton onClick={() => {}} className="text-sm py-2 px-4">Sign Up</CTAButton> */}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 