import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
  const calendlyLink = "https://calendly.com/frederic-brunner";

  const handleBookCall = () => {
    window.open(calendlyLink, '_blank', 'noopener,noreferrer');
  };

  // Simplified container variant - only fades itself in
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 }, // Delay for container to appear after header
    },
  };

  // Item variants still define the start and end states
  const heroItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // transition will be defined per item, now with standard easing
    },
  };

  // Corrected logging function
  const handleAnimationComplete = (elementType, definition) => {
    console.log(`${elementType} animation complete. Definition:`, definition);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Header />

      <motion.section
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={(definition) => handleAnimationComplete('SECTION', definition)}
        className="flex-grow flex flex-col items-center justify-center text-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1
            variants={heroItemVariants} 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }} // Changed to standard ease, item specific delay
            onAnimationComplete={(definition) => handleAnimationComplete('H1', definition)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Your AI <span className="text-swiss-red">Swiss Army Knife</span>
          </motion.h1>
          <motion.p
            variants={heroItemVariants} 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }} // Changed to standard ease, item specific delay
            onAnimationComplete={(definition) => handleAnimationComplete('P', definition)}
            className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-10"
          >
            A versatile AI tool for entrepreneurs and small businesses.
          </motion.p>
          <motion.div 
            variants={heroItemVariants} 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }} // Changed to standard ease, item specific delay
            onAnimationComplete={(definition) => handleAnimationComplete('BUTTON DIV', definition)}
          >
            <CTAButton onClick={handleBookCall} className="text-lg py-4 px-10">
              Book a Call
            </CTAButton>
          </motion.div>
        </div>
      </motion.section>

      <Features />

      <Footer />
    </div>
  );
};

export default Home; 