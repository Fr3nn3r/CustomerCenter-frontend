import React from 'react';
import { motion } from 'framer-motion';

const howItWorksData = [
  {
    id: 1,
    title: "Personalized Messaging",
    description: "We speak directly to the issues your prospects face, making our outreach more relevant and timely.",
    icon: "🎯" // Placeholder: Target/Precision
  },
  {
    id: 2,
    title: "Better Conversion Rates",
    description: "Prospects are more likely to engage when they see you providing direct solutions to their problems.",
    icon: "📈" // Placeholder: Growth/Conversion
  },
  {
    id: 3,
    title: "No Time Wasted on Prospection",
    description: "We target leads that genuinely need your services, making your client acquisition efforts highly effective.",
    icon: "⏱️" // Placeholder: Time/Efficiency
  },
  {
    id: 4,
    title: "Build Trust Systematically",
    description: "Showing you understand their challenges and can solve them helps build trust and secure long-term retainers.",
    icon: "🤝" // Placeholder: Trust/Relationship
  },
  {
    id: 5,
    title: "Faster Revenue Generation",
    description: "By focusing on the most relevant prospects, our myoProcess Method™ shortens the sales cycle, accelerating your revenue growth.",
    icon: "💰" // Placeholder: Revenue/Speed
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HowItWorksSection = () => {
  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of section is visible
      className="py-16 sm:py-24 bg-gray-50" // Alternating background color
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16"
        >
          How Our <span className="text-swiss-red">AISK CustomerCenter™ System</span> Delivers Results
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {howItWorksData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="flex items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
            >
              <span className="text-3xl mr-5 text-swiss-red mt-1">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection; 