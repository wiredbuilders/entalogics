import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Phone, Target, Palette, Code, Shield, Rocket } from 'lucide-react';

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.25, duration: 0.7, type: 'spring', bounce: 0.18 } }),
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.5 } }
};

const Process = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [stepInView, setStepInView] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY + window.innerHeight * 0.8;
      let newStep = 0;
      for (let i = 0; i < processSteps.length; i++) {
        const stepOffset = sectionTop + 120 + i * 120; // 120px per step
        if (scrollY > stepOffset) newStep = i + 1;
      }
      setStepInView(newStep);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const processSteps = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We understand your goals, challenges, and what your users actually need.',
      icon: <Phone className="w-8 h-8" />,
      accentColor: 'neon-cyan',
      details: [
        'Initial consultation and requirements gathering',
        'Understanding your business objectives',
        'Identifying user needs and pain points',
        'Defining project scope and timeline'
      ]
    },
    {
      step: '2',
      title: 'Strategy & Planning',
      description: 'We define tech stack, timelines, and milestones. You get a clear roadmap from day one.',
      icon: <Target className="w-8 h-8" />,
      accentColor: 'neon-orange',
      details: [
        'Technology stack selection',
        'Project timeline and milestones',
        'Resource allocation and team structure',
        'Risk assessment and mitigation strategies'
      ]
    },
    {
      step: '3',
      title: 'Design & Prototyping',
      description: 'You\'ll see your product early — clickable, testable, and feedback-ready before we write a single line of code.',
      icon: <Palette className="w-8 h-8" />,
      accentColor: 'neon-cyan',
      details: [
        'UI/UX design and wireframing',
        'Interactive prototypes and mockups',
        'User testing and feedback collection',
        'Design system and component library'
      ]
    },
    {
      step: '4',
      title: 'Development',
      description: 'We build in agile sprints with weekly updates. You stay in control — no surprises.',
      icon: <Code className="w-8 h-8" />,
      accentColor: 'neon-orange',
      details: [
        'Agile development with weekly sprints',
        'Regular demos and progress updates',
        'Code reviews and quality assurance',
        'Continuous integration and deployment'
      ]
    },
    {
      step: '5',
      title: 'Testing & QA',
      description: 'We break it before users do. Every screen, flow, and feature is stress-tested and validated.',
      icon: <Shield className="w-8 h-8" />,
      accentColor: 'neon-cyan',
      details: [
        'Comprehensive testing across devices',
        'Performance and security testing',
        'User acceptance testing',
        'Bug fixes and optimization'
      ]
    },
    {
      step: '6',
      title: 'Launch & Support',
      description: 'We go live, track performance, and stay available for quick fixes, iterations, or scaling.',
      icon: <Rocket className="w-8 h-8" />,
      accentColor: 'neon-orange',
      details: [
        'Production deployment and launch',
        'Performance monitoring and analytics',
        'Ongoing support and maintenance',
        'Feature updates and enhancements'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-white dark:bg-[#0D0D0D] relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-2xl font-bold text-black dark:text-white mb-2 md:mb-2 tracking-tight">
            Here's How We Build With You
          </h2>
          <p className="text-base md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 md:mb-4">
            Our process keeps you in the loop — with speed, clarity, and zero guesswork. We don't just code — we collaborate.
          </p>
        </motion.div>
        <div className="relative flex flex-col items-center">
          <div className="flex flex-col gap-10 w-full z-10">
          {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={stepInView > idx ? 'visible' : 'hidden'}
                exit="exit"
                variants={stepVariants}
                className="relative flex items-center w-full"
              >
                {/* Step circle */}
                <div className="flex flex-col items-center mr-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white dark:border-[#181818] bg-gradient-to-br from-[#512feb] to-[#01F5C3] mb-2 z-10`}>{step.step}</div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-1 h-10 bg-gradient-to-b from-[#512feb] to-[#01F5C3] opacity-60" style={{ minHeight: 40 }} />
                  )}
              </div>
                {/* Step content */}
                <div className="flex-1 bg-white/80 dark:bg-white/10 backdrop-blur-lg border border-[#e5e7eb] dark:border-white/20 rounded-xl px-5 py-4 shadow-md">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[#512feb] dark:text-[#01F5C3]">{React.cloneElement(step.icon, { className: 'w-6 h-6' })}</span>
                    <span className="text-base md:text-lg font-semibold text-black dark:text-white">{step.title}</span>
              </div>
                  <p className="text-sm md:text-base text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">{step.description}</p>
            </div>
              </motion.div>
          ))}
          </div>
        </div>
        {/* CTA at end */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={stepInView === processSteps.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">💬 Ready to start building?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm md:text-base bg-[#512feb] text-white border-2 border-[#512feb] hover:bg-[#4a2bd4] dark:bg-[#512feb] dark:text-white dark:border-[#512feb] dark:hover:bg-[#4a2bd4] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#512feb] shadow-lg"
            style={{ minWidth: 0 }}
          >
            Book a 15-min call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 