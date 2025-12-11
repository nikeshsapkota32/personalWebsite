import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ProjectsShowcase from '../components/ProjectsShowcase';
import SkillsSection from '../components/SkillsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutPreview />
      <ProjectsShowcase />
      <SkillsSection />
      <TestimonialsSection />
      <CTASection />
    </motion.main>
  );
};

export default Home;
