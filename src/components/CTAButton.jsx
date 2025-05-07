import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 5px 15px rgba(227, 6, 19, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`bg-accent text-white font-semibold py-3 px-8 rounded-lg shadow-soft hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton; 