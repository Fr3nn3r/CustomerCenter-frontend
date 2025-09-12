import React from 'react';
import { motion } from 'framer-motion';
import { COMPLIANCE_FEATURES } from '../constants';

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

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-16 sm:py-24 bg-swiss-red text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Compliance & Auditability First
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Built from the ground up to meet the strictest regulatory requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPLIANCE_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={featureVariants}
              className="flex items-center justify-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-250"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">{feature}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.5, duration: 0.6 }
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
        >
          <p className="text-lg text-white/90">
            <strong className="text-white">Every decision is traceable.</strong> Full audit trails, 
            explainable AI outputs, and exportable compliance reports ensure you're always 
            audit-ready and regulation-compliant.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;