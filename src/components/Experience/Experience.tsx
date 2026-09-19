import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  summary: string;
};

const ExperienceRow: React.FC<{
  exp: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ exp, isOpen, onToggle }) => {
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const [needsMore, setNeedsMore] = useState(false);

  const checkTruncation = useCallback(() => {
    const el = summaryRef.current;
    if (!el) return;

    if (isOpen) {
      // Keep More available while expanded so user can collapse
      setNeedsMore(true);
      return;
    }

    // Compare full scroll height vs single-line clamped height
    setNeedsMore(el.scrollHeight > el.clientHeight + 1);
  }, [isOpen]);

  useEffect(() => {
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [checkTruncation, exp.summary]);

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-start py-5 border-b border-slate-200 hover:bg-white/70 -mx-3 px-3 rounded-lg transition-colors duration-200">
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white border border-slate-200 p-1.5 flex items-center justify-center flex-shrink-0">
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            {exp.title}
          </h3>
          <span className="hidden sm:inline text-slate-300">·</span>
          <p className="text-sm sm:text-base text-slate-600">{exp.company}</p>
        </div>

        <p
          ref={summaryRef}
          className={`text-sm text-slate-500 mt-0.5 ${isOpen ? '' : 'line-clamp-1'}`}
        >
          {exp.summary}
        </p>

        <div className="mt-1 flex items-center gap-3">
          {needsMore && (
            <button
              type="button"
              onClick={onToggle}
              className="text-xs font-medium text-slate-700 hover:text-slate-900 underline-offset-2 hover:underline"
              aria-expanded={isOpen}
            >
              {isOpen ? 'Less' : 'More'}
            </button>
          )}
          <p className="text-xs text-slate-400 sm:hidden">{exp.location}</p>
        </div>
      </div>

      <div className="text-right flex-shrink-0 pt-0.5">
        <p className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">
          {exp.period}
        </p>
        <p className="hidden sm:block text-xs text-slate-400 mt-1 whitespace-nowrap">
          {exp.location}
        </p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [expanded, setExpanded] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Capacity",
      location: "Remote · Pittsburgh, PA",
      period: "Feb 2026 - Present",
      logo: "/images/capacity.png",
      summary: "Agentic AI SDLC: AI pairing pipelines, automated workflows, and token-efficient engineering systems"
    },
    {
      title: "Graduate Product Consultant",
      company: "Honda Research Institute USA",
      location: "San Jose, CA",
      period: "Aug 2025 - Dec 2026",
      logo: "/images/honda-ri.png",
      summary: "Product consulting on AI research and technology applications"
    },
    {
      title: "AI Engineer Intern",
      company: "Capacity",
      location: "Remote · Pittsburgh, PA",
      period: "May 2025 - Aug 2025",
      logo: "/images/capacity.png",
      summary: "RAG QA systems and pre-indexing filtering"
    },
    {
      title: "Research Assistant",
      company: "MIT Sloan",
      location: "Cambridge, MA",
      period: "Jan 2025 - May 2025",
      logo: "/images/mit.svg",
      summary: "Privacy economics and consumer behavior research"
    },
    {
      title: "Vice President",
      company: "Analytics Club, CMU Heinz",
      location: "Pittsburgh, PA",
      period: "Nov 2024 - Dec 2025",
      logo: "/images/cmu-red-square.png",
      summary: "Analytics community and industry partnerships"
    },
    {
      title: "Software Engineer",
      company: "Gap Inc",
      location: "Hyderabad, India",
      period: "Jun 2022 - Jul 2024",
      logo: "/images/gap.svg",
      summary: "Enterprise SaaS and financial automation"
    }
  ];

  const education = [
    {
      degree: "Master of Information Systems Management",
      school: "Carnegie Mellon University",
      detail: "GPA 3.81",
      logo: "/images/cmu-red-square.png"
    },
    {
      degree: "Bachelor of Technology",
      school: "Vellore Institute of Technology",
      detail: "GPA 3.96 · Electronics and Communication Engineering",
      logo: "/images/vit.png"
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-50">
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-3">Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Developer infrastructure, productivity systems, and AI platforms
          </p>
        </motion.div>

        <motion.div
          className="border-t border-slate-200"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <ExperienceRow
              key={`${exp.company}-${exp.title}-${index}`}
              exp={exp}
              isOpen={expanded === index}
              onToggle={() =>
                setExpanded((current) => (current === index ? null : index))
              }
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Education</h3>
          <div className="border-t border-slate-200">
            {education.map((edu, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start sm:items-center py-5 border-b border-slate-200"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white border border-slate-200 p-1.5 flex items-center justify-center flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{edu.school}</h4>
                  <p className="text-sm text-slate-500">{edu.degree}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
