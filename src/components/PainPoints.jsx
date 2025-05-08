import React from 'react';
import { motion } from 'framer-motion';

const painPointsData = [
  {
    id: 1,
    text: "Struggling to find time for consistent new business attraction.",
    icon: "⏳" // Placeholder icon - time/struggle
  },
  {
    id: 2,
    text: "Sacrificing personal time (evenings/weekends) for practice growth.",
    icon: "🏡" // Placeholder icon - home/family time
  },
  {
    id: 3,
    text: "Losing clients to less qualified but better-marketed competitors.",
    icon: "📉" // Placeholder icon - loss/competition
  },
  {
    id: 4,
    text: "Unpredictable revenue due to reliance on word-of-mouth/referrals.",
    icon: "❓" // Placeholder icon - uncertainty
  },
  {
    id: 5,
    text: "Unable to follow up with prospects during busy seasons.",
    icon: "🗓️" // Placeholder icon - calendar/busy
  },
  {
    id: 6,
    text: "Wasting money on ineffective marketing with poor ROI.",
    icon: "💸" // Placeholder icon - money/waste
  },
  {
    id: 7,
    text: "No systematic way to track effectiveness of business development.",
    icon: "📊" // Placeholder icon - tracking/analytics
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const PainPoints = () => {
  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 sm:py-24 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={itemVariants} // Animate title like an item
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6"
        >
          Recognize Any of These Challenges?
        </motion.h2>
        <motion.p 
          variants={itemVariants} // Animate intro like an item
          className="text-lg text-gray-600 text-center mb-12"
        >
          You're an expert at managing finances. But finding time to consistently attract new business? That's where many financial advisors struggle.
        </motion.p>
        
        <div className="space-y-6">
          {painPointsData.map((point) => (
            <motion.div 
              key={point.id} 
              variants={itemVariants}
              className="flex items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              <span className="text-2xl mr-4 text-swiss-red">{point.icon}</span>
              <p className="text-gray-700 leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          variants={itemVariants} // Animate outro like an item
          className="text-md text-gray-500 text-center mt-12"
        >
          It's not your fault. You were trained to be an exceptional financial advisor, not a marketing expert.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PainPoints; 