import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiDownload, HiMail, HiLocationMarker, HiAcademicCap,
  HiBriefcase, HiCode, HiLightningBolt
} from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Freelance',
      period: '2021 - Present',
      description: 'Leading development of full-stack applications for clients worldwide. Specializing in MERN stack, e-commerce solutions, and SaaS platforms.',
    },
    {
      title: 'Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Led a team of 3 junior developers.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency XYZ',
      period: '2017 - 2019',
      description: 'Created responsive web applications and collaborated with designers to implement pixel-perfect UI components.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Jacksonville State University',
      period: '2019 - 2021',
      description: 'Focus on Software Engineering and Distributed Systems',
    },
    {
      degree: 'Bachelor of Information Technology',
      school: 'Tribhuvan University',
      period: '2013 - 2017',
      description: 'Foundation in programming, databases, and system design',
    },
  ];

  const values = [
    {
      icon: <HiCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      icon: <HiLightningBolt />,
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience.',
    },
    {
      icon: <HiBriefcase />,
      title: 'Professionalism',
      description: 'Delivering projects on time with clear communication.',
    },
    {
      icon: <HiAcademicCap />,
      title: 'Continuous Learning',
      description: 'Staying updated with the latest technologies and best practices.',
    },
  ];

  return (
    <motion.main
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
                  alt="Nikesh Sapkota" 
                />
                <div className="image-border" />
              </div>
              <div className="experience-badge">
                <span className="badge-number">7+</span>
                <span className="badge-text">Years<br />Experience</span>
              </div>
            </motion.div>

            <motion.div
              className="about-intro"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="page-label">About Me</span>
              <h1>
                I'm <span className="gradient-text">Nikesh Sapkota</span>
              </h1>
              <h2>Full Stack Developer & Tech Enthusiast</h2>
              
              <p>
                I'm a passionate Full Stack Developer based in Jacksonville, Alabama, 
                with over 7 years of experience crafting digital solutions. I specialize 
                in building modern web applications using the MERN stack and other 
                cutting-edge technologies.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work on 
                the web. Today, I've transformed that curiosity into expertise, 
                helping businesses and startups bring their ideas to life through 
                clean, efficient, and scalable code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>

              <div className="about-info">
                <div className="info-item">
                  <HiMail />
                  <span>nikeshsapkota.code@gmail.com</span>
                </div>
                <div className="info-item">
                  <HiLocationMarker />
                  <span>Jacksonville, Alabama, USA</span>
                </div>
              </div>

              <div className="about-actions">
                <a href="/resume.pdf" className="btn btn-primary" download>
                  <HiDownload /> Download CV
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  <HiMail /> Contact Me
                </Link>
              </div>

              <div className="about-social">
                <a href="https://github.com/nikeshsapkota" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/nikeshsapkota" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com/nikeshsapkota" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="deco-orb orb-1" />
          <div className="deco-orb orb-2" />
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-label">What I Believe In</span>
            <h2>My Core <span className="gradient-text">Values</span></h2>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section">
        <div className="container">
          <div className="experience-content">
            <div className="timeline-section">
              <h2><HiBriefcase /> Work Experience</h2>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-period">{exp.period}</span>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="timeline-section">
              <h2><HiAcademicCap /> Education</h2>
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-period">{edu.period}</span>
                      <h3>{edu.degree}</h3>
                      <h4>{edu.school}</h4>
                      <p>{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
