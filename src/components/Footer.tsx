import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  
  const footerLinks = {
    company: [
      { name: 'About Us', path: '#' },
      { name: 'Our Process', path: '#' },
      { name: 'Case Studies', path: '#' },
      { name: 'Our Team', path: '#' },
    ],
    services: [
      { name: 'SaaS Product Development', path: '/services/saas-development' },
      { name: 'AI-Powered Apps & Platforms', path: '/services/ai-apps' },
      { name: 'Web App Development', path: '/services/web-development' },
      { name: 'Mobile App Development', path: '/services/mobile-apps' },
      { name: 'Chromium & Browser Development', path: '/services/browser-development' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    ],
    connect: [
      { name: 'Contact Us', path: '#contact' },
      { name: 'Book a Call', path: '#contact' },
      { name: 'FAQ', path: '#faq' },
      { name: 'Support', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, path: '#', accentColor: 'neon-cyan' },
    { icon: Twitter, path: '#', accentColor: 'neon-orange' },
    { icon: Github, path: '#', accentColor: 'neon-cyan' },
    { icon: Mail, path: '#', accentColor: 'neon-orange' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-[#0d0d0d] pt-20 pb-8 relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      
      <div className="container mx-auto px-[20px] md:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Logo and Newsletter */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#512feb] to-[#4a2bd4] flex items-center justify-center shadow-lg group-hover:shadow-[#512feb]/30 transition-all duration-300">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold text-black dark:text-white tracking-tight">Entalogics</span>
              </Link>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-sm font-normal leading-relaxed">
              We're your full-stack development partner for modern startups and scaleups. From custom browsers to SaaS apps—designed, engineered, and launched with clarity.
            </p>
            <h4 className="font-bold text-black dark:text-white mb-4">Subscribe to our Newsletter</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-normal leading-relaxed">
              Get the latest insights on technology, development, and design delivered to your inbox.
            </p>
            <form className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#512feb] dark:focus:border-[#512feb] focus:outline-none text-black dark:text-white font-normal"
              />
              <button type="submit" className="px-4 py-3 bg-[#512feb] text-white rounded-xl hover:bg-[#4a2bd4] transition-all duration-300 border-2 border-[#512feb] shadow-lg hover:shadow-[#512feb]/30">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1"></div>

          {/* Column 2, 3, 4: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-700 dark:text-gray-400 hover:text-[#512feb] dark:hover:text-[#512feb] font-normal transition-all duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-700 dark:text-gray-400 hover:text-[#512feb] dark:hover:text-[#512feb] font-normal transition-all duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">Connect</h4>
              <ul className="space-y-4">
                {footerLinks.connect.map(link => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-700 dark:text-gray-400 hover:text-[#512feb] dark:hover:text-[#512feb] font-normal transition-all duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Socials */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0 font-normal">
            &copy; {new Date().getFullYear()} Entalogics. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path} 
                className={`w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#512feb] dark:hover:text-[#512feb] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[#512feb] dark:hover:border-[#512feb]`}
              >
                <link.icon className="w-5 h-5" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 