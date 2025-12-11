import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'ShopVerse E-Commerce',
      category: 'E-Commerce',
      description: 'A full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      demoUrl: '/demos/shopverse',
      features: ['Real-time inventory', 'AI recommendations', 'Multi-vendor', 'Analytics'],
      color: '#00d4ff',
    },
    {
      id: 2,
      title: 'FitForge Gym Management',
      category: 'Fitness',
      description: 'Complete gym management system with member tracking, personalized workout plans, and trainer scheduling.',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      demoUrl: '/demos/fitforge',
      features: ['Member management', 'Workout tracking', 'Scheduling', 'Analytics'],
      color: '#7c3aed',
    },
    {
      id: 3,
      title: 'Savoria Restaurant',
      category: 'Restaurant',
      description: 'Modern restaurant website with online ordering, table reservations, and kitchen display system.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Twilio'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      demoUrl: '/demos/savoria',
      features: ['Online ordering', 'Reservations', 'Order tracking', 'Kitchen display'],
      color: '#00ff88',
    },
    {
      id: 4,
      title: 'CloudTask SaaS',
      category: 'SaaS',
      description: 'Project management SaaS with real-time collaboration, Kanban boards, and team analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      demoUrl: '/demos/cloudtask',
      features: ['Real-time collab', 'Kanban', 'Time tracking', 'Team analytics'],
      color: '#ff6b6b',
    },
    {
      id: 5,
      title: 'HealthCare Plus',
      category: 'Healthcare',
      description: 'Telemedicine platform with video consultations, appointment scheduling, and e-prescriptions.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      demoUrl: '/demos/healthcare',
      features: ['Video calls', 'E-prescriptions', 'Health records', 'Appointments'],
      color: '#4ecdc4',
    },
    {
      id: 6,
      title: 'EduLearn LMS',
      category: 'Education',
      description: 'Learning management system with course creation, progress tracking, and interactive quizzes.',
      tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      demoUrl: '/demos/edulearn',
      features: ['Course builder', 'Progress tracking', 'Quizzes', 'Certificates'],
      color: '#ffd93d',
    },
    {
      id: 7,
      title: 'PropertyHub Real Estate',
      category: 'Real Estate',
      description: 'Real estate listing platform with virtual tours, mortgage calculator, and agent matching.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      demoUrl: '/demos/propertyhub',
      features: ['Virtual tours', 'Mortgage calc', 'Agent matching', 'Saved searches'],
      color: '#ff9f43',
    },
    {
      id: 8,
      title: 'TravelMate Booking',
      category: 'Travel',
      description: 'Travel booking platform with flight search, hotel reservations, and itinerary planning.',
      tech: ['React', 'Node.js', 'MongoDB', 'Amadeus API'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      demoUrl: '/demos/travelmate',
      features: ['Flight search', 'Hotel booking', 'Itinerary', 'Price alerts'],
      color: '#a55eea',
    },
    {
      id: 9,
      title: 'CryptoTrack Dashboard',
      category: 'Finance',
      description: 'Cryptocurrency portfolio tracker with real-time prices, alerts, and portfolio analytics.',
      tech: ['React', 'Node.js', 'Redis', 'CoinGecko API'],
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
      demoUrl: '/demos/cryptotrack',
      features: ['Real-time prices', 'Portfolio', 'Alerts', 'Analysis'],
      color: '#f7b731',
    },
    {
      id: 10,
      title: 'SocialBuzz Platform',
      category: 'Social Media',
      description: 'Social media platform with posts, stories, real-time messaging, and content moderation.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      demoUrl: '/demos/socialbuzz',
      features: ['Stories', 'Messaging', 'Moderation', 'Analytics'],
      color: '#eb3b5a',
    },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <motion.main
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-label">My Portfolio</span>
            <h1>
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p>
              Explore my work across various industries. Each project represents 
              a unique challenge solved with modern technologies and creative solutions.
            </p>
          </motion.div>
        </div>
        
        <div className="hero-decoration">
          <div className="deco-orb orb-1" />
          <div className="deco-orb orb-2" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          {/* Filter */}
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  style={{ '--accent-color': project.color }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <Link to={project.demoUrl} className="overlay-btn primary">
                        <HiExternalLink /> Live Demo
                      </Link>
                      <button className="overlay-btn secondary">
                        <HiCode /> View Code
                      </button>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-features">
                      {project.features.map((feature) => (
                        <span key={feature} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                    
                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Projects;
