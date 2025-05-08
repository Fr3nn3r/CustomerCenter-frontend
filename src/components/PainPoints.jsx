import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  HomeModernIcon, // Changed from HomeIcon for a more B2B feel
  ArrowTrendingDownIcon,
  QuestionMarkCircleIcon, 
  CalendarDaysIcon,
  BanknotesIcon,
  ChartPieIcon 
} from '@heroicons/react/24/outline';

const painPointsData = [
  { id: 1, text: "Struggling to find time for consistent new business attraction.", Icon: ClockIcon },
  { id: 2, text: "Sacrificing personal time (evenings/weekends) for practice growth.", Icon: HomeModernIcon },
  { id: 3, text: "Losing clients to less qualified but better-marketed competitors.", Icon: ArrowTrendingDownIcon },
  { id: 4, text: "Unpredictable revenue due to reliance on word-of-mouth/referrals.", Icon: QuestionMarkCircleIcon },
  { id: 5, text: "Unable to follow up with prospects during busy seasons.", Icon: CalendarDaysIcon },
  { id: 6, text: "Wasting money on ineffective marketing with poor ROI.", Icon: BanknotesIcon },
  { id: 7, text: "No systematic way to track effectiveness of business development.", Icon: ChartPieIcon }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "circOut", staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "circOut" } }
};

const cardHoverTransition = { type: "spring", stiffness: 300, damping: 15 };

const PainPoints = () => {
  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="py-16 sm:py-24 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8"
        >
          Recognize Any of These <span className="text-swiss-red">Challenges?</span>
        </motion.h2>
        <motion.p 
          variants={itemVariants} 
          className="text-lg text-gray-700 text-center mb-16"
        >
          You're an expert at managing finances. But finding time to consistently attract new business? That's where many financial advisors struggle.
        </motion.p>
        
        <div className="space-y-8">
          {painPointsData.map((point) => (
            <motion.div 
              key={point.id} 
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03, boxShadow: "var(--tw-shadow-soft-lg)" }}
              transition={cardHoverTransition}
              className="flex items-start p-6 bg-white rounded-lg shadow-crisp hover:shadow-soft-lg transition-shadow duration-300 border border-gray-200/70"
            >
              <point.Icon className="h-8 w-8 text-swiss-red mr-5 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          variants={itemVariants} 
          className="text-md text-gray-600 text-center mt-16"
        >
          It's not your fault. You were trained to be an exceptional financial advisor, not a marketing expert.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PainPoints; 