import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Play, Code, Cloud, Database, Cpu, Shield, GitBranch, PenTool, Star, Chrome, Github, TerminalSquare, Globe, UserCheck, Lock, Clock, Wallet, Target } from 'lucide-react';
import TrustBar from './TrustBar';
import { getCalApi } from "@calcom/embed-react";

// Enhanced HeroVisual for right side
const HeroVisual = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-80 h-80 md:w-96 md:h-96 flex flex-col items-center justify-center"
      >
        {/* Soft glow background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-black/10 to-white/10 dark:from-black/20 dark:via-white/10 dark:to-black/20 blur-2xl" />
        {/* Main Card */}
        <motion.div
          className="relative z-10 bg-white/70 dark:bg-black/60 backdrop-blur-2xl rounded-3xl border border-black/10 dark:border-gray-700 shadow-2xl px-8 py-7 flex flex-col items-center min-w-[240px]"
          initial={{ scale: 0.98, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          {/* Top badges */}
          <div className="flex gap-2 mb-3">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-xs font-semibold text-black dark:text-white border border-black/10 dark:border-white/10">
              <Star className="w-4 h-4 text-yellow-400" /> Success Rate <span className="ml-1 text-green-600 dark:text-green-400 font-mono">99.9%</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-xs font-semibold text-black dark:text-white border border-black/10 dark:border-white/10">
              <Cpu className="w-4 h-4 text-pink-600 dark:text-pink-400" /> Built with Logic
            </div>
          </div>
          {/* Main Title */}
          <h3 className="text-2xl font-extrabold text-black dark:text-white tracking-wide mb-1">Entalogics</h3>
          {/* Subtitle */}
          <p className="text-xs text-black/60 dark:text-white/70 font-mono mb-2">Full-Stack Agency</p>
          {/* Tech icons row */}
          <div className="flex gap-4 mt-2 flex-wrap justify-center">
            <Code className="w-7 h-7 text-indigo-600 dark:text-indigo-400 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
            <Cloud className="w-7 h-7 text-cyan-600 dark:text-cyan-400 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
            <Shield className="w-7 h-7 text-emerald-600 dark:text-emerald-400 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
            <Chrome className="w-7 h-7 text-blue-500 dark:text-blue-400 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
            <Github className="w-7 h-7 text-gray-800 dark:text-gray-200 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
            <TerminalSquare className="w-7 h-7 text-blue-700 dark:text-blue-300 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
            <Cpu className="w-7 h-7 text-purple-600 dark:text-purple-400 bg-white/60 dark:bg-black/60 rounded-xl p-1.5 shadow" />
          </div>
          {/* Highlight Snaps */}
          <motion.div
            className="w-full mt-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } }
            }}
          >
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-gray-500 dark:text-gray-400 opacity-80">
              <motion.div
                className="flex items-center gap-2"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <Cpu className="w-4 h-4 opacity-60" /> Full-Stack Expertise
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <Clock className="w-4 h-4 opacity-60" /> 24/7 Client Support
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <Wallet className="w-4 h-4 opacity-60" /> Transparent Pricing
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <Globe className="w-4 h-4 opacity-60" /> Cross-Industry Experience
              </motion.div>
              <motion.div
                className="flex items-center gap-2 col-span-2"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <Target className="w-4 h-4 opacity-60" /> Results-Focused
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      <section id="home" className="relative w-full bg-white dark:bg-[#0d0d0d] overflow-hidden flex flex-col md:flex-row items-center justify-center py-0 md:py-14 px-4 md:px-12">
        {/* Background gradient for depth in dark mode only */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-60"></div>
        {/* Subtle animated star/particle background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <circle cx="200" cy="100" r="2" fill="white" />
              <circle cx="400" cy="300" r="1.5" fill="white" />
              <circle cx="800" cy="200" r="2.5" fill="white" />
              <circle cx="1200" cy="400" r="1.2" fill="white" />
              <circle cx="1000" cy="600" r="2" fill="white" />
              <circle cx="300" cy="700" r="1.7" fill="white" />
              <circle cx="600" cy="500" r="1.3" fill="white" />
              <circle cx="1300" cy="150" r="1.8" fill="white" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-0 px-0 sm:px-4 md:px-12 min-h-0">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-between md:justify-center md:items-start items-center text-center md:text-left md:pr-10 h-full pt-20 md:pt-0 pb-2">
          {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 dark:border-[#6d6d8c] bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-[#23233a] dark:via-[#18182b] dark:to-[#23233a] shadow-[0_4px_24px_0_rgba(81,47,235,0.10),0_1.5px_0_0_rgba(81,47,235,0.08)] dark:shadow-[0_4px_24px_0_rgba(81,47,235,0.18),0_1.5px_0_0_rgba(81,47,235,0.12)] ring-1 ring-white/70 dark:ring-black/40 font-semibold text-xs text-gray-900 dark:text-white mb-1 mt-12 relative overflow-visible" style={{boxShadow: '0 4px 24px 0 rgba(81,47,235,0.10), 0 1.5px 0 0 #fff inset, 0 2px 8px 0 rgba(0,0,0,0.04)'}}>
              {/* 3D Glow/Shadow */}
              <span className="absolute -inset-1 rounded-full bg-white/40 dark:bg-black/10 blur-[6px] opacity-60 pointer-events-none" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 via-transparent to-gray-200/60 dark:from-neutral-900/60 dark:via-transparent dark:to-neutral-800/60 blur-[2px] opacity-70 pointer-events-none" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] h-2 bg-gradient-to-t from-gray-300/40 dark:from-black/40 to-transparent rounded-b-full blur-[2px] opacity-60 pointer-events-none" />
              <span className="inline-block w-1.5 h-1.5 bg-[#512feb] rounded-full mr-1 animate-pulse z-10"></span>
              <span className="font-semibold text-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.32)] z-10">
                <span className="block sm:hidden">Full-Stack Dev, Backed by Logic</span>
                <span className="hidden sm:block">Full-Stack Development, Backed by Clean Code and Logic</span>
              </span>
            </div>
          {/* Main heading */}
            <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] font-extrabold text-black dark:text-white leading-tight mb-4 md:mb-6 tracking-tight" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
              <span className="block">Entalogics Gives Your</span>
              <span className="block">Raw Tech Idea a Life—</span>
              <span className="block">Built With <span className="text-[#512feb] font-pacifico">Logic</span></span>
            </h1>
          {/* Subtitle */}
            <p className="text-[1.125rem] text-black/80 dark:text-white/80 mb-3 md:mb-5 max-w-xl mx-auto md:mx-0 leading-snug font-medium pt-1" style={{ fontFamily: "'Roboto', sans-serif" }}>
            We're your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS apps—designed, engineered, and launched with clarity.
          </p>
          {/* Description */}
            <p className="text-base text-black/60 dark:text-white/60 mb-3 md:mb-5 max-w-xl mx-auto md:mx-0 leading-normal font-normal pb-1" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Whether you're building an AI tool, browser platform, or custom enterprise app — we become your extended tech team. From MVP to V1 and beyond — we build what matters.
          </p>
          {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-2 md:mb-4 w-full md:w-auto">
              <button 
                data-cal-namespace="15min"
                data-cal-link="entalogics/15min"
                data-cal-config='{"layout":"month_view","theme":"auto"}'
                className="w-full md:w-auto px-5 md:px-6 py-4 md:py-3 font-semibold rounded-xl shadow-lg transition-all duration-150 text-base flex items-center justify-center text-center gap-2 bg-[#512feb] text-white border-2 border-[#512feb] hover:bg-[#4a2bd4] focus:outline-none focus:ring-2 focus:ring-[#512feb] dark:bg-[#512feb] dark:text-white dark:border-[#512feb] dark:hover:bg-[#4a2bd4] dark:focus:ring-[#512feb]"
              >
               Schedule a Quick Call <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full md:w-auto px-5 md:px-6 py-4 md:py-3 font-semibold rounded-xl border-2 border-[#512feb] shadow-lg transition-all duration-150 text-base flex items-center justify-center text-center gap-2 bg-white text-[#512feb] hover:bg-gray-50 hover:shadow-[0_0_12px_2px_rgba(81,47,235,0.10)] focus:outline-none focus:ring-2 focus:ring-[#512feb] dark:bg-transparent dark:text-[#512feb] dark:border-[#512feb] dark:hover:bg-[#512feb]/10 dark:focus:ring-[#512feb]">
                <Play className="w-5 h-5" /> Watch Demo
              </button>
            </div>
            {/* Security Badge Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 mt-1 mb-3 md:mt-2 md:mb-4">
              <motion.span whileHover={{ scale: 1.08, boxShadow: '0 0 12px 2px rgba(34,211,238,0.18)' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-gray-200 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full h-7 sm:h-8 transition-all duration-100 shadow-[0_2px_8px_0_rgba(34,211,238,0.08)] hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.18)] dark:hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.18)] cursor-pointer mb-2 sm:mb-0">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 drop-shadow-[0_1px_2px_rgba(34,211,238,0.18)]" />SSL Secure
              </motion.span>
              <motion.span whileHover={{ scale: 1.08, boxShadow: '0 0 12px 2px rgba(59,130,246,0.18)' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-gray-200 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full h-7 sm:h-8 transition-all duration-100 shadow-[0_2px_8px_0_rgba(59,130,246,0.08)] hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.18)] cursor-pointer mb-2 sm:mb-0">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 drop-shadow-[0_1px_2px_rgba(59,130,246,0.18)]" />NDA Friendly
              </motion.span>
              <motion.span whileHover={{ scale: 1.08, boxShadow: '0 0 12px 2px rgba(168,85,247,0.18)' }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} className="flex items-center gap-1 text-[11px] sm:text-xs font-medium bg-gray-200 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full h-7 sm:h-8 transition-all duration-100 shadow-[0_2px_8px_0_rgba(168,85,247,0.08)] hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.18)] dark:hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.18)] cursor-pointer mb-2 sm:mb-0">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400 drop-shadow-[0_1px_2px_rgba(168,85,247,0.18)]" />Built by Experts
              </motion.span>
            </div>
            {/* Social Proof Snippet */}
            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.1 }} className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 mb-1 md:mt-3 md:mb-2 cursor-pointer select-none text-center md:text-left whitespace-nowrap w-full overflow-x-auto">
              <Globe className="w-4 h-4 text-neon-cyan" />
              <span>Powering 33+ AI & Apps startups to hit $10M+ ARR</span>
            </motion.div>
            </div>
          {/* Right: Visual Mockup */}
          <div className="hidden md:flex flex-1 items-center justify-end min-h-[180px] xs:min-h-[220px] sm:min-h-[300px] md:min-h-0 mt-4 md:mt-0">
            <HeroVisual />
          </div>
        </div>
      </section>
      <div className="mt-0 md:-mt-8"><TrustBar /></div>
    </>
  );
};

export default Hero; 