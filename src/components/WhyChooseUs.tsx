import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Lock, Brain, Code2, MousePointerClick, Briefcase, Rocket, DollarSign, Shield, Globe, Star, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const CleanArchitectureIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12H36V36H12V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <path d="M18 18H30V30H18V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 36V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M42 24H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 24H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const ExpertTeamIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 26C29.5228 26 34 21.5228 34 16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16C14 21.5228 18.4772 26 24 26Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30.5 30.25C34.33 32.61 37 36.62 37 41V42H11V41C11 36.62 13.67 32.61 17.5 30.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );

  const ScalableSolutionsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 38V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 38V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 38V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const stats = [
    { icon: <Brain className="w-5 h-5" />, value: "33+", label: "Products Launched" },
    { icon: <DollarSign className="w-5 h-5" />, value: "$10M+", label: "ARR Scaled" },
    { icon: <Shield className="w-5 h-5" />, value: "Privacy", label: "Focused Stack" },
    { icon: <Globe className="w-5 h-5" />, value: "9+", label: "Custom Browsers" },
    { icon: <Star className="w-5 h-5" />, value: "Top Rated", label: "Plus on Upwork" },
  ];

  const coreBeliefs = [
    "Build smart, scalable code",
    "Design for clarity & simplicity", 
    "Own what you ship",
    "Think like product partners",
    "Communicate with logic"
  ];

  const points = [
    {
      icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Full-Stack Specialization",
      desc: "We handle frontend, backend, and everything in between. No need to juggle multiple vendors. Our team consistently delivers a cohesive, fully integrated product."
    },
    {
      icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Agile, Fast, Reliable",
      desc: "We follow Agile methodology with weekly sprints, milestone tracking, and regular demos. That means faster delivery cycles and zero guesswork for you."
    },
    {
      icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Code That Won't Break",
      desc: "We write maintainable, scalable code with documentation and clean structure. Entalogics makes sure your product can evolve with future features or tech changes."
    },
    {
      icon: <MousePointerClick className="w-5 h-5 md:w-6 md:h-6" />,
      title: "UI/UX That Converts",
      desc: "We design interfaces that drive actions: improved usability, increased engagement, and higher ROI. Our UX/UI specialists make your visitors fall in love with your site/app."
    },
    {
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Industry-Specific Solutions",
      desc: "From healthcare to eCommerce to SaaS, we understand industry constraints and user expectations, building software that performs where it matters."
    },
    {
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Post-Launch Partnership",
      desc: "We don't disappear after delivery. Our post-launch support ensures updates, improvements, and peace of mind as your product grows."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2 md:mb-4 tracking-tight">
            We're Not Just a Dev Agency — We're Your Long-Term Tech Partner
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4 md:mb-6 font-normal leading-relaxed">
            Entalogics was founded with one goal — to bring clarity and logic into software development. 
            We're a team of engineers, designers, and product minds helping founders go from idea to launch… with systems that scale.
            Whether you're building an AI tool, browser platform, or custom enterprise app — we become your extended tech team. 
            From MVP to V1 and beyond — we build what matters.
          </p>
        </motion.div>

        {/* Stats Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-[#e5e7eb] dark:border-white/30 shadow-lg"
            >
              <span className="text-[#512feb] mb-2">{stat.icon}</span>
              <div className="text-lg md:text-xl font-bold text-black dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Beliefs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white text-center mb-6">
            Our Core Beliefs
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreBeliefs.map((belief, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="px-4 py-2 bg-[#512feb]/10 dark:bg-[#512feb]/20 text-[#512feb] dark:text-[#512feb] rounded-full text-sm font-medium border border-[#512feb]/20"
              >
                {belief}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4">Why Entalogics Is Your Go-to Development Agency</h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-normal">
            You'll find hundreds of full-stack development agencies out there. But Entalogics is different from all the mediocre ones. Here's how:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-start bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-xl p-5 md:p-6 border border-[#e5e7eb] dark:border-white/30 shadow-lg shadow-black/5 dark:shadow-black/30 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 transition-all duration-200"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-[#222] text-black dark:text-white mb-2">
                {item.icon}
              </span>
              <h3 className="text-sm font-medium text-black dark:text-white mb-1 leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-600 dark:text-[#A1A1AA] font-normal leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 