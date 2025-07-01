import React, { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Globe, Send, MessageCircle, Calendar, Linkedin } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      label: 'Drop us a message',
      value: 'hello@entalogics.com',
      link: 'mailto:hello@entalogics.com'
    },
    {
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
      label: 'Book a 15-min Discovery Call',
      value: 'Schedule Now',
      link: '#'
    },
    {
      icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
      label: 'Prefer chat?',
      value: 'Ping us directly on LinkedIn or Upwork',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-14 md:py-20 bg-white dark:bg-[#0d0d0d] relative overflow-hidden">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 opacity-60"></div>
      <div className="container mx-auto px-[20px] md:px-12 max-w-3xl overflow-x-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-2xl font-bold text-black dark:text-white mb-2 md:mb-2">
            Let's Build Something Logical — Together.
          </h2>
          <p className="text-base md:text-sm text-gray-600 dark:text-[#A1A1AA] max-w-2xl mx-auto mb-4 md:mb-6 font-normal">
            Whether you're starting from scratch or scaling your next big idea — we're ready to bring it to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <input
                id="name"
                {...register("name", { required: true })}
                className="w-full px-4 py-3 bg-[#f9f9f9] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-[#2c2c2c] rounded-lg text-black dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#512feb]/30 transition-all"
                placeholder="Name*"
                autoComplete="name"
              />
              {errors.name && <span className="text-red-500 text-xs font-normal">Name is required</span>}
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-3 bg-[#f9f9f9] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-[#2c2c2c] rounded-lg text-black dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#512feb]/30 transition-all"
                placeholder="Email*"
                autoComplete="email"
              />
              {errors.email && <span className="text-red-500 text-xs font-normal">Email is required</span>}
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: true })}
                className="w-full px-4 py-3 bg-[#f9f9f9] dark:bg-[#1a1a1a] border border-[#e5e5e5] dark:border-[#2c2c2c] rounded-lg text-black dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#512feb]/30 transition-all resize-none"
                placeholder="Message*"
              />
              {errors.message && <span className="text-red-500 text-xs font-normal">Message is required</span>}
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-[#512feb] hover:bg-[#4a2bd4] text-white font-semibold rounded-lg transition-all duration-200 text-base mt-2 border-2 border-[#512feb] focus:outline-none focus:ring-2 focus:ring-[#512feb] dark:bg-[#512feb] dark:hover:bg-[#4a2bd4] dark:text-white dark:border-[#512feb] dark:focus:ring-[#512feb]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 justify-start"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f9f9f9] dark:bg-[#1a1a1a] text-[#512feb] dark:text-[#512feb] border border-[#e5e5e5] dark:border-[#2c2c2c]">
                  {info.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-[#A1A1AA] font-medium mb-0.5">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="text-sm text-[#111827] dark:text-white font-semibold hover:underline break-all">{info.value}</a>
                  ) : (
                    <span className="text-sm text-[#111827] dark:text-white font-semibold">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
            
            {/* Trust Reminder */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  NDA Friendly
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  SSL Secure
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Top Rated Plus Team
              </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 