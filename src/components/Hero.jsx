import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = ({ onLetsTalkClick }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"
             style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Text Container with Blur Background */}
        <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg"
          >
            {t('hero.headline')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md"
          >
            {t('hero.subheadline')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={onLetsTalkClick}
            className="bg-swiss-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#C00500] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-swiss-red focus:ring-offset-2"
          >
            {t('hero.primaryCTA')}
          </button>
          <a
            href="#case-studies"
            className="text-lg font-medium text-ink hover:text-swiss-red transition-colors duration-150 underline underline-offset-4"
          >
            {t('hero.secondaryCTA')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
