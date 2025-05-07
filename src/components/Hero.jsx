import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const Hero = () => {
  const calendlyLink = "https://calendly.com/your-meeting-link"; // Replace with your actual Calendly link

  const handleBookCall = () => {
    window.open(calendlyLink, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3, // Delay after navbar animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20 sm:py-32 bg-white text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          The All-in-One AI <span className="text-accent">Swiss Knife</span>
          <br />
          for Smart Entrepreneurs
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Stop juggling tools. Start growing your business. AI Swiss Knife brings you the power of multiple AI applications in one intuitive platform.
        </motion.p>
        <motion.div variants={itemVariants}>
          <CTAButton onClick={handleBookCall}>
            Book a Call
          </CTAButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 