import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Users, Code, TrendingUp, Shield, Eye } from 'lucide-react';

const Values = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const values = [
    {
      title: 'Innovation with Purpose',
      description: 'We build what matters. No shiny features unless they solve the right problem.',
      icon: <Lightbulb className="w-8 h-8" />,
      accentColor: 'neon-cyan'
    },
    {
      title: 'Client-First Collaboration',
      description: 'We work like we\'re part of your team. Clear input, no misalignment.',
      icon: <Users className="w-8 h-8" />,
      accentColor: 'neon-orange'
    },
    {
      title: 'Engineering Excellence',
      description: 'We don\'t ship sloppy code. We take pride in solid, scalable builds.',
      icon: <Code className="w-8 h-8" />,
      accentColor: 'neon-cyan'
    },
    {
      title: 'Scalability by Design',
      description: 'We plan for growth from day one, so you don\'t hit a wall later.',
      icon: <TrendingUp className="w-8 h-8" />,
      accentColor: 'neon-orange'
    },
    {
      title: 'Security as Standard',
      description: 'We think about risks early. Your users and data stay protected.',
      icon: <Shield className="w-8 h-8" />,
      accentColor: 'neon-cyan'
    },
    {
      title: 'Transparency in Process',
      description: 'You always know what\'s being built, why, and what\'s next.',
      icon: <Eye className="w-8 h-8" />,
      accentColor: 'neon-orange'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-6xl font-bold text-black dark:text-white mb-2 md:mb-6 tracking-tight">
            What We Stand For
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-[#e5e7eb] dark:border-white/20 shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-all duration-200"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-xl bg-transparent">
                <div className="text-black dark:text-white w-full h-full flex items-center justify-center">
                  {React.cloneElement(value.icon, { className: 'w-6 h-6 md:w-7 md:h-7', stroke: 'currentColor', color: 'inherit', style: { color: 'inherit' } })}
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-1 leading-tight">{value.title}</h4>
                <p className="text-sm text-[#4B5563] dark:text-[#A1A1AA] font-normal line-clamp-3">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Optional CTA */}
        <div className="mt-10 text-center">
          <span className="text-sm text-gray-700 dark:text-gray-300">Want to see how we do it?{' '}
            <a href="#process" className="underline underline-offset-2 font-semibold hover:text-black dark:hover:text-white transition-colors">Explore Our Process</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Values; 