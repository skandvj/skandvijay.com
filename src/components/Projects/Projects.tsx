import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowRight, Star, TrendingUp, Play, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "RecruitMind - AI Hiring Agent",
      description: "Enterprise-grade AI agent that revolutionizes recruitment by generating structured workflows, bias-free job descriptions, and role-specific evaluation frameworks. Reduces hiring time by 60% while improving candidate quality.",
      image: "images/recruitaiagent.png",
      github: "https://github.com/skandvj/hr-hiring-agent",
      demo: "https://recruitmind-demo.vercel.app",
      tech: ["AI Agents", "NLP", "Python", "Machine Learning"],
      featured: true,
      impact: "60% reduction in hiring time",
      category: "AI Product",
      interactive: false
    },
    {
      title: "NLP Duplicate Job Detection Engine",
      description: "Advanced machine learning system that identifies and eliminates duplicate job postings using sophisticated NLP techniques, saving companies thousands in posting costs.",
      image: "images/jobdetection.png",
      github: "https://github.com/skandvj/duplicate-job-posting-detection",
      // demo: "https://job-detection-demo.vercel.app",
      tech: ["NLP", "Machine Learning", "Python", "Text Analysis"],
      impact: "95% accuracy in detection",
      category: "ML Engineering",
      interactive: false
    },
    {
      title: "NewStory - AI Story Generator",
      description: "Agentic AI system that generates compelling narratives and plots with creative structures, used by content creators and educational platforms.",
      image: "images/agenticai.png",
      github: "https://github.com/skandvj/AI-Agents-for-Illustrations-and-Story-Generation",
      // demo: "https://newstory-ai.vercel.app",
      tech: ["Generative AI", "Creative AI", "Python", "Storytelling"],
      impact: "10K+ stories generated",
      category: "Creative AI",
      interactive: false
    },
    {
      title: "SketchAI - Sketch to Product Image Creator",
      description: "Transform hand-drawn sketches into professional product-ready images using advanced computer vision and generative AI models.",
      image: "images/sketchai.webp",
      github: "https://github.com/skandvj/SketchAI--Creates-Sketches-into-Product-Ready-Images",
      // demo: "https://sketchai-demo.vercel.app",
      tech: ["Computer Vision", "Image Generation", "AI", "Product Design"],
      impact: "Professional-grade outputs",
      category: "Computer Vision",
      interactive: false
    },
    {
      title: "RAG Document Search System",
      description: "Enterprise Retrieval-Augmented Generation system for intelligent document search and question answering, deployed across multiple organizations.",
      image: "images/nlp.png",
      github: "https://github.com/skandvj/Retrieval-Augmented-Generation-RAG-System-for-NLP-Driven-Document-Search",
      // demo: "https://rag-search-demo.vercel.app",
      tech: ["RAG", "LLM", "Vector Search", "NLP"],
      impact: "80% faster document retrieval",
      category: "Enterprise AI",
      interactive: false
    },
    // {
    //   title: "LLM Performance Optimization",
    //   description: "Advanced prompt engineering methods and optimization techniques that improve large language model performance and accuracy by 40%.",
    //   image: "images/prompt.png",
    //   github: "https://github.com/skandvj/Precision-Tuned-Prompt-Engineering-for-LLM-Performance-Optimization",
    //   // demo: "https://llm-optimizer.vercel.app",
    //   tech: ["LLM", "Prompt Engineering", "AI Optimization", "Performance"],
    //   impact: "40% performance improvement",
    //   category: "AI Optimization",
    //   interactive: false
    // }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Innovative AI solutions and product development showcasing technical excellence 
            and measurable business impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              className="lg:col-span-12"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-6 w-fit">
                      <Star size={16} className="mr-2" />
                      Featured Project
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        <TrendingUp size={16} className="mr-2" />
                        {project.impact}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play size={18} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden bg-slate-100">
                    <motion.div
                      className="h-full min-h-[400px] flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.interactive && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <Eye size={48} className="mx-auto mb-4" />
                            <p className="text-lg font-semibold">Interactive Demo Available</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular Projects */}
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative overflow-hidden h-48 bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-slate-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {project.interactive && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        Interactive
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {project.impact}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto gap-2">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Play size={14} />
                        <span>Demo</span>
                      </motion.a>
                    )}
                    
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      <span className="font-medium text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Experience My Projects Live</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            All projects include interactive demos where you can test the AI systems directly. 
            Experience the technology that's transforming businesses.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm">
              <Play size={16} className="mr-2" />
              Live Demos Available
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm">
              <Github size={16} className="mr-2" />
              Open Source Code
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;