import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const SecondaryHeadline = ({ onLetsTalkClick }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.2] tracking-tight max-w-4xl mb-8">
            {t('statement2')}
          </h2>
          <button
            onClick={onLetsTalkClick}
            className="text-lg font-medium text-swiss-red hover:text-[#C00500] transition-colors duration-150 underline underline-offset-4"
          >
            {t('nav.letsTalk')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondaryHeadline;
