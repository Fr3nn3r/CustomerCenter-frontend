import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const SecondaryHeadline = ({ onLetsTalkClick }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/aisk-ship.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"
             style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 inline-block"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight mb-8 drop-shadow-lg">
            {t('statement2')}
          </h2>
          <button
            onClick={onLetsTalkClick}
            className="text-lg font-medium text-white hover:text-offwhite transition-colors duration-150 underline underline-offset-4 drop-shadow-md"
          >
            {t('nav.letsTalk')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondaryHeadline;
