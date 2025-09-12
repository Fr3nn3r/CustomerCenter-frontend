import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Staggered delay for each feature
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={featureVariants} 
            custom={0} 
            className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          >
            Built for the teams behind the business
          </motion.h2>
          <motion.p 
            variants={featureVariants} 
            custom={1} 
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Deliver faster, more accurate claims processing with audit-ready automation.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureVariants}
              className="bg-white p-8 rounded-xl shadow-soft text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 