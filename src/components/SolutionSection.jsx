import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7,
      ease: "circOut",
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "circOut" }
  }
};

const SolutionSection = () => {
  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of the section is visible
      className="py-16 sm:py-24 bg-white text-gray-900"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Transform Your Practice Growth <br className="hidden sm:block" />Without Sacrificing Your <span className="text-swiss-red">Standards</span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 mb-8 leading-relaxed"
        >
          What if you could implement a client acquisition system that works 24/7, even during your busiest tax seasons? Imagine checking your inbox each morning to find conversations with pre-qualified prospects who actually need your services—all without you having to spend hours on marketing activities.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
            That's exactly what our <span className="text-swiss-red">AISK CustomerCenter™ System</span> delivers.
          </h3>
          <p className="text-md text-gray-500">
            For Swiss <span className="font-medium text-gray-600">B2B Financial Advisors</span> like you.
          </p>
        </motion.div>

        {/* Testimonial Block */}
        <motion.div 
          variants={itemVariants} 
          className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-crisp mb-12 text-left border border-transparent hover:border-gray-200/80 transition-colors duration-300"
        >
          <div className="relative">
            <span className="absolute top-0 left-0 text-6xl text-swiss-red/20 font-serif -mt-4 -ml-2">“</span>
            <p className="text-gray-700 italic leading-relaxed mb-4 relative z-10">
              Take Thomas from Zürich, for example. As a senior tax advisor with over 20 years of experience, he was excellent at serving clients but struggled to grow his practice consistently. Within just 6 weeks of implementing our system, he generated <strong className="text-swiss-red font-semibold">8 new client conversations</strong> and converted <strong className="text-swiss-red font-semibold">4 into long-term engagements</strong>—adding over <strong className="text-swiss-red font-semibold">CHF 45,000 in annual recurring revenue</strong> while reducing his marketing time by over 90%.
            </p>
            <span className="absolute bottom-0 right-0 text-6xl text-swiss-red/20 font-serif -mb-4 -mr-2 transform rotate-180">“</span>
          </div>
          <p className="text-right text-gray-600 font-semibold mt-4">
            - Thomas K., Senior Tax Advisor, Zürich
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">The Secret? A Swiss-Engineered Approach</h4>
          <p className="text-lg text-gray-600 leading-relaxed">
            It combines precision targeting, cultural calibration, and ethical automation—all aligned with the professional standards and privacy requirements you uphold.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default SolutionSection; 