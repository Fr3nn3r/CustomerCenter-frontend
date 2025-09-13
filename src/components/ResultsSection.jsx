import React from 'react';
import { motion } from 'framer-motion';

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

const metricVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

const ResultsSection = () => {
  const placeholderMetrics = [
    {
      value: "60%",
      label: "Faster Processing",
      description: "Average reduction in claims processing time"
    },
    {
      value: "40%",
      label: "Lower LAE",
      description: "Reduction in Loss Adjustment Expenses"
    },
    {
      value: "95%",
      label: "Accuracy Rate",
      description: "Automated decision accuracy vs manual"
    },
    {
      value: "100%",
      label: "Audit Ready",
      description: "Complete traceability for all decisions"
    }
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-h2 text-neutral-900 mb-4">
            Proven Results
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Real performance metrics from our implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {placeholderMetrics.map((metric, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={metricVariants}
              className="text-center p-8 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-250"
            >
              <div className="text-4xl font-bold text-swiss-red mb-2">{metric.value}</div>
              <div className="text-h3 text-neutral-900 mb-2">{metric.label}</div>
              <div className="text-small text-neutral-600">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.4, duration: 0.6 }
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-card border-l-4 border-swiss-red"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-swiss-red/10 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-swiss-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-h3 text-neutral-900">Zurich Innovation Challenge 2025</h3>
              <p className="text-body text-neutral-600">Selected prototype showcasing breakthrough results</p>
            </div>
          </div>
          <p className="text-body text-neutral-700 leading-relaxed">
            Our claims automation platform was recognized as one of the top innovations in the 
            Zurich Innovation Challenge 2025, demonstrating significant improvements in processing 
            speed, accuracy, and regulatory compliance across multiple insurance use cases.
          </p>
          <div className="mt-4 text-small text-neutral-600">
            <em>Pilot metrics and detailed case studies available upon request</em>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;