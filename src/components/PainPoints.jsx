import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.6
    }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const solutionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5, // Delay slightly after root cause
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.7
    }
  }
};

// Stagger container for the 'But Why' sequence
const listContainerVariants = {
  hidden: { opacity: 1 }, // Container itself doesn't fade
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger each child
      delayChildren: 0.2   // Delay start after surface problem
    }
  }
};

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-20 sm:py-28 bg-gradient-to-b from-neutral-50 to-neutral-100"> {/* Subtle gradient background */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-900 mb-4"
          >
            Struggling with Practice Growth?
          </h2>
        </motion.div>
        
        {/* Main content container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Stagger Problem, List, Cause, Solution
          className="space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-neutral-200/70" // Enhanced shadow/border
        >
          {/* Surface Problem */}
          <motion.div variants={paragraphVariants}>
            <h3 className="text-xl sm:text-2xl text-neutral-800 font-semibold mb-2"> 
              The Surface Problem
            </h3>
            <p className="text-lg text-neutral-600">
              Inconsistent flow of qualified new clients
            </p>
          </motion.div>

          <motion.hr className="border-neutral-200" variants={paragraphVariants}/>

          {/* "But Why?" Sequence */}
          <motion.div 
            className="space-y-4 pl-4 border-l-2 border-swiss-red/30" // Indent + subtle left border
            variants={listContainerVariants}
          > 
            {[ // Array for easier mapping and staggering
              "Most marketing efforts are episodic rather than systematic",
              "You don't have time to create and maintain a client acquisition system",
              "You're already fully occupied serving existing clients",
              "Financial professionals excel at technical work, not marketing",
              "Word-of-mouth is insufficient to sustain your practice growth"
            ].map((reason, index) => (
              <motion.p 
                key={index}
                className="text-lg text-neutral-700"
                variants={paragraphVariants} // Use paragraph variant for each item
              >
                <span className="font-medium text-swiss-red mr-2">›</span> {reason} {/* Use red arrow & margin */}
              </motion.p>
            ))}
          </motion.div>

          <motion.hr className="border-neutral-200" variants={paragraphVariants}/>

          {/* Root Cause */}
          <motion.div variants={paragraphVariants}> 
            <h3 className="text-xl sm:text-2xl text-neutral-800 font-semibold mb-2">
              The Root Cause
            </h3>
            <p className="text-lg text-neutral-600">
              Serving your clients is your highest leverage skill. Finding prospects is not.
            </p>
          </motion.div>

          <motion.hr className="border-neutral-300 border-dashed my-6" variants={paragraphVariants}/>

          {/* The Solution */}
          <motion.div 
            className="bg-swiss-red/5 p-6 rounded-lg border border-swiss-red/20 text-center" // Highlight box for solution
            variants={solutionVariants} // Special animation
          >
            <p 
              className="text-lg sm:text-xl text-swiss-red font-semibold italic"
            >
              We connect you directly with your ideal prospects so you just have to close the deal to acquire <span className="font-bold not-italic">net new clients</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints; 