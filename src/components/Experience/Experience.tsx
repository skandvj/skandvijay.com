import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, TrendingUp, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      title: "AI Product Manager Intern",
      company: "Capacity",
      location: "St. Louis, MO",
      period: "May 2024 - Present",
      logo: "images/capacity.png",
      type: "AI Safety",
      achievements: [
        "Leading AI product development initiatives for enterprise automation",
        "Collaborating with cross-functional teams to define product roadmaps",
        "Implementing user-centric design principles in AI-powered solutions"
      ],
      technologies: ["AI/ML", "Product Strategy", "User Research", "Agile"],
      impact: "Driving product innovation in enterprise AI automation"
    },
    {
      title: "Software Engineer - Enterprise Product (SaaS)",
      company: "Gap Inc",
      location: "San Francisco, CA",
      period: "June 2022 - July 2024",
      logo: "images/gap.svg",
      type: "Leadership Role",
      achievements: [
        "Built financial automation tools reducing payment delinquency by 32%",
        "Led cross-functional product teams across engineering and business",
        "Delivered $2M+ in annual cost savings through process optimization"
      ],
      technologies: ["Python", "SQL", "Product Management", "Financial Systems"],
      impact: "Eliminated multi-million dollar risk through strategic automation"
    },
    {
      title: "Research Assistant",
      company: "Privacy Economics Experiment Lab",
      location: "Pittsburgh, PA", 
      period: "January 2024 - Present",
      logo: "images/peex.png",
      type: "Research",
      achievements: [
        "Conducting research on privacy economics and consumer behavior",
        "Analyzing large datasets to understand privacy decision-making patterns",
        "Contributing to academic publications on digital privacy"
      ],
      technologies: ["Data Analysis", "Research Methods", "Statistical Modeling"],
      impact: "Advancing understanding of privacy economics in digital markets"
    },
    {
      title: "Vice President",
      company: "Analytics Club, Heinz",
      location: "Pittsburgh, PA",
      period: "November 2024 - Present",
      logo: "images/cmu.jpg",
      type: "Leadership",
      achievements: [
        "Leading analytics initiatives for 200+ graduate students",
        "Organizing industry partnerships and networking events",
        "Mentoring students in data science and product analytics"
      ],
      technologies: ["Leadership", "Analytics", "Community Building"],
      impact: "Building next generation of data-driven product leaders"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building impactful products and leading teams across Fortune 500 companies, 
            startups, and academic institutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-28 h-28 mx-auto lg:mx-0 rounded-2xl bg-slate-100 p-2 flex items-center justify-center mb-4">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-full">
                      {exp.type}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-slate-700 font-semibold mb-3">{exp.company}</h4>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-slate-600">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <TrendingUp size={20} className="text-slate-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-1">Key Impact</h5>
                          <p className="text-slate-700">{exp.impact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <Award size={18} className="mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="flex-shrink-0 p-3 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 group-hover:scale-110"
                    whileHover={{ rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 pt-20 border-t border-slate-200"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              degree: "Master of Information Systems Management",
              school: "Carnegie Mellon University",
              period: "2024 - Present",
              gpa: "3.90",
              logo: "images/cmu.jpg",
              focus: "Artificial Intelligence & Product Management"
            }, {
              degree: "Bachelor of Technology",
              school: "Vellore Institute of Technology",
              period: "2018 - 2022",
              gpa: "3.96",
              logo: "images/vit.png",
              focus: "Electronics and Computer Science Engineering"
            }].map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-24 h-24 rounded-xl bg-slate-100 p-2 flex items-center justify-center">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{edu.degree}</h4>
                    <p className="text-slate-700 font-medium">{edu.school}</p>
                    <p className="text-slate-600 text-sm">{edu.period}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">GPA</span>
                    <span className="font-bold text-slate-900">{edu.gpa}/4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Focus</span>
                    <span className="font-medium text-slate-900">{edu.focus}</span>
                  </div>
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
