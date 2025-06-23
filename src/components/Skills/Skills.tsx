import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Target, Users, Brain, TrendingUp, Database, Award, Shield, ExternalLink, Handshake, Trophy } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('product');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { id: 'product', label: 'Product Leadership', icon: Target },
    { id: 'technical', label: 'Technical', icon: Code },
    { id: 'ai', label: 'AI/ML Leadership', icon: Brain },
    { id: 'leadership', label: 'Executive Leadership', icon: Users },
    { id: 'analytics', label: 'Analytics & Strategy', icon: TrendingUp }
  ];

  const skillsData = {
    product: [
      { name: 'Technical Product Strategy', description: 'Building complex technical products, defining system architecture requirements, and translating technical capabilities into business value' },
      { name: 'Product-Market Fit & Validation', description: 'Rapid prototyping, user research, market validation, and iterative product development for technical solutions' },
      { name: 'Cross-Functional Team Leadership', description: 'Leading engineering, design, and data teams, managing technical dependencies, and aligning stakeholders on product priorities' },
      { name: 'Technical Roadmap & Prioritization', description: 'Balancing technical debt, feature development, and platform investments while managing engineering capacity' },
      { name: 'Product Analytics & Experimentation', description: 'A/B testing frameworks, conversion optimization, user behavior analysis, and data-driven product decisions' },
      { name: 'Agile & Lean Product Development', description: 'Scrum methodology, sprint planning, backlog management, and rapid iteration cycles for technical products' }
    ],
    technical: [
      { name: 'Full-Stack Development', description: 'Python, Java, C++, React, Node.js - building end-to-end applications and understanding technical implementation details' },
      { name: 'Cloud Architecture & Infrastructure', description: 'AWS, Azure, GCP - designing scalable systems, microservices architecture, and cloud-native applications' },
      { name: 'Database Design & Optimization', description: 'SQL/NoSQL databases, data modeling, performance optimization, and managing large-scale data systems' },
      { name: 'API Design & System Integration', description: 'RESTful APIs, GraphQL, third-party integrations, and building robust system interfaces' },
      { name: 'DevOps & CI/CD Pipelines', description: 'Automated deployment, infrastructure as code, monitoring, and building efficient development workflows' },
      { name: 'System Architecture & Scalability', description: 'Distributed systems, load balancing, caching strategies, and designing for high-scale performance' }
    ],
    ai: [
      { name: 'AI Product Strategy & Implementation', description: 'Identifying AI use cases, building ML-powered features, and integrating AI capabilities into existing products' },
      { name: 'Machine Learning Operations (MLOps)', description: 'ML pipeline development, model deployment, monitoring, and lifecycle management in production environments' },
      { name: 'Large Language Models & AI Agents', description: 'LLM integration, prompt engineering, building AI agents, and implementing retrieval-augmented generation (RAG)' },
      { name: 'Computer Vision & NLP Applications', description: 'Building vision-based products, text processing systems, and multimodal AI applications' },
      { name: 'AI Ethics & Responsible Development', description: 'Bias mitigation, AI governance frameworks, and building trustworthy AI systems for enterprise use' },
      { name: 'Data Science & Advanced Analytics', description: 'Statistical modeling, predictive analytics, feature engineering, and translating data insights into product features' },
      { name: 'AI Team Leadership & Collaboration', description: 'Working with data scientists and ML engineers, managing AI projects, and technical mentoring' },
      { name: 'AI Business Integration', description: 'Change management for AI adoption, ROI measurement, and scaling AI solutions across organizations' }
    ],
    leadership: [
      { name: 'Technical Leadership & Vision', description: 'Setting technical direction, architecture decisions, and leading complex technical initiatives across organizations' },
      // { name: 'Team Building & Engineering Management', description: 'Hiring technical talent, building high-performing teams, and creating effective engineering cultures' },
      { name: 'Strategic Planning & Execution', description: 'Long-term product strategy, competitive analysis, resource allocation, and driving organizational alignment' },
      { name: 'Stakeholder Management & Communication', description: 'Executive communication, technical presentations, cross-departmental collaboration, and managing diverse stakeholders' },
      { name: 'Change Management & Process Improvement', description: 'Organizational transformation, implementing new technologies, and optimizing development processes' },
      { name: 'Mentoring & Knowledge Transfer', description: 'Developing junior team members, technical coaching, and building learning-oriented teams' },
      { name: 'Crisis Management & Problem Solving', description: 'Technical incident response, rapid problem resolution, and managing high-pressure situations' },
      { name: 'Innovation & Technology Evaluation', description: 'Assessing emerging technologies, driving innovation initiatives, and managing research-to-product pipelines' }
    ],
    analytics: [
      { name: 'Business Intelligence & Reporting', description: 'Building executive dashboards, automated reporting systems, and translating data into actionable business insights' },
      { name: 'Advanced Statistical Analysis', description: 'Predictive modeling, statistical testing, time series analysis, and sophisticated analytical frameworks' },
      { name: 'Data Strategy & Governance', description: 'Enterprise data architecture, data quality management, and building analytics foundations for products' },
      { name: 'Product Metrics & KPI Framework', description: 'Defining success metrics, building measurement systems, and creating data-driven product culture' },
      { name: 'Experimentation & A/B Testing', description: 'Experimental design, statistical significance testing, and building robust testing infrastructure' },
      { name: 'Market Research & Competitive Analysis', description: 'Market sizing, competitive intelligence, customer research, and strategic market analysis' },
      { name: 'Financial Modeling & Business Planning', description: 'Revenue forecasting, cost analysis, ROI calculation, and building financial models for product investments' },
      { name: 'Data Visualization & Communication', description: 'Compelling data storytelling, executive-level reporting, and making complex data accessible' }
    ]
  };


  const certifications = [
    {
      name: 'Professional Scrum Product Owner I',
      issuer: 'Scrum.org',
      year: '2024',
      verified: true,
      link: 'https://www.credly.com/badges/dc1bd65a-faa1-45ae-b924-382d7617c024/public_url'
    },
    // {
    //   name: 'AWS Solutions Architect',
    //   issuer: 'Amazon Web Services',
    //   year: '2024',
    //   verified: true,
    //   link: '#'
    // },
    // {
    //   name: 'Google Cloud Professional',
    //   issuer: 'Google Cloud',
    //   year: '2023',
    //   verified: true,
    //   link: '#'
    // }
  ];

  return (
    <section id="skills" className="section-spacing bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-primary mb-6">
            Expertise
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Comprehensive leadership capabilities spanning product strategy, technical implementation, 
            and executive decision-making in AI-driven organizations
          </p>
        </motion.div>

        {/* Combined Achievement Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: '5+', label: 'Professional Certifications', icon: Award, color: 'bg-orange-600' },
            { number: '15+', label: 'Industry Collaborations', icon: Handshake, color: 'bg-blue-600' },
            { number: '$11M+', label: 'Product Value Delivered', icon: Trophy, color: 'bg-green-600' },
            { number: '6+', label: 'Professionals Mentored', icon: Users, color: 'bg-purple-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-lg">
              <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Detailed Achievements with Context */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              number: '$10M+',
              label: 'Risk mitigated in financial ops',
              context: 'Backlog automation & approver routing at Gap Inc.',
              icon: TrendingUp,
              color: 'bg-emerald-600'
            },
            {
              number: '3+ yrs',
              label: 'Cross-functional leadership',
              context: 'Led teams across product, engineering, and research',
              icon: Users,
              color: 'bg-indigo-600'
            },
            {
              number: '12+',
              label: 'AI/ML products deployed',
              context: 'Used in real-world enterprise environments',
              icon: Brain,
              color: 'bg-violet-600'
            },
            {
              number: '200+',
              label: 'Graduate students led',
              context: 'VP Analytics Club at Carnegie Mellon Heinz College',
              icon: Target,
              color: 'bg-amber-600'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center executive-card professional-hover"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">
                {stat.number}
              </div>
              <div className="text-slate-900 font-semibold mb-2">{stat.label}</div>
              <div className="text-slate-600 text-sm">{stat.context}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <category.icon size={20} />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - Clean Design without Progress Bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="executive-card professional-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
                  <span className="text-sm font-bold text-slate-900 px-3 py-1 bg-slate-100 rounded-full">
                    Expert
                  </span>
                </div>
                
                <p className="text-slate-600 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Professional Certifications */}
        <motion.div
          className="mt-20 pt-20 border-t border-slate-200"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="executive-card text-center professional-hover"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-900 rounded-2xl flex items-center justify-center">
                  <Award size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {cert.name}
                </h4>
                <p className="text-slate-700 mb-2 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  {cert.year}
                </p>
                {cert.verified && (
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Shield size={16} className="text-green-600" />
                    <span className="text-green-600 text-sm font-medium">Verified</span>
                  </div>
                )}
                {cert.link !== '#' && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-slate-900 hover:text-slate-700 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Credential</span>
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;