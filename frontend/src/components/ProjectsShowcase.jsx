import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import './ProjectsShowcase.css';

const ProjectsShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'ShopVerse E-Commerce',
      category: 'E-Commerce',
      description: 'A full-featured e-commerce platform with real-time inventory and AI-powered recommendations.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      demoUrl: '/demos/shopverse',
      color: '#00d4ff',
    },
    {
      id: 2,
      title: 'FitForge Gym',
      category: 'Fitness',
      description: 'Complete gym management system with member tracking and workout plans.',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      demoUrl: '/demos/fitforge',
      color: '#7c3aed',
    },
    {
      id: 3,
      title: 'Savoria Restaurant',
      category: 'Restaurant',
      description: 'Modern restaurant website with online ordering and table reservations.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Twilio'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      demoUrl: '/demos/savoria',
      color: '#00ff88',
    },
    {
      id: 4,
      title: 'CloudTask SaaS',
      category: 'SaaS',
      description: 'Project management SaaS with real-time collaboration and Kanban boards.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      demoUrl: '/demos/cloudtask',
      color: '#ff6b6b',
    },
    {
      id: 5,
      title: 'HealthCare Plus',
      category: 'Healthcare',
      description: 'Telemedicine platform with video consultations and prescription management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      demoUrl: '/demos/healthcare',
      color: '#4ecdc4',
    },
    {
      id: 6,
      title: 'EduLearn LMS',
      category: 'Education',
      description: 'Learning management system with course creation and progress tracking.',
      tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      demoUrl: '/demos/edulearn',
      color: '#ffd93d',
    },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section className="projects-showcase section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p>
            Explore a selection of my recent work, showcasing innovative solutions 
            across various industries.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                style={{ '--accent-color': project.color }}
              >
                {/* Project Image */}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <Link to={project.demoUrl} className="overlay-btn">
                      <HiExternalLink />
                      View Demo
                    </Link>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Decorative Number */}
                <span className="project-number">0{index + 1}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View All Projects
            <HiArrowRight />
          </Link>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="projects-decoration">
        <div className="deco-circle circle-1" />
        <div className="deco-circle circle-2" />
      </div>
    </section>
  );
};

export default ProjectsShowcase;
