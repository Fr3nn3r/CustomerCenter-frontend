import React from 'react';
import { motion } from 'framer-motion';
import { BUYER_PERSONAS } from '../constants';

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

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

const BuyersSection = () => {
  const icons = {
    "Claims/COO": (
      <svg className="w-8 h-8 text-swiss-red" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
    "CIO/CTO": (
      <svg className="w-8 h-8 text-swiss-red" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    ),
    "Risk/Compliance": (
      <svg className="w-8 h-8 text-swiss-red" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  };

  return (
    <section id="for-whom" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Built for Decision Makers
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Tailored benefits for every key stakeholder in your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {BUYER_PERSONAS.map((persona, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={tileVariants}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {icons[persona.title]}
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-6">{persona.title}</h3>
              
              <ul className="space-y-3 text-left">
                {persona.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-swiss-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
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
          className="mt-16 text-center"
        >
          <div className="bg-swiss-red/5 p-8 rounded-xl border border-swiss-red/20">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Perfect for Large EMEA Insurers</h3>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Our solution is specifically designed for established insurance companies processing 
              high volumes of claims and requiring strict regulatory compliance across European markets. 
              Ideal for organizations looking to modernize their claims processing while maintaining 
              full auditability and regulatory adherence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyersSection;