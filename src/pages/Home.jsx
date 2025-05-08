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

  // Container animations
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    },
  };

  // Item animations with improved easing
  const heroItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing for smoother animations
      }
    },
  };

  // Section reveal animation for scroll transitions
  const sectionReveal = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans">
      <Header onBookCall={handleBookCall} />

      {/* Hero Section with enhanced styling */}
      <motion.section
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-100"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={heroItemVariants} className="mb-6 inline-block">
            <span className="bg-swiss-red bg-opacity-10 text-swiss-red rounded-full px-4 py-1.5 text-sm font-semibold">
              For B2B Financial Advisors
            </span>
          </motion.div>
          
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight mb-6"
          >
            <span className="text-swiss-red relative inline-block">
              Hands-off sales systems
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-swiss-red rounded-full transform translate-y-2 opacity-60"></span>
            </span>
            <br />for B2B Financial Advisors
          </motion.h1>
          
          <motion.p
            variants={heroItemVariants}
            className="text-lg sm:text-xl text-neutral-800 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get 5-10 Serious Conversations With Potential Clients In One Month...
            <br className="hidden sm:block" />
            <span className="font-medium">Or We'll Continue Working At Our Expense Until You Do</span>
          </motion.p>
          
          <motion.div variants={heroItemVariants}>
            <CTAButton 
              onClick={handleBookCall} 
              className="text-lg py-4 px-10"
            >
              Book a Call
            </CTAButton>
          </motion.div>
        </div>
      </motion.section>

      {/* Content sections with scroll reveal animations */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <PainPoints />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <SolutionSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <HowItWorksSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <FinalCTASection onBookCall={handleBookCall} />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home; 