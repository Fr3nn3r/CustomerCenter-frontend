import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../constants';

// Animation variants

// Enhanced title animation
const titleVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
      duration: 0.8
    }
  }
};

// Enhanced card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: item => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: item.id * 0.15,
      duration: 0.6
    }
  }),
  hover: {
    y: -15,
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

// Icon animation
const iconVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10,
      duration: 0.5,
      delay: 0.2
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    color: "#D52B1E",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const HowItWorksSection = () => {
  return (
    <section 
      id="how-it-works"
      className="py-16 sm:py-24 bg-neutral-100 overflow-hidden" // Added overflow hidden for animations
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-h2 text-neutral-900 text-center mb-12 sm:mb-16"
        >
          How AI Swiss Knife Works
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <motion.div 
              key={step.step} 
              custom={{ id: step.step }}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-250 border border-neutral-200 relative"
            >
              {/* Step Number */}
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-swiss-red text-white rounded-full flex items-center justify-center font-bold text-sm"
                variants={iconVariants}
              >
                {step.step}
              </motion.div>
              
              <motion.div 
                className="text-4xl mb-4 mt-4"
                variants={iconVariants}
                whileHover="hover"
              >
                {step.icon}
              </motion.div>
              
              <div>
                <motion.h3 
                  className="text-h3 text-neutral-800 mb-3"
                  whileHover={{ 
                    color: "#D90429", 
                    scale: 1.02, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="text-body text-neutral-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    transition: { delay: 0.3 + step.step * 0.1, duration: 0.5 } 
                  }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </div>
              
              {/* Arrow connector (except for last step) */}
              {step.step < 3 && (
                <motion.div 
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ 
                    opacity: 0.3, 
                    x: 0,
                    transition: { delay: 0.5 + step.step * 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true }}
                >
                  <svg className="w-8 h-8 text-swiss-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Audit Log Code Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.8, duration: 0.6 }
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 bg-neutral-900 rounded-lg p-6 text-green-400 font-mono text-sm max-w-2xl mx-auto"
        >
          <div className="mb-2 text-neutral-400"># Sample Audit Trail</div>
          <div>2024-01-15 14:23:15 | INGEST | Document processed: policy_claim_4821.pdf</div>
          <div>2024-01-15 14:23:16 | VALIDATE | Data integrity: ✓ PASSED</div>
          <div>2024-01-15 14:23:17 | AUTOMATE | Decision: APPROVE | Confidence: 94%</div>
          <div>2024-01-15 14:23:18 | AUDIT | Action logged with full context</div>
        </motion.div>
        
        {/* Decorative background element */}
        <motion.div 
          className="absolute -right-20 top-1/3 w-64 h-64 bg-swiss-red opacity-5 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ 
            scale: 1, 
            opacity: 0.05,
            transition: { duration: 1.5, ease: "easeOut" }
          }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection; 