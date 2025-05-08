import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, onClick, className = '', secondary = false }) => {
  // Primary button (default) - Swiss red with gradient
  const primaryClasses = `bg-gradient-to-r from-swiss-red to-[#F12B1E] text-white`;
  
  // Secondary button - White with red border and text
  const secondaryClasses = `bg-white text-swiss-red border-2 border-swiss-red`;
  
  // Base classes for both button types
  const baseClasses = `font-semibold py-3 px-8 rounded-lg shadow-button 
                       transition-all duration-250 ease-in-out 
                       focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-opacity-50`;
  
  return (
    <motion.button
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0px 8px 20px rgba(213, 43, 30, 0.3)"
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`${baseClasses} ${secondary ? secondaryClasses : primaryClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton; 