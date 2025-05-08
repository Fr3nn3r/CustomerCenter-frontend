import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 6px 18px rgba(227, 6, 19, 0.45)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={onClick}
      className={`bg-swiss-red hover:bg-red-700 text-white font-semibold tracking-wide py-3 px-8 rounded-lg shadow-crisp hover:shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-60 transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton; 