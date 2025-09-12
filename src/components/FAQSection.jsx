import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import { FAQ_ITEMS } from '../constants';

const faqData = FAQ_ITEMS.map((item, index) => ({
  id: index + 1,
  question: item.question,
  answer: (
    <p className="mb-3">{item.answer}</p>
  )
}));

// More subtle title animations
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "ease",
      duration: 0.5
    }
  }
};

// More subtle FAQ item animation
const faqItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: item => ({
    opacity: 1,
    y: 0,
    transition: { 
      type: "ease",
      duration: 0.4,
      delay: item.id * 0.05
    }
  }),
  hover: {
    backgroundColor: "rgba(245, 245, 245, 0.7)",
    transition: { duration: 0.2 }
  }
};

// More subtle answer animation
const answerVariants = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: { 
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Content animation
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

// Icon animation
const iconVariants = {
  initial: { rotate: 0 },
  animate: { rotate: 90, transition: { duration: 0.2 } }
};

const AccordionItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div 
      custom={faq}
      variants={faqItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`border-b border-neutral-200 last:border-b-0 ${isOpen ? 'bg-neutral-50' : ''} rounded-lg transition-colors duration-250`}
    >
      <motion.button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 px-4 text-left text-lg font-medium text-neutral-800 hover:text-swiss-red focus:outline-none transition-colors duration-250"
      >
        <span>{faq.question}</span>
        <div
          className={`flex-shrink-0 ml-2 ${isOpen ? 'text-swiss-red' : 'text-neutral-400'}`}
        >
          {isOpen ? (
            <MinusCircleIcon className="h-6 w-6 transition-colors duration-250" />
          ) : (
            <PlusCircleIcon className="h-6 w-6 transition-colors duration-250" />
          )}
        </div>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${faq.id}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={answerVariants}
            className="overflow-hidden text-neutral-700 leading-relaxed px-4 pb-5"
          >
            <motion.div variants={contentVariants}>
              {faq.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="h-1 bg-swiss-red w-24 mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg text-neutral-700">
            Everything you need to know about AI Swiss Knife
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 