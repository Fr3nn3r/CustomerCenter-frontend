import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

const TeamSection = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-h2 text-neutral-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Insurance technology experts with deep domain knowledge
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="bg-neutral-50 p-8 rounded-xl text-center shadow-card hover:shadow-card-hover transition-shadow duration-250"
            >
              <div className="w-24 h-24 bg-neutral-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Placeholder avatar */}
                <svg className="w-12 h-12 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-h3 text-neutral-900 mb-2">{member.name}</h3>
              <p className="text-body text-swiss-red font-medium mb-4">{member.role}</p>
              <p className="text-body text-neutral-600 leading-relaxed">{member.bio}</p>
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
          className="mt-16 text-center"
        >
          <div className="bg-swiss-red/5 p-8 rounded-xl border border-swiss-red/20">
            <h3 className="text-h3 text-neutral-900 mb-4">Advisory Board</h3>
            <p className="text-body text-neutral-600 leading-relaxed">
              Backed by former executives from major EMEA insurers and regulatory compliance experts 
              with deep understanding of claims processing challenges and regulatory requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;