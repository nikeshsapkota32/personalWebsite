import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import './CTASection.css';

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/* Decorative Elements */}
          <div className="cta-decoration">
            <div className="deco-ring ring-1" />
            <div className="deco-ring ring-2" />
            <div className="deco-ring ring-3" />
          </div>

          {/* Content */}
          <motion.span
            className="cta-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Let's Work Together
          </motion.span>

          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Have a Project in Mind?
            <br />
            <span className="gradient-text">Let's Build Something Amazing</span>
          </motion.h2>

          <motion.p
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            I'm currently available for freelance work and exciting new projects. 
            Whether you need a full-stack application, a stunning website, or 
            technical consultation, I'm here to help bring your ideas to life.
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <Link to="/contact" className="btn btn-primary cta-btn">
              <HiMail />
              Start a Conversation
            </Link>
            <Link to="/projects" className="btn btn-secondary cta-btn">
              View My Work
              <HiArrowRight />
            </Link>
          </motion.div>

          {/* Email */}
          <motion.a
            href="mailto:nikeshsapkota.code@gmail.com"
            className="cta-email"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            nikeshsapkota.code@gmail.com
          </motion.a>
        </motion.div>
      </div>

      {/* Background */}
      <div className="cta-background">
        <div className="bg-gradient" />
        <div className="bg-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
