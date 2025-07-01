import React from 'react';
import Layout from '../src/components/Layout';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import CaseStudies from '../src/components/CaseStudies';
import WhyChooseUs from '../src/components/WhyChooseUs';
import Values from '../src/components/Values';
import Process from '../src/components/Process';
import Testimonials from '../src/components/Testimonials';
import FAQ from '../src/components/FAQ';
import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';
import CTABanner from '../src/components/CTABanner';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Values />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTABanner />
      <Contact />
    </Layout>
  );
};

export default HomePage; 