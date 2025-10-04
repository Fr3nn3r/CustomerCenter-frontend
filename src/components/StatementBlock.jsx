import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const StatementBlock = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/owl.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"
             style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text with blur frame */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight drop-shadow-lg">
              {t('statement1')}
            </h2>
          </motion.div>

          {/* Right side - Empty space for owl visibility */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default StatementBlock;
