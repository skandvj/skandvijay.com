import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.04)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name and Title */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Skand Vijay
            </motion.h1>
            
            <motion.div
              className="space-y-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-2xl lg:text-4xl font-light text-slate-700">
                Software Engineer
              </div>
              <div className="text-xl lg:text-2xl font-light text-slate-500">
                Developer Infrastructure · Productivity · Token Optimization
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Building developer infrastructure, productivity systems, and token-efficient AI platforms at{' '}
              <span style={{ color: '#0057FF', fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                Capacity
              </span>
              {' & '}
              <span style={{ color: '#A6192E', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                Carnegie Mellon
              </span>
              . Focused on making engineering teams ship faster with lower cost and higher reliability.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore My Work</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Brand */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Professional Experience Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
                Highlights
              </h3>
              
              {/* Company Logos Grid */}
              <div className="grid grid-cols-3 gap-6 items-center justify-items-center mb-6">
                <a 
                  href="https://www.gapinc.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src="/logos/gap.png" 
                    alt="Gap Inc." 
                    className="h-12 w-auto object-contain mb-2"
                  />
                  <span className="text-xs text-slate-500 font-medium hover:text-slate-700">Gap Inc</span>
                </a>
                
                <a 
                  href="https://www.heinz.cmu.edu/programs/information-systems-management-master/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src="/logos/cmu.png" 
                    alt="Carnegie Mellon" 
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-xs text-slate-500 font-medium hover:text-slate-700">Carnegie Mellon</span>
                </a>
                
                <a 
                  href="https://www.capacity.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src="/logos/capacity.png" 
                    alt="Capacity" 
                    className="h-12 w-auto object-contain mb-2"
                  />
                  <span className="text-xs text-slate-500 font-medium hover:text-slate-700">Capacity</span>
                </a>
              </div>
              
              <p className="text-sm text-slate-600 text-center">
                Engineering infrastructure, developer productivity, and AI systems at scale
              </p>
            </motion.div>

            {/* Professional Certification */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <a 
                href="https://www.credly.com/badges/dc1bd65a-faa1-45ae-b924-382d7617c024/public_url" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 cursor-pointer"
              >
                <img 
                  src="/logos/pspo1.png" 
                  alt="PSPO I Certification" 
                  className="h-16 w-16 object-contain"
                />
                <div className="flex-1">
                  <div className="font-semibold text-slate-900 mb-1 hover:text-slate-700 transition-colors">
                    Professional Scrum Product Owner I
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    Certified by Scrum.org
                  </div>
                  <div className="inline-flex items-center text-xs text-green-600 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Verified Certification
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Focus Highlight */}
            <motion.div
              className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Dev Infra</div>
                  <div className="text-xs text-slate-500">Platforms & tooling</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Productivity</div>
                  <div className="text-xs text-slate-500">Faster eng loops</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Token Opt</div>
                  <div className="text-xs text-slate-500">Lower AI cost</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col items-center space-y-2 text-slate-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
