import React from 'react';
import { motion } from 'framer-motion';

// SVG icons for pain points
const icons = {
  time: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  question: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  money: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  analytics: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
};

const painPointsData = [
  {
    id: 1,
    text: "Struggling to find time for consistent new business attraction.",
    icon: icons.time
  },
  {
    id: 2,
    text: "Sacrificing personal time (evenings/weekends) for practice growth.",
    icon: icons.home
  },
  {
    id: 3,
    text: "Losing clients to less qualified but better-marketed competitors.",
    icon: icons.chart
  },
  {
    id: 4,
    text: "Unpredictable revenue due to reliance on word-of-mouth/referrals.",
    icon: icons.question
  },
  {
    id: 5,
    text: "Unable to follow up with prospects during busy seasons.",
    icon: icons.calendar
  },
  {
    id: 6,
    text: "Wasting money on ineffective marketing with poor ROI.",
    icon: icons.money
  },
  {
    id: 7,
    text: "No systematic way to track effectiveness of business development.",
    icon: icons.analytics
  }
];

// Title animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      duration: 0.8
    }
  }
};

// Enhanced icon animation
const iconVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const PainPoints = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
            variants={titleVariants}
          >
            Recognize Any of These Challenges?
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-800 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1, 
              transition: { duration: 0.8, delay: 0.3 } 
            }}
            viewport={{ once: true }}
          >
            You're an expert at managing finances. But finding time to consistently attract new business? 
            That's where many financial advisors struggle.
          </motion.p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {painPointsData.map((point) => (
            <motion.div 
              key={point.id} 
              initial={{ opacity: 0, y: 50, x: point.id % 2 === 0 ? 50 : -50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                x: 0,
                transition: { 
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: point.id * 0.1 
                } 
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                borderColor: "#D52B1E",
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-250 border border-neutral-200 hover:border-neutral-300"
            >
              <motion.div 
                className="flex-shrink-0 p-3 mr-4 rounded-lg bg-swiss-red bg-opacity-10 text-swiss-red"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                {point.icon}
              </motion.div>
              <motion.p 
                className="text-neutral-800 leading-relaxed pt-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 + point.id * 0.1 } }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="font-semibold"
                  initial={{ color: "#333333" }}
                  whileHover={{ color: "#D52B1E", transition: { duration: 0.2 } }}
                >
                  {point.text}
                </motion.span>
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16 bg-white p-8 rounded-xl shadow-soft-lg border border-neutral-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.7
            } 
          }}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0px 15px 30px rgba(213, 43, 30, 0.1)",
            transition: { duration: 0.3 } 
          }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl text-neutral-800 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.9 } }}
            viewport={{ once: true }}
          >
            It's not your fault. You were trained to be an exceptional financial advisor, not a marketing expert.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints; 