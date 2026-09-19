import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-medium tracking-[0.18em] uppercase text-slate-500 mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Engineer by craft. Builder by instinct.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-slate-100">
              <img
                src="/images/profile.png"
                alt="Skand Vijay"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-5 space-y-1 text-sm text-slate-500">
              <p className="font-medium text-slate-800">Software Engineer at Capacity</p>
              <p>MISM, Carnegie Mellon University</p>
              <p>Pittsburgh, PA</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            <p>
              I started in software engineering, building systems where reliability and
              clarity mattered more than flash. Over time, that turned into a focus on
              developer infrastructure: the tools, pipelines, and platforms that make
              teams move faster with less friction.
            </p>
            <p>
              At Capacity, I work on agentic AI systems across the SDLC, from pairing
              workflows to token-efficient engineering. Before that, I built RAG QA
              systems with pre-indexing filtering, and spent time consulting on AI
              product direction at Honda Research Institute USA.
            </p>
            <p>
              At Carnegie Mellon, I sharpened the intersection of AI systems and
              product judgment. The throughline is simple: ship infrastructure that
              compounds, reduce waste in how teams build with AI, and leave systems
              cleaner than I found them.
            </p>

            <div className="pt-4 grid sm:grid-cols-3 gap-6 border-t border-slate-200">
              {[
                { label: 'Focus', value: 'Dev infra & agentic AI' },
                { label: 'Based in', value: 'Pittsburgh, PA' },
                { label: 'Open to', value: 'Engineering, product & founding roles' }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
