import React from 'react';
import { motion } from 'framer-motion';

// Enhanced animations for title
const titleVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
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

// Enhanced text fade-in with slight movement
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.7
    }
  }
};

// Highlight animation for special text
const highlightVariants = {
  hidden: { color: "#333333", scale: 1 },
  visible: { color: "#D52B1E", scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.2 } 
  }
};

// Testimonial card animation
const testimonialVariants = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 0.8,
      delay: 0.4
    }
  },
  hover: {
    y: -10,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const SolutionSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white text-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Transform Your Practice Growth{" "}
          <br className="hidden sm:block" />
          Without Sacrificing Your{" "}
          <motion.span 
            className="text-swiss-red inline-block"
            whileHover="hover"
            variants={highlightVariants}
          >
            Standards
          </motion.span>
        </motion.h2>

        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="text-lg text-neutral-700 mb-8 leading-relaxed"
        >
          What if you could implement a client acquisition system that works 24/7, even during your busiest tax seasons? Imagine checking your inbox each morning to find conversations with pre-qualified prospects who actually need your services—all without you having to spend hours on marketing activities.
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-800 mb-3">
            <motion.span 
              className="text-swiss-red inline-block"
              initial={{ opacity: 0.8 }}
              whileInView={{
                opacity: [0.8, 1, 0.8],
                transition: { 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }
              }}
              viewport={{ once: true }}
            >
              CustomerCenter™ System
            </motion.span> delivers.
          </h3>
          <p className="text-md text-neutral-600">
            For Swiss{" "}
            <motion.span 
              className="font-medium text-neutral-800"
              whileHover={{ 
                color: "#D52B1E", 
                transition: { duration: 0.2 } 
              }}
            >
              B2B Financial Advisors
            </motion.span> like you.
          </p>
        </motion.div>

        {/* Testimonial Block with enhanced animations */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={testimonialVariants}
          className="bg-neutral-100 p-6 sm:p-8 rounded-xl shadow-soft mb-12 text-left border border-neutral-200/80 relative overflow-hidden"
        >
          {/* Decorative quote mark */}
          <motion.div 
            className="absolute -top-4 -left-4 text-swiss-red text-opacity-5 select-none pointer-events-none z-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.6, duration: 0.5 }
            }}
            viewport={{ once: true }}
            style={{ fontSize: "150px" }}
          >
            "
          </motion.div>
          
          <motion.p 
            className="text-neutral-700 italic leading-relaxed mb-4 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.7, duration: 0.5 } 
            }}
            viewport={{ once: true }}
          >
            "Take Thomas from Zürich, for example. As a senior tax advisor with over 20 years of experience, he was excellent at serving clients but struggled to grow his practice consistently. Within just 6 weeks of implementing our system, he generated{" "}
            <motion.strong 
              className="text-swiss-red"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              8 new client conversations
            </motion.strong>{" "}
            and converted{" "}
            <motion.strong 
              className="text-swiss-red"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              4 into long-term engagements
            </motion.strong>
            —adding over{" "}
            <motion.strong 
              className="text-swiss-red"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              CHF 45,000 in annual recurring revenue
            </motion.strong>{" "}
            while reducing his marketing time by over 90%."
          </motion.p>
          
          <motion.p 
            className="text-right text-neutral-600 font-semibold relative z-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { delay: 0.9, duration: 0.5 } 
            }}
            viewport={{ once: true }}
          >
            - Thomas K., Senior Tax Advisor, Zürich
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          <motion.h4 
            className="text-xl font-semibold text-neutral-800 mb-3"
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            The Secret? A Swiss-Engineered Approach
          </motion.h4>
          <p className="text-lg text-neutral-700 leading-relaxed">
            It combines precision targeting, cultural calibration, and{" "}
            <motion.span 
              className="inline-block"
              whileHover={{ 
                color: "#D52B1E", 
                scale: 1.03,
                transition: { duration: 0.2 } 
              }}
            >
              ethical automation
            </motion.span>
            —all aligned with the professional standards and privacy requirements you uphold.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection; 