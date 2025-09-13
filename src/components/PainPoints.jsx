import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_POINTS, SOLUTION_POINTS } from '../constants';

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

const ProblemSolutionSection = () => {
  return (
    <section id="problem-solution" className="py-20 sm:py-28 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 
            className="text-h2 text-neutral-900 mb-4"
          >
            Old workflow slowing you down
          </h2>
        </motion.div>
        
        {/* Problem → Solution Split */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listContainerVariants}
            className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200"
          >
            <h3 className="text-h3 text-neutral-900 mb-6 text-center">
              Current Workflow
            </h3>
            <ul className="space-y-4">
              {PROBLEM_POINTS.map((problem, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3"
                  variants={paragraphVariants}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  </span>
                  <span className="text-body text-neutral-700">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={solutionVariants}
            className="bg-swiss-red/5 p-8 rounded-2xl border border-swiss-red/20"
          >
            <h3 className="text-h3 text-swiss-red mb-6 text-center">
              Our Solution
            </h3>
            <ul className="space-y-4">
              {SOLUTION_POINTS.map((solution, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-3"
                  variants={paragraphVariants}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-swiss-red/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-swiss-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-body text-neutral-800">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection; 