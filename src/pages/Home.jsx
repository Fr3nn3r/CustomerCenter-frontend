import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';
import PainPoints from '../components/PainPoints';
import SolutionSection from '../components/SolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import { CALENDLY_LINK } from '../constants';

const Home = () => {
  const handleBookCall = () => {
    window.open(CALENDLY_LINK, '_blank', 'noopener,noreferrer');
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
      <Header onBookCall={handleBookCall} />

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
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            onAnimationComplete={(definition) => handleAnimationComplete('H1', definition)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            <span className="text-swiss-red">Hands-off sales systems</span><br />for B2B Financial Advisors
          </motion.h1>
          <motion.p
            variants={heroItemVariants} 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            onAnimationComplete={(definition) => handleAnimationComplete('P', definition)}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Get 5-10 Serious Conversations With Potential Clients In One Month... <br className="hidden sm:block" />Or We'll Continue Working At Our Expense Until You Do
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

      <PainPoints />
      <SolutionSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection onBookCall={handleBookCall} />

      <Footer />
    </div>
  );
};

export default Home; 