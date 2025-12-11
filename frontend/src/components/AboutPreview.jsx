import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiCode, HiLightningBolt, HiCube, HiSparkles } from 'react-icons/hi';
import './AboutPreview.css';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <HiCode />,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern technologies.',
    },
    {
      icon: <HiLightningBolt />,
      title: 'API Development',
      description: 'Creating robust RESTful APIs and microservices architectures.',
    },
    {
      icon: <HiCube />,
      title: 'Database Design',
      description: 'Designing efficient database schemas and data management solutions.',
    },
    {
      icon: <HiSparkles />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive user interfaces with exceptional user experiences.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="about-preview section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-preview-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Side - About Text */}
          <motion.div className="about-text" variants={itemVariants}>
            <span className="section-label">About Me</span>
            <h2>
              Transforming Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h2>
            <p className="about-description">
              I'm a passionate Full Stack Developer based in Jacksonville, Alabama, 
              with over 7 years of experience in creating innovative digital solutions. 
              My expertise spans the entire development lifecycle, from conceptualization 
              to deployment.
            </p>
            <p className="about-description">
              I specialize in the MERN stack and modern web technologies, delivering 
              high-quality applications that drive business growth and enhance user 
              experiences. Every project is an opportunity to push boundaries and 
              create something extraordinary.
            </p>

            {/* Tech Stack Pills */}
            <div className="tech-stack">
              {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js'].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>

            <Link to="/about" className="btn btn-secondary about-btn">
              More About Me
              <HiArrowRight />
            </Link>
          </motion.div>

          {/* Right Side - Services Grid */}
          <motion.div className="services-grid" variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-number">0{index + 1}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="about-decoration">
        <div className="deco-line line-1" />
        <div className="deco-line line-2" />
      </div>
    </section>
  );
};

export default AboutPreview;
