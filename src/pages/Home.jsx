import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';
import ProblemSolutionSection from '../components/PainPoints';
import Benefits from '../components/Features';
import HowItWorksSection from '../components/HowItWorksSection';
import ComplianceSection from '../components/ComplianceSection';
import ResultsSection from '../components/ResultsSection';
import ROICalculator from '../components/ROICalculator';
import BuyersSection from '../components/BuyersSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import { CALENDLY_LINK, HERO_CONTENT } from '../constants';

const Home = () => {
  const handleBookCall = () => {
    window.open(CALENDLY_LINK, '_blank', 'noopener,noreferrer');
  };

  const scrollToROI = () => {
    document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced container animations
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    },
  };

  // Enhanced item animations with more dynamic motion
  const heroItemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
  };

  // Enhanced section reveal animation for scroll transitions
  const sectionReveal = {
    offscreen: { y: 80, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans">
      <Header onBookCall={handleBookCall} />

      {/* Hero Section with enhanced styling and animations */}
      <motion.section
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-100"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            variants={heroItemVariants} 
            className="mb-6 inline-block"
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.2 } 
            }}
          >
            <span className="bg-swiss-red bg-opacity-10 text-swiss-red rounded-full px-4 py-1.5 text-sm font-semibold">
              Trusted by leading insurers technology teams
            </span>
          </motion.div>
          
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight mb-8"
          >
            {HERO_CONTENT.headline}
          </motion.h1>
          
          <motion.p
            variants={heroItemVariants}
            className="text-lg sm:text-xl text-neutral-800 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {HERO_CONTENT.subhead}
          </motion.p>

          {/* Trust Bar */}
          <motion.div
            variants={heroItemVariants}
            className="mb-10"
          >
            <p className="text-sm text-neutral-600 mb-4">We build AI agents that plug into your existing systems and automate the back-end work your team should not be doing.</p>
  
          </motion.div>
          
          <motion.div 
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              animate={{ 
                y: [0, -8, 0], 
                transition: { 
                  duration: 2,
                  ease: "easeInOut", 
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            >
              <CTAButton 
                onClick={handleBookCall} 
                className="text-lg py-4 px-10"
              >
                {HERO_CONTENT.ctaPrimary}
              </CTAButton>
            </motion.div>
            
          </motion.div>
        </div>
      </motion.section>

      {/* Content sections with enhanced scroll reveal animations */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <ProblemSolutionSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <Benefits />
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
        <ComplianceSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <ResultsSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <ROICalculator />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <BuyersSection />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <TeamSection />
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