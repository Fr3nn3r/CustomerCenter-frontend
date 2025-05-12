import React from 'react';
import { motion } from 'framer-motion';

// SVG icons for the how it works cards
const icons = {
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  growth: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  time: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  handshake: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8l2 2-2 2 2 2-2 2" />
      <path d="M22 8l-2 2 2 2-2 2 2 2" />
      <path d="M8 10h8" />
      <path d="M10 14h4" />
    </svg>
  ),
  money: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
};

const howItWorksData = [
  {
    id: 1,
    title: "Personalized Messaging",
    description: "Our emails feel 1-on-1, including highly relevant content and targetting pain points.",
    icon: icons.target
  },
  {
    id: 2,
    title: "Strategic targetting",
    description: "We connect you with decision makers interested in your services from your ideal client profile.",
    icon: icons.growth
  },
  {
    id: 3,
    title: "Handling large volumes",
    description: "We handle large volumes of prospects to deliver a sustainable growth channel.",
    icon: icons.time
  },
  {
    id: 4,
    title: "Regulatory compliance",
    description: "We enable leads to opt out of your email list at any time.",
    icon: icons.handshake
  }
];

// Enhanced title animation
const titleVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
      duration: 0.8
    }
  }
};

// Enhanced card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: item => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: item.id * 0.15,
      duration: 0.6
    }
  }),
  hover: {
    y: -15,
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

// Icon animation
const iconVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10,
      duration: 0.5,
      delay: 0.2
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    color: "#D52B1E",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const HowItWorksSection = () => {
  return (
    <section 
      id="how-it-works"
      className="py-16 sm:py-24 bg-neutral-100 overflow-hidden" // Added overflow hidden for animations
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 text-center mb-12 sm:mb-16"
        >
          We deliver{" "}
          <motion.span 
            className="text-swiss-red relative inline-block"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            meetings with fully qualified prospects 
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-swiss-red"
              initial={{ scaleX: 0 }}
              whileInView={{ 
                scaleX: 1,
                transition: { delay: 0.5, duration: 0.6 }
              }}
              viewport={{ once: true }}
            />
          </motion.span>{" "}
          from your dream customers
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {howItWorksData.map((item) => (
            <motion.div 
              key={item.id} 
              custom={item}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="flex flex-col items-center sm:items-start p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-250 border border-neutral-200"
            >
              <motion.div 
                className="flex-shrink-0 p-3 mb-4 rounded-full bg-swiss-red bg-opacity-10 text-swiss-red"
                variants={iconVariants}
                whileHover="hover"
              >
                {item.icon}
              </motion.div>
              
              <div className="text-center sm:text-left">
                <motion.h3 
                  className="text-xl font-semibold text-neutral-800 mb-2"
                  whileHover={{ 
                    color: "#D52B1E", 
                    scale: 1.02, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-neutral-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    transition: { delay: 0.3 + item.id * 0.1, duration: 0.5 } 
                  }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative background element */}
        <motion.div 
          className="absolute -right-20 top-1/3 w-64 h-64 bg-swiss-red opacity-5 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ 
            scale: 1, 
            opacity: 0.05,
            transition: { duration: 1.5, ease: "easeOut" }
          }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection; 