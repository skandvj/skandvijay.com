import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Instagram, Calendar, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For business inquiries and collaboration opportunities",
      action: "skandv@andrew.cmu.edu",
      href: "mailto:skandv@andrew.cmu.edu",
      primary: true,
      color: "from-red-600 to-red-700" // Gmail red
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a strategic consultation or coffee chat",
      action: "Schedule Call",
      href: "https://calendly.com/skandvijay",
      primary: true,
      color: "from-blue-600 to-blue-700" // Calendly blue
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking and industry insights",
      action: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/skandvijay",
      primary: false,
      color: "from-blue-600 to-blue-800" // LinkedIn blue
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Behind-the-scenes and community building",
      action: "@hey.skand",
      href: "https://www.instagram.com/hey.skand/",
      primary: false,
      color: "from-pink-500 to-purple-600" // Instagram gradient
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "United States of America",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Send,
      label: "Response Time",
      value: "Within 24 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      label: "Availability",
      value: "Open to opportunities",
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900 text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss AI strategy, product opportunities, or potential collaborations? 
            I'm always open to meaningful conversations with fellow leaders and innovators.
          </p>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {quickInfo.map((info, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}>
                <info.icon size={24} className="text-white" />
              </div>
              <div className="text-slate-400 text-sm font-medium mb-1">{info.label}</div>
              <div className="text-white font-semibold">{info.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`block group ${method.primary ? 'md:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`h-full p-6 rounded-2xl border transition-all duration-300 ${
                method.primary 
                  ? 'bg-white text-slate-900 border-white group-hover:bg-slate-100' 
                  : 'bg-slate-800/50 text-white border-slate-700 group-hover:bg-slate-800 group-hover:border-slate-600'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  method.primary 
                    ? `bg-gradient-to-r ${method.color} text-white` 
                    : `bg-gradient-to-r ${method.color} text-white`
                }`}>
                  <method.icon size={24} />
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  method.primary ? 'text-slate-900' : 'text-white'
                }`}>
                  {method.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  method.primary ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {method.description}
                </p>
                
                <div className={`text-sm font-semibold ${
                  method.primary ? 'text-slate-900' : 'text-white'
                }`}>
                  {method.action}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Newsletter Signup - The ScopeMind Brand */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 lg:p-12 text-center border border-slate-600 relative overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            {/* Brand Logo/Name */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Send size={16} className="text-blue-600" />
                </div>
                <span className="text-white font-bold text-lg tracking-wide">The ScopeMind</span>
              </div>
              <p className="text-sm text-slate-400 italic">Strategic Insights for Product Leaders</p>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              Join My Newsletter
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get exclusive insights on AI product development, strategic leadership, and industry trends. 
              Join 5,000+ executives and product leaders who trust my content.
            </p>
            
            <motion.a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7329804924911804416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              <span>Subscribe to The ScopeMind</span>
            </motion.a>
            
            <p className="text-slate-400 text-sm mt-4">
              No spam, unsubscribe anytime. Your email is safe with me.
            </p>
          </div>
        </motion.div>

        {/* Availability Status
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-4 bg-green-900/30 text-green-400 px-6 py-3 rounded-full border border-green-800">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="font-medium">Available for Executive Opportunities • Pittsburgh, PA</span>
          </div>
        </motion.div> */}
{/* Inspirational Quote */}
<motion.div
 className="mt-16"
 initial={{ opacity: 0, y: 40 }}
 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
 transition={{ duration: 0.6, delay: 0.8 }}
>
 <div className="relative max-w-5xl mx-auto">
   {/* Background decorative elements */}
   <div className="absolute top-0 left-0 w-20 h-20 text-slate-200 text-8xl font-serif leading-none">
     "
   </div>
   <div className="absolute bottom-0 right-0 w-20 h-20 text-slate-200 text-8xl font-serif leading-none transform rotate-180">
     "
   </div>
   
   <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 lg:p-16 border border-slate-200 shadow-lg">
     <div className="text-center">
       <blockquote className="text-2xl lg:text-3xl font-light text-slate-800 leading-relaxed mb-8 max-w-4xl mx-auto">
         Dream is not that which you see while sleeping,{' '}
         <span className="font-medium text-slate-900">
           it is something that does not let you sleep.
         </span>
       </blockquote>
       
       <div className="flex items-center justify-center space-x-4">
         <div className="w-16 h-px bg-slate-300"></div>
         <cite className="text-slate-600 font-semibold tracking-wide text-lg">
           APJ Abdul Kalam
         </cite>
         <div className="w-16 h-px bg-slate-300"></div>
       </div>
       
       <p className="text-sm text-slate-500 mt-4 font-medium">
         Former President of India & Renowned Scientist
       </p>
     </div>
   </div>
 </div>
</motion.div>
      </div>
    </section>
  );
};

export default Contact;