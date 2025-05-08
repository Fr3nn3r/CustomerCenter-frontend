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
              For B2B Financial Advisors
            </span>
          </motion.div>
          
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight mb-8"
          >
            <motion.span
              className="text-swiss-red inline-block"
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.2 } 
              }}
            >
              Hands-off sales systems
            </motion.span>
            <div className="h-2"></div> {/* Space between title lines */}
            <span className="inline-block relative">
              for B2B Financial Advisors
              <motion.span 
                className="absolute -bottom-3 left-0 w-full h-1 bg-swiss-red rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: 1, 
                  opacity: 0.6,
                  transition: { 
                    delay: 1.2, 
                    duration: 0.8, 
                    ease: "easeOut" 
                  } 
                }}
              ></motion.span>
            </span>
          </motion.h1>
          
          <motion.p
            variants={heroItemVariants}
            className="text-lg sm:text-xl text-neutral-800 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get 5-10 Serious Conversations With Potential Clients In One Month...
            <br className="hidden sm:block" />
            <motion.span 
              className="font-medium inline-block"
              whileHover={{ 
                scale: 1.02, 
                color: "#D52B1E",
                transition: { duration: 0.2 } 
              }}
            >
              Or We'll Continue Working At Our Expense Until You Do
            </motion.span>
          </motion.p>
          
          <motion.div 
            variants={heroItemVariants}
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
              Book a Call
            </CTAButton>
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