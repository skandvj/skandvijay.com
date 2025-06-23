import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Lightbulb, TrendingUp, Award, Users, Building2, Code, Brain, ArrowRight } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const tabs = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'philosophy', label: 'How I Think & Work', icon: Brain },
    { id: 'impact', label: 'Business Impact', icon: TrendingUp },
    { id: 'vision', label: 'Strategic Vision', icon: Lightbulb }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            About
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From Code to Strategy: Building products that anticipate and shape the future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Profile Card */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
              <div className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-700">
                <img 
                  src="/images/profile.png" 
                  alt="Skand Vijay - Product Leader"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-2xl font-bold mb-2">Skand Vijay</h3>
                  <p className="text-slate-200">AI Product Manager</p>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-3 text-slate-600">
                  <Building2 size={18} className="text-blue-500" />
                  <span className="font-medium">Currently at Capacity</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Award size={18} className="text-purple-500" />
                  <span className="font-medium">Carnegie Mellon University</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Users size={18} className="text-green-500" />
                  <span className="font-medium">Pittsburgh, PA</span>
                </div>
                
                {/* Key Metrics */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                      <div className="text-2xl font-bold text-slate-900">3+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">$12M+</div>
                      <div className="text-sm text-slate-600">Value Delivered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">15+</div>
                      <div className="text-sm text-slate-600">AI Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Tab Navigation */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-10"
              variants={fadeInUp}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
              variants={fadeInUp}
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      From Code to Strategy
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      I never set out to be a product manager, but looking back, it feels inevitable. My journey began in 
                      <span className="font-semibold text-slate-900"> Software Engineering</span>, knee-deep in data pipelines and backend systems.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      At first, it was all about solving technical problems—but I realized that the real challenge wasn't just 
                      writing better code. It was figuring out <span className="font-semibold text-slate-900">why</span> we were 
                      building things in the first place. That's when I became obsessed with 
                      <span className="font-semibold text-slate-900"> product thinking</span>.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      At <span className="font-semibold text-slate-900">Carnegie Mellon</span>, I bridged the gap between AI's 
                      raw power and real-world business needs—working with researchers analyzing consumer behavior and exploring 
                      how AI could make sense of human attention.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-900">The Evolution</h4>
                    {[
                      { 
                        icon: Code,
                        phase: 'Engineering Foundation', 
                        desc: 'Built expertise in software architecture, data systems, and cloud technologies',
                        period: '2010-2022',
                        color: 'bg-blue-600'
                      },
                      { 
                        icon: Target,
                        phase: 'Product Discovery', 
                        desc: 'Led product initiatives at Gap Inc, driving $10M+ in risk mitigation through automation',
                        period: '2022-2024',
                        color: 'bg-green-600'
                      },
                      { 
                        icon: Brain,
                        phase: 'Strategic Leadership', 
                        desc: 'Scaling AI products at Capacity while advancing technical product strategy at Carnegie Mellon',
                        period: '2024-Present',
                        color: 'bg-purple-600'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-10 h-10 ${item.color} text-white rounded-lg flex items-center justify-center`}>
                          <item.icon size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-semibold text-slate-900">{item.phase}</h5>
                            <span className="text-xs text-slate-500 font-medium">{item.period}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      How I Think & Work
                    </h3>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                      <p className="text-base italic text-slate-700">
                        "I build products that don't just <span className="text-blue-600 font-semibold">react</span> to data but 
                        <span className="text-blue-600 font-semibold"> anticipate and shape the future</span>."
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        number: '01',
                        title: 'Technology serves people—not the other way around', 
                        desc: 'Every feature must solve a real problem for real users.',
                        color: 'text-blue-600'
                      },
                      { 
                        number: '02',
                        title: 'Data informs, but doesn\'t decide', 
                        desc: 'Analytics guide the journey, but human insight determines the destination.',
                        color: 'text-green-600'
                      },
                      { 
                        number: '03',
                        title: 'Great products evolve, adapt, and learn', 
                        desc: 'Product development is a continuous conversation with users, not a one-time declaration.',
                        color: 'text-purple-600'
                      },
                      { 
                        number: '04',
                        title: 'Technical feasibility meets business viability', 
                        desc: 'The best solutions sit at the intersection of what\'s possible and what\'s profitable.',
                        color: 'text-orange-600'
                      }
                    ].map((principle, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className={`flex-shrink-0 text-2xl font-bold ${principle.color} opacity-40`}>
                          {principle.number}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">{principle.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{principle.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Measurable Business Impact
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    I measure success through tangible business outcomes, user value creation, and organizational transformation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      // { metric: '32%', label: 'Reduction in payment delinquency', context: 'Financial automation at Gap Inc' },
                      { metric: '$213K', label: 'Deal closed through rapid prototyping', context: 'Technical proof-of-concept demonstration at Startup' },
                      { metric: '$10M+', label: 'Annual risk mitigation at Fortune 500', context: 'Process optimization & automation' },
                      { metric: '5.4M+', label: 'Organic Community engagement generated', context: 'Digital platform leadership' },
                      { metric: '26+', label: 'Professionals mentored', context: 'Career development & guidance' }
                    ].map((stat, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg border border-slate-200 text-center">
                        <div className="text-2xl font-bold text-slate-900 mb-1">{stat.metric}</div>
                        <div className="text-sm text-slate-700 font-medium mb-1">{stat.label}</div>
                        <div className="text-xs text-slate-500">{stat.context}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {[
                        'Led 3 successful product launches at Fortune 500 company',
                        'Built AI systems processing millions of transactions daily',
                        'Dean\'s List recognition at Carnegie Mellon University',
                        'VP of Analytics Club managing 200+ graduate students',
                        'Published thought leadership reaching 4K+ industry professionals'
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <ArrowRight size={14} className="text-blue-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Strategic Vision for Technology's Future
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    I believe we're at an inflection point where AI can augment human capabilities rather than replace them, 
                    creating more meaningful work and solving humanity's greatest challenges.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        title: 'Human-Centric AI', 
                        desc: 'Building AI systems that enhance human decision-making, creativity, and problem-solving capabilities'
                      },
                      { 
                        title: 'Ethical Innovation', 
                        desc: 'Ensuring technology development prioritizes fairness, transparency, and societal benefit'
                      },
                      { 
                        title: 'Adaptive Intelligence', 
                        desc: 'Creating products that learn and evolve with users, becoming more valuable over time'
                      },
                      { 
                        title: 'Accessible Technology', 
                        desc: 'Democratizing advanced capabilities to empower organizations of all sizes'
                      }
                    ].map((vision, index) => (
                      <div key={index} className="flex space-x-3 p-4 bg-white rounded-lg border border-slate-200">
                        <div className="flex-shrink-0 w-6 h-6 bg-slate-900 text-white rounded-md flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">{vision.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{vision.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;