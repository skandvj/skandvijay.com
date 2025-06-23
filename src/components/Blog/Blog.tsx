import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, ExternalLink, BookOpen, TrendingUp, Users } from 'lucide-react';

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const blogPosts = [
    {
      title: "Reimagining Recruitment: Building RecruitMind AI Agent",
      excerpt: "How I built an AI-powered hiring agent that streamlines recruitment by generating structured workflows and bias-free evaluation frameworks, transforming the broken hiring process.",
      image: "images/recruitmind.png",
      link: "https://medium.com/@skandvj13/reimagining-recruitment-how-i-built-recruitmind-ai-agent-to-transform-the-broken-hiring-process-b5ab836e2212",
      date: "March 2024",
      readTime: "8 min read",
      featured: true,
      category: "AI Product Development",
      engagement: "High"
    },
    {
      title: "Enhancing Spotify with Mood-Based Features",
      excerpt: "A comprehensive product case study exploring how Spotify could respond to users' current state of mind rather than just past behavior, revolutionizing music discovery.",
      image: "images/spotify.png",
      link: "https://medium.com/@skandvj13/case-study-enhancing-spotify-user-engagement-with-a-mood-slider-feature-94cde45e5283",
      date: "February 2024",
      readTime: "12 min read",
      category: "Product Strategy",
      engagement: "High"
    },
    {
      title: "Notion AI's Untapped Gold Mine",
      excerpt: "Product strategy analysis on how Notion can leverage its unique position to make AI a compelling market differentiator in the productivity war.",
      image: "images/notion.png",
      link: "https://medium.com/@skandvj13/notion-ais-untapped-gold-mine-a-product-case-study-to-win-the-ai-productivity-war-a124e86e459a",
      date: "January 2024",
      readTime: "10 min read",
      category: "Strategic Analysis",
      engagement: "Medium"
    },
    {
      title: "Eliminating Multi-Million Dollar Risk at Fortune 500",
      excerpt: "Deep dive into my experience building financial automation tools that reduced payment delinquency by 32% at Gap Inc, showcasing measurable business impact.",
      image: "images/ai.jpg",
      link: "https://medium.com/@skandvj13/case-study-how-i-built-a-financial-automation-tool-to-eliminate-a-multi-million-dollar-risk-at-fb394857afd2",
      date: "December 2023",
      readTime: "15 min read",
      category: "Case Study",
      engagement: "Very High"
    },
    // {
    //   title: "The Future of AI Product Management",
    //   excerpt: "Exploring the evolving role of product managers in AI-driven organizations and the skills needed to succeed in this new landscape.",
    //   image: "images/ai-future.jpg",
    //   link: "https://medium.com/@skandvj13/future-ai-product-management",
    //   date: "November 2024",
    //   readTime: "9 min read",
    //   category: "Industry Insights",
    //   engagement: "High"
    // },
    // {
    //   title: "Building Ethical AI Systems at Scale",
    //   excerpt: "Lessons learned from implementing responsible AI practices in enterprise environments and ensuring bias-free decision making.",
    //   image: "/ethical-ai.jpg",
    //   link: "https://medium.com/@skandvj13/building-ethical-ai-systems",
    //   date: "October 2024",
    //   readTime: "11 min read",
    //   category: "AI Ethics",
    //   engagement: "High"
    // }
  ];

  const stats = [
    { number: '4K+', label: 'Total Readers', icon: Users },
    { number: '5', label: 'Published Articles', icon: BookOpen },
    { number: '98%', label: 'Positive Feedback', icon: TrendingUp }
  ];

  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Deep insights on AI product development, strategic thinking, and lessons learned 
            from building impactful solutions at Fortune 500 companies
          </p>
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const iconColors = [
              'bg-blue-600', // Users - blue
              'bg-purple-600', // BookOpen - purple  
              'bg-green-600' // TrendingUp - green
            ];
            
            return (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className={`w-12 h-12 mx-auto mb-4 ${iconColors[index]} rounded-lg flex items-center justify-center`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={index}
              className="lg:col-span-12"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-all duration-500">
                <div className="grid lg:grid-cols-2">
                  <div className="relative overflow-hidden h-64 lg:h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured Article
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-1">
                        <TrendingUp size={16} className="text-green-400" />
                        <span className="text-sm font-medium">{post.engagement} Engagement</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-slate-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-blue-500" />
                        <span className="text-sm font-medium">{post.date}</span>
                      </div>
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    
                    <motion.a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 w-fit"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read on Medium</span>
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular Posts */}
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={index}
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 text-slate-500 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="text-blue-500" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      post.engagement === 'Very High' ? 'bg-green-100 text-green-800' :
                      post.engagement === 'High' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.engagement} Engagement
                    </span>
                    
                    <motion.a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Blog;