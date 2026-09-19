import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({ top: aboutSection.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const section = document.getElementById('experience');
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(148,163,184,0.18),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-slate-500 mb-5">
            Software Engineer
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Skand Vijay
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            Building developer infrastructure and agentic AI systems that help
            engineering teams ship faster, with lower cost and higher reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              onClick={scrollToExperience}
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              View experience
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-300 text-slate-700 font-medium rounded-md hover:border-slate-900 hover:text-slate-900 transition-colors"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
