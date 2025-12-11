import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="hero">
      {/* Animated Particles */}
      <div className="hero-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="hero-orbs">
        <motion.div
          className="orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-2"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-3"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            Available for freelance work
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm{' '}
            <span className="gradient-text">Nikesh Sapkota</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div className="hero-subtitle" variants={itemVariants}>
            <span className="subtitle-prefix">I'm a</span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Expert',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
                'Tech Innovator',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="typing-text gradient-text"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            With over 7 years of experience crafting digital experiences, I transform 
            complex ideas into elegant, scalable solutions. Specializing in React, 
            Node.js, and modern web technologies to build products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" variants={itemVariants}>
            <Link to="/projects" className="btn btn-primary">
              View My Work
              <HiArrowRight />
            </Link>
            <a href="/resume.pdf" className="btn btn-secondary" download>
              <HiDownload />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="hero-social" variants={itemVariants}>
            <span className="social-label">Connect with me</span>
            <div className="social-links">
              <motion.a
                href="https://github.com/nikeshsapkota"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nikeshsapkota"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span>Scroll Down</span>
          <motion.div
            className="scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Decorative Code Snippet */}
      <motion.div
        className="hero-code-snippet"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="code-header">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
          <span className="code-title">developer.js</span>
        </div>
        <pre className="code-content">
          <code>
{`const developer = {
  name: "Nikesh Sapkota",
  location: "Jacksonville, AL",
  skills: ["React", "Node.js", 
           "MongoDB", "TypeScript"],
  passion: "Building amazing apps",
  available: true
};`}
          </code>
        </pre>
      </motion.div>
    </section>
  );
};

export default Hero;
