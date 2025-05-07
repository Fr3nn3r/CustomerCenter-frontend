import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    icon: '⚙️', // Placeholder icon
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and streamline your workflows with intelligent AI.',
  },
  {
    icon: '💡', // Placeholder icon
    title: 'Insightful Analytics',
    description: 'Gain valuable insights from your data to make smarter business decisions.',
  },
  {
    icon: '🎨', // Placeholder icon
    title: 'Creative Content Generation',
    description: 'Generate engaging marketing copy, social media posts, and more in seconds.',
  },
  {
    icon: '💬', // Placeholder icon
    title: 'Enhanced Communication',
    description: 'Improve customer interactions with AI-powered chatbots and communication tools.',
  },
];

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

const Features = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
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
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Everything You Need, All in One Place
          </motion.h2>
          <motion.p 
            variants={featureVariants} 
            custom={1} 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            AI Swiss Knife combines the functionalities of multiple tools into a single, powerful platform designed for growth.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Adjust amount based on when you want animation to trigger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              custom={index} // Pass index for staggered delay
              variants={featureVariants}
              className="bg-white p-6 rounded-xl shadow-soft text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 