import React from 'react';

const CTABanner = () => {
  return (
    <section className="w-full bg-white dark:bg-[#0d0d0d] relative py-10 md:py-16 flex justify-center items-center overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      {/* Optional abstract wave/visual */}
      <div className="absolute top-0 left-0 w-full h-16 pointer-events-none select-none opacity-30 z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,40 Q360,80 720,40 T1440,40 V80 H0 Z" fill="url(#waveGradient)" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#512feb" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative w-full max-w-[1100px] flex flex-col items-center justify-center px-6 md:px-12 text-center z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 md:mb-4">
          Ready to Start Building?
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you're starting from scratch or scaling your next big idea — we're ready to bring it to life.
        </p>
        <a
          href="#contact"
          className="w-full max-w-xs md:max-w-[300px] px-6 py-4 rounded-full font-semibold text-base flex items-center justify-center text-center transition-all duration-200
            bg-[#512feb] text-white border-2 border-[#512feb] hover:bg-[#4a2bd4] shadow-lg
            dark:bg-[#512feb] dark:text-white dark:border-[#512feb] dark:hover:bg-[#4a2bd4] focus:outline-none focus:ring-2 focus:ring-[#512feb]"
        >
          Book a Free Strategy Call
        </a>
      </div>
    </section>
  );
};

export default CTABanner; 