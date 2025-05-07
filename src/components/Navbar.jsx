import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-6 px-4 sm:px-6 lg:px-8 shadow-soft"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          AI Swiss Knife
        </h1>
        {/* Future navigation links can go here */}
        <div>
           {/* <a href="#" className="text-gray-600 hover:text-accent transition-colors">Features</a> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 