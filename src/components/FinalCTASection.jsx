import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton'; // Assuming CTAButton is in the same folder or path is adjusted
import { FaLinkedin } from 'react-icons/fa'; // Using react-icons for LinkedIn icon

// Enhanced container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Enhanced content animation
const contentVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 60, 
      damping: 12,
      duration: 0.8 
    }
  }
};

// Enhanced image animation
const imageVariants = {
  hidden: { opacity: 0, scale: 0.92, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 60,
      damping: 14,
      delay: 0.4,
      duration: 1.0
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 }
  }
};

// Quote animation
const quoteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 15,
      delay: 0.5,
      duration: 0.8
    }
  },
  hover: {
    y: -5,
    boxShadow: "0px 10px 25px rgba(213, 43, 30, 0.1)",
    transition: { duration: 0.3 }
  }
};

const FinalCTASection = ({ onBookCall }) => { // Accept onBookCall as a prop
  const linkedInUrl = "https://www.linkedin.com/in/frdbrunner/";
  const founderImage = "/fred_professional_suit_tie.jpg"; // Updated image path

  return (
    <section className="py-16 sm:py-24 bg-neutral-100 overflow-hidden relative">
      {/* Decorative background shapes */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-swiss-red opacity-5 rounded-full -mr-32 -mt-32"
        initial={{ scale: 0 }}
        whileInView={{ 
          scale: 1, 
          transition: { duration: 1.5, ease: "easeOut" } 
        }}
        viewport={{ once: true }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-swiss-red opacity-5 rounded-full -ml-48 -mb-48"
        initial={{ scale: 0 }}
        whileInView={{ 
          scale: 1, 
          transition: { duration: 1.5, ease: "easeOut", delay: 0.2 } 
        }}
        viewport={{ once: true }}
      />
    
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Column: Text content */}
          <motion.div 
            variants={contentVariants} 
            className="text-center md:text-left"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
              whileHover={{ 
                scale: 1.02, 
                transition: { duration: 0.2 } 
              }}
            >
              Ready to boost your{" "}
              <motion.span 
                className="text-swiss-red relative inline-block"
                initial={{ opacity: 0.9 }}
                whileInView={{
                  opacity: [0.9, 1, 0.9],
                  transition: { 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeInOut" 
                  }
                }}
                viewport={{ once: true }}
              >
                Client Acquisition?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-neutral-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1, 
                transition: { delay: 0.3, duration: 0.8 } 
              }}
              viewport={{ once: true }}
            >
              Book a call directly with AI Swiss Knife founder,{" "}
              <motion.strong 
                className="text-neutral-800"
                whileHover={{ 
                  color: "#D52B1E", 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
              >
                Frederic Brunner
              </motion.strong>. With over 30 years of experience in the software industry, Frederic can help you map out a clear path to sustainable growth.
            </motion.p>
            
            <motion.blockquote 
              className="relative p-5 text-neutral-700 border-l-4 border-swiss-red bg-white shadow-soft rounded-r-md mb-8 overflow-hidden"
              variants={quoteVariants}
              whileHover="hover"
            >
              {/* Large decorative quote mark */}
              <motion.div 
                className="absolute -top-2 -left-2 text-swiss-red text-opacity-5 select-none pointer-events-none z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.6, duration: 0.5 } 
                }}
                viewport={{ once: true }}
                style={{ fontSize: "120px" }}
              >
                "
              </motion.div>
            
              <motion.p 
                className="italic mb-2 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  transition: { delay: 0.7, duration: 0.5 } 
                }}
                viewport={{ once: true }}
              >
                "'If you're going to do something, do it properly or go back to making cheese.' my grandmother used to say. While I still make a decent Gruyère on weekends, during the week we're focused on being the growth partners that Swiss businesses can actually count on."
              </motion.p>
              
              <motion.p 
                className="text-right font-semibold text-neutral-700 relative z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.9, duration: 0.5 } 
                }}
                viewport={{ once: true }}
              >
                - Frederic Brunner
              </motion.p>
            </motion.blockquote>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring",
                  stiffness: 60,
                  damping: 12,
                  delay: 0.7
                } 
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                animate={{ 
                  y: [0, -5, 0], 
                  transition: { 
                    duration: 2.5,
                    ease: "easeInOut", 
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }
                }}
              >
                <CTAButton onClick={onBookCall} className="w-full sm:w-auto text-lg py-3.5 px-8">
                  Book Your Intro Call
                </CTAButton>
              </motion.div>
              
              <motion.a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-neutral-600 hover:text-swiss-red transition-colors duration-250 group"
                whileHover={{ 
                  scale: 1.05, 
                  x: 5,
                  transition: { duration: 0.2 } 
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  className="mr-2"
                >
                  <FaLinkedin className="h-6 w-6 text-neutral-400 group-hover:text-swiss-red transition-colors duration-250" />
                </motion.div>
                Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Founder Image */}
          <motion.div 
            className="flex justify-center md:justify-end mt-8 md:mt-0"
            variants={imageVariants}
            whileHover="hover"
          >
            <img 
              src={founderImage} 
              alt="Frederic Brunner, Founder of AI Swiss Knife"
              className="rounded-xl shadow-soft-lg w-full max-w-sm h-auto object-cover aspect-square"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection; 