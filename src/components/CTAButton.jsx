import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, onClick, className = '', secondary = false }) => {
  // Primary button (default) - Swiss red with gradient
  const primaryClasses = `bg-gradient-to-r from-swiss-red to-[#F12B1E] text-white relative overflow-hidden group`;
  
  // Secondary button - White with red border and text
  const secondaryClasses = `bg-white text-swiss-red border-2 border-swiss-red relative overflow-hidden group`;
  
  // Base classes for both button types
  const baseClasses = `font-semibold py-3 px-8 rounded-lg shadow-button 
                       transition-all duration-250 ease-in-out 
                       focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-opacity-50`;
  
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 10px 25px rgba(213, 43, 30, 0.4)"
      }}
      whileTap={{ 
        scale: 0.97,
        boxShadow: "0px 5px 15px rgba(213, 43, 30, 0.3)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15
      }}
      onClick={onClick}
      className={`${baseClasses} ${secondary ? secondaryClasses : primaryClasses} ${className}`}
    >
      {/* Animated gradient overlay effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
      
      {/* Subtle pulse effect */}
      <motion.span 
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            "0px 0px 0px 0px rgba(213, 43, 30, 0)",
            "0px 0px 0px 4px rgba(213, 43, 30, 0.2)",
            "0px 0px 0px 0px rgba(213, 43, 30, 0)"
          ]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default CTAButton; 