import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton'; // Assuming CTAButton is in the same folder or path is adjusted
import { FaLinkedin } from 'react-icons/fa'; // Using react-icons for LinkedIn icon

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.1
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

const FinalCTASection = ({ onBookCall }) => { // Accept onBookCall as a prop
  const linkedInUrl = "https://www.linkedin.com/in/frdbrunner/";
  const founderImage = "/fred_professional_suit_tie.jpg"; // Updated image path

  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 sm:py-24 bg-gray-100" // Light gray background for contrast
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-swiss-red">Systematize</span> Your Client Acquisition?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Book a no-obligation strategy call directly with AI Swiss Knife founder, <strong className="font-semibold text-gray-800">Frederic Brunner</strong>. With over 30 years of experience in the software industry, Frederic can help you map out a clear path to sustainable growth.
            </p>
            
            <blockquote className="relative p-4 sm:p-6 text-gray-600 border-l-4 border-swiss-red bg-white shadow-crisp rounded-md mb-8">
              <p className="italic text-gray-700 leading-relaxed mb-3">
                "'If you're going to do something, do it properly or go back to making cheese.' my grandmother used to say. While I still make a decent Gruyère on weekends, during the week we're focused on being the growth partners that Swiss businesses can actually count on."
              </p>
              <p className="text-right font-semibold text-gray-800">- Frederic Brunner</p>
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              <CTAButton onClick={onBookCall} className="w-full sm:w-auto text-lg py-3.5 px-8">
                Book Your Strategy Call
              </CTAButton>
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-swiss-red transition-colors group"
              >
                <FaLinkedin className="h-6 w-6 mr-2 text-gray-400 group-hover:text-swiss-red transition-colors" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column: Founder Image */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-end mt-8 md:mt-0">
            <img 
              src={founderImage} 
              alt="Frederic Brunner, Founder of AI Swiss Knife"
              className="rounded-xl shadow-soft-lg w-full max-w-sm h-auto object-cover aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalCTASection; 