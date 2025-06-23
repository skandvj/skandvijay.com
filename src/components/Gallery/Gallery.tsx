import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Award, ExternalLink, Filter, Grid, List, Star, Trophy, Building, Handshake } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const galleryItems = [
    // {
    //   id: 1,
    //   title: "Professional Scrum Product Owner I Certification",
    //   category: "achievement",
    //   image: "/image.png",
    //   date: "2024",
    //   location: "Scrum.org",
    //   description: "Earned PSPO-I certification demonstrating expertise in product ownership and agile methodologies. This certification validates my ability to maximize product value and effectively collaborate with development teams.",
    //   verificationLink: "https://www.credly.com/badges/dc1bd65a-faa1-45ae-b924-382d7617c024/public_url",
    //   type: "certification",
    //   featured: true
    // },
    {
      id: 2,
      title: "Carnegie Mellon University - Dean's List Recognition",
      category: "achievement",
      image: "/gallery/accepted-cmu.jpeg",
      date: "2024",
      location: "Pittsburgh, PA",
      description: "Recognized for outstanding academic performance in Master's program. This achievement reflects my commitment to excellence in AI and product management education.",
      type: "academic",
      featured: true
    },
    {
      id: 5,
      title: "Research Collaboration with MIT Sloan x CMU Professor",
      category: "meeting",
      image: "/gallery/cmu-research.jpeg",
      date: "Jan 2025",
      location: "MIT Sloan x Carnegie Mellon",
      description: "Collaborative research session with Privacy Economics Experiment Lab focusing on consumer behavior analysis and Ads targeting in digital privacy.",
      type: "research",
      featured: true
    },
    {
      id: 4,
      title: "Amazon HQ Strategic Visit",
      category: "visit",
      image: "/gallery/aws-vist.jpeg",
      date: "May 2023",
      location: "New York, NY",
      description: "Strategic visit to Amazon headquarters exploring AWS-powered innovations, autonomous technology, and cloud infrastructure solutions. Gained insights into enterprise-scale AI implementation.",
      type: "corporate_visit",
      featured: true
    },
    {
      id: 3,
      title: "Gap Inc Product Innovation Success",
      category: "achievement",
      image: "/gallery/gap-award.png",
      date: "2023",
      location: "Client Location: San Francisco, CA",
      description: "Led successful financial automation product launch reducing the risk of $10M+ journal backlog. Recognized with Best Employee Award for exceptional performance.",
      type: "professional",
      featured: true
    },
   
  
    // {
    //   id: 6,
    //   title: "Tech Innovation Summit - AI Panel",
    //   category: "meeting",
    //   image: "/Images/tech-summit.jpg",
    //   date: "January 2024",
    //   location: "San Francisco, CA",
    //   description: "Participated as panelist in discussion on future technology trends, AI product development, and the intersection of business strategy with emerging technologies.",
    //   type: "conference"
    // },
    // {
    //   id: 7,
    //   title: "Community Leadership Achievement",
    //   category: "achievement",
    //   image: "/Images/community.jpg",
    //   date: "2024",
    //   location: "Digital Platform",
    //   description: "Built and scaled digital community platform achieving 5.4M+ total engagements. Successfully guided 26+ students in career development and university admissions.",
    //   type: "community"
    // },
    // {
    //   id: 8,
    //   title: "Capacity AI Strategy Session",
    //   category: "meeting",
    //   image: "/capacity.png",
    //   date: "2024",
    //   location: "St. Louis, MO",
    //   description: "Strategic planning session for AI product development initiatives, focusing on enterprise automation solutions and market expansion strategies.",
    //   type: "team_meeting"
    // },
    // {
    //   id: 9,
    //   title: "Analytics Club VP Leadership",
    //   category: "achievement",
    //   image: "/Images/cmu.jpg",
    //   date: "November 2024",
    //   location: "Carnegie Mellon",
    //   description: "Elected Vice President of Analytics Club at Heinz College, leading initiatives for 200+ graduate students and organizing industry partnerships.",
    //   type: "leadership"
    // },
    // {
    //   id: 10,
    //   title: "HP Tech Ventures Collaboration",
    //   category: "meeting",
    //   image: "/Images/hptech.webp",
    //   date: "September 2024",
    //   location: "Palo Alto, CA",
    //   description: "Business analysis collaboration with HP Tech Ventures, focusing on startup ecosystem evaluation and technology investment strategies.",
    //   type: "corporate"
    // }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: Grid },
    { id: 'achievement', label: 'Achievements', icon: Trophy },
    { id: 'visit', label: 'Strategic Visits', icon: Building },
    { id: 'meeting', label: 'Collaborations', icon: Handshake }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-slate-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A visual journey through professional achievements, strategic collaborations, 
            and meaningful connections in the AI and product management ecosystem
          </p>
        </motion.div>

        {/* Featured Items - Fixed, never changes */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Featured Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.filter(item => item.featured).map((item, index) => (
              <motion.div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                      <Star size={12} />
                      <span>Featured</span>
                    </span>
                  </div>

                  {/* Verification Link */}
                  {(item as any).verificationLink && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={(item as any).verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-slate-700 p-2 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}

                  {/* Date and Location */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 text-sm mb-1">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Regular Gallery Grid - Shows ALL items, controllable by filters */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'achievement' ? 'bg-green-100 text-green-800' :
                    item.category === 'visit' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>

                {/* Verification Link */}
                {(item as any).verificationLink && (
                  <div className="absolute top-4 right-4">
                    <a
                      href={(item as any).verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-slate-700 p-2 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}

                {/* Date and Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm mb-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
