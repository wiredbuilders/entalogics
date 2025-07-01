import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Layout from '../../src/components/Layout';

const techStack = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'Sanity CMS',
  'Figma',
  'Vercel',
  'E-commerce',
  'Performance',
  'Animation',
  'UX',
  'API',
  'SSR',
  'Cloud',
  'SEO',
  'Responsive',
];

const challenges = [
  'Low conversions due to poor UX',
  'Outdated HTML/CSS with no responsive behavior',
  'Cluttered navigation and product discovery',
  'No CMS or backend flexibility for dynamic content',
];

const solutions = [
  { icon: '📱', text: 'Mobile-first responsive redesign' },
  { icon: '⚡', text: 'Next.js frontend for performance' },
  { icon: '🗂️', text: 'Integrated Sanity CMS' },
  { icon: '🛒', text: 'New homepage with "Latest Arrivals" + smart product sections' },
  { icon: '🔍', text: 'SEO optimization' },
  { icon: '🎬', text: 'Smooth animations' },
];

const highlights = [
  { icon: '🛒', label: 'Conversion rate', value: '↑ by 38%' },
  { icon: '⏱️', label: 'Page speed', value: '6.2s → 1.1s' },
  { icon: '📱', label: '100% responsive' },
  { icon: '💬', label: 'Feedback', value: '"Feels like a premium store now."' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring', bounce: 0.12 },
  }),
};

const CaseStudyEcommerce = () => {
  return (
    <Layout>
      <div className="bg-white dark:bg-[#0d0d0d] min-h-screen text-black dark:text-white">
        {/* Top Heading & Subtitle */}
        <div className="max-w-4xl mx-auto px-4 md:px-0 pt-24 pb-6 md:pt-32 md:pb-10">
          <span
            className="inline-block text-white text-xs font-semibold px-5 py-1.5 rounded-full mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(24,24,32,0.82) 70%, rgba(60,40,180,0.38) 100%)',
              boxShadow: '0 6px 24px 0 rgba(30,30,60,0.28), 0 2px 12px 0 rgba(80,80,180,0.18) inset',
              border: '2px solid rgba(255,255,255,0.32)',
              backdropFilter: 'blur(22px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(22px) saturate(1.4)',
              position: 'relative',
              overflow: 'hidden',
              minWidth: '140px',
            }}
          >
            {/* Sharper top highlight */}
            <span style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, height: '32%',
              background: 'linear-gradient(90deg,rgba(255,255,255,0.38),rgba(255,255,255,0.10) 80%)',
              borderRadius: 'inherit',
              pointerEvents: 'none',
              zIndex: 1,
              filter: 'blur(0.5px)',
            }} />
            {/* Stronger reflection/shine overlay */}
            <span style={{
              position: 'absolute',
              top: '60%', left: '12%', width: '76%', height: '14%',
              background: 'linear-gradient(90deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.06) 100%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 1,
              filter: 'blur(1.5px)',
            }} />
            {/* Crisp white border for glass edge */}
            <span style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              border: '1.5px solid rgba(255,255,255,0.32)',
              pointerEvents: 'none',
              zIndex: 2,
              boxSizing: 'border-box',
            }} />
            <span style={{ position: 'relative', zIndex: 3, textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}>Web Development</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">E-Commerce Platform Redesign</h1>
          <p className="text-lg md:text-xl font-medium max-w-2xl mb-2 text-gray-700 dark:text-gray-200">Transformed a legacy e-commerce platform into a modern, high-converting web application.</p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">We partnered with a retail brand stuck on an outdated, clunky e-commerce platform. Their customer journey was full of friction — slow load times, broken layout on mobile, and outdated UI. Our mission? Transform it into a sleek, modern shopping experience that converts.</p>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-0 py-6 md:py-10 flex flex-col gap-14">
          {/* Key Highlights */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Key Highlights</h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-sm sm:text-base shadow
                    bg-teal-100 text-teal-900
                    dark:bg-teal-900 dark:text-teal-100
                    backdrop-blur border border-teal-200 dark:border-teal-800"
                  style={{ transition: 'background 0.2s, color 0.2s', minWidth: '0' }}
                >
                  <span className="text-lg sm:text-xl flex-shrink-0">{h.icon}</span>
                  <span className="truncate">{h.label}</span>
                  {h.value && <span className="font-bold text-green-600 dark:text-green-300 truncate">{h.value}</span>}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Challenges</h2>
            <ul className="space-y-3">
              {challenges.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <CheckCircle className="w-5 h-5 text-[#512feb] dark:text-[#7be141]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Our Solution */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Our Solution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((sol, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/70 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow border border-gray-100 dark:border-white/10">
                  <span className="text-2xl md:text-3xl">{sol.icon}</span>
                  <span className="text-base md:text-lg font-medium text-gray-900 dark:text-white">{sol.text}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold shadow border backdrop-blur bg-white/60 dark:bg-white/10 border-gray-200 dark:border-white/10 text-black dark:text-white" style={{boxShadow:'0 2px 8px 0 rgba(80,80,120,0.07)'}}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Results & Impact */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Results & Impact</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This redesign helped the client build a stronger brand presence and reconnect with their online shoppers. The site now runs smoother, looks premium, and performs better across all touchpoints.
            </p>
          </motion.section>

          {/* CTA Section */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want your store redesigned like this?</h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="#contact" className="px-6 py-2.5 rounded-xl font-semibold text-base bg-black text-white hover:bg-neutral-800 transition-all duration-200 shadow-lg border-2 border-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-neutral-200">
                Book a 15-min Call <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>
              <a href="/" className="px-6 py-2.5 rounded-xl font-semibold text-base bg-white text-black border-2 border-black hover:bg-neutral-100 transition-all duration-200 shadow-lg dark:bg-black dark:text-white dark:border-white dark:hover:bg-white/10 flex items-center">
                View More Projects <ExternalLink className="inline-block w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudyEcommerce; 