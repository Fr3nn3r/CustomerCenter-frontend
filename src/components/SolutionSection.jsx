import React from 'react';
import { motion } from 'framer-motion';

// Animation variants (reuse from PainPoints or define similarly)
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

const emphasisVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Stagger container
const containerVariants = {
  hidden: { opacity: 1 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1 
    }
  }
};


const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 sm:py-28 bg-white text-neutral-800"> {/* Consistent padding */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left"> {/* Changed to text-left for better readability */}
        
        {/* Main Claim / Headline */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-900 mb-10 text-center" // Centered headline
        >
          Strategic Outbound: The Most <span className="text-swiss-red">Time-Efficient</span> Growth Channel for Financial Advisors
        </motion.h2>

        {/* Content Blocks with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8" // Spacing between blocks
        >
          {/* Warrants Block */}
          <motion.div 
            variants={paragraphVariants} 
            className="bg-neutral-50 p-6 rounded-lg border border-neutral-200/70 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">Why It Works</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              As a financial advisor, your time is best spent advising clients, not executing marketing campaigns. Our <strong className="text-neutral-900">automated systems</strong> require minimal oversight once established, handling prospect identification, initial outreach, and follow-up sequences while you focus on serving existing clients.
            </p>
          </motion.div>

          {/* Evidence Block */}
          <motion.div 
            variants={paragraphVariants}
            className="bg-neutral-50 p-6 rounded-lg border border-neutral-200/70 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">The Proof</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              The average Swiss financial advisor using our system saves <motion.strong className="text-swiss-red" variants={emphasisVariants}>15-20 hours per month</motion.strong> on business development activities while generating <motion.strong className="text-swiss-red" variants={emphasisVariants}>3-5X more qualified conversations</motion.strong> than through traditional networking and marketing.
            </p>
          </motion.div>

          {/* Impact Block */}
          <motion.div 
            variants={paragraphVariants}
            className="bg-swiss-red/5 p-6 rounded-lg border border-swiss-red/20 shadow-soft text-center" // Highlight box for impact
          >
            <h3 className="text-xl font-semibold text-swiss-red mb-2">The Impact</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              You could <strong className="text-neutral-900">systematically grow your practice</strong> without sacrificing client service quality or your personal time, creating sustainable growth without the traditional trade-offs.
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection; 