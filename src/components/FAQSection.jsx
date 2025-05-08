import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'; // Using heroicons for +/-

const faqData = [
  {
    id: 1,
    question: "Why choose our system instead of hiring a Sales Development Representative?",
    answer: (
      <>
        <p className="mb-3">You'll pay a minimum of CHF 9,000/month for a single good SDR—and that's just the beginning. Factor in benefits, severance packages, training time, and management overhead, and your real cost skyrockets.</p>
        <p className="mb-3"><strong className="text-swiss-red">Our system delivers 17X the output at a fraction of the cost.</strong></p>
        <p className="mb-3">Even after investing months in hiring and training, there's zero guarantee they'll perform. They get sick. They take vacations. They quit unexpectedly.</p>
        <p className="mb-3">Our Swiss-engineered system works 24/7/365, never asks for a raise, and consistently outperforms human SDRs for businesses under CHF 3M in annual revenue.</p>
        <blockquote className="mt-4 p-4 bg-gray-100 border-l-4 border-swiss-red rounded-r-md">
          <p className="italic text-gray-700">"I replaced our two-person SDR team with AI Swiss Knife and doubled our qualified leads while cutting costs by 60%. This wasn't even a difficult decision in hindsight."</p>
          <p className="text-right text-gray-600 font-semibold mt-2">— Marc L., Financial Services</p>
        </blockquote>
      </>
    )
  },
  {
    id: 2,
    question: "How much more cost-effective is this system, really?",
    answer: (
      <>
        <p className="mb-3">Let's put actual numbers to this:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
          <li><span className="font-semibold">Hiring in-house:</span> You're paying approximately CHF 108,000/year minimum in salary alone for a single SDR. Add 25-40% for benefits, recruitment costs, management time, and equipment.</li>
          <li><span className="font-semibold">Hiring an agency:</span> Typically CHF 6,000-8,000/month with inconsistent results and constant turnover of your account managers.</li>
        </ul>
        <p className="mb-3"><strong className="text-swiss-red">Our service: Just 30% of the cost of building an in-house team and 70% of what agencies charge</strong>—with significantly better results and zero management headaches.</p>
        <p className="mb-3">Plus, you're not just getting a lead generation tool. You gain direct access to two operations executives who've helped scale multiple 8-figure companies. Try getting that level of strategic insight from a junior SDR or agency account manager.</p>
        <p>All backed by our <strong className="text-swiss-red">100% satisfaction guarantee</strong>—something no recruitment agency or in-house hire will ever offer you.</p>
      </>
    )
  },
  {
    id: 3,
    question: "How does payment work?",
    answer: (
      <>
        <p className="mb-3">We've made billing as frictionless as our results:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
          <li>Simply select your preferred payment option above.</li>
          <li>You'll be directed to our secure Stripe Checkout page.</li>
          <li>After payment, your subscription is automatically created.</li>
          <li>Billing renews on the same calendar day each month.</li>
        </ul>
        <p className="mb-3">Since our pricing is primarily results-based, you only pay for actual performance.</p>
        <p>You can pause or cancel your subscription anytime—no lengthy contracts, no hidden termination fees.</p>
      </>
    )
  },
  {
    id: 4,
    question: "How quickly will I see actual results?",
    answer: (
      <>
        <p className="mb-3">While others waste your time, we waste none.</p>
        <p className="mb-3">Most lead generation agencies burn your first 2-3 weeks on "domain warm-up" and "infrastructure setup"—administrative busywork that postpones actual results while they bill you anyway.</p>
        <p className="mb-3"><strong className="text-gray-800">Our approach is radically different:</strong></p>
        <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
          <li>System setup completed in just <span className="font-semibold">2-3 business days.</span></li>
          <li>First qualified leads begin arriving within <span className="font-semibold">3-5 days.</span></li>
          <li>Positive ROI typically achieved within the <span className="font-semibold">first month.</span></li>
        </ul>
        <p>We've engineered our entire process to eliminate delays. No excuses, no "it takes time to build momentum" stalling tactics—just rapid, measurable results that impact your bottom line immediately.</p>
      </>
    )
  },
  {
    id: 5,
    question: "What's your refund policy?",
    answer: (
      <>
        <p className="mb-3"><strong className="text-gray-800">We don't succeed unless you do. Period.</strong></p>
        <p className="mb-3">If you're not 100% satisfied with our service, we keep working entirely at our expense until you are. This isn't a vague promise—it's our contractual commitment.</p>
        <p className="mb-3">During any notice period, we'll work diligently to address your concerns rather than simply processing a refund. Why? Because our business depends on your success, not just collecting payments.</p>
        <p>No other option—whether hiring in-house or through an agency—offers this level of performance guarantee.</p>
      </>
    )
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const faqItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const answerVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: "1rem", 
    marginBottom: "0rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div variants={faqItemVariants} className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-800 hover:text-swiss-red focus:outline-none transition-colors"
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <MinusCircleIcon className="h-6 w-6 text-swiss-red flex-shrink-0" />
        ) : (
          <PlusCircleIcon className="h-6 w-6 text-gray-400 group-hover:text-swiss-red flex-shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={answerVariants}
            className="overflow-hidden text-gray-600 leading-relaxed pl-2 pr-2"
          >
            {faq.answer}
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
    <motion.section 
      variants={sectionVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 sm:py-24 bg-white" // White background for this section
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={faqItemVariants} // Animate title similarly to items
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection; 