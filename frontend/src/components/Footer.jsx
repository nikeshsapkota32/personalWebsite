import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaDribbble,
  FaHeart 
} from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/nikeshsapkota', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/nikeshsapkota', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/nikeshsapkota', label: 'Twitter' },
    { icon: <FaDribbble />, href: 'https://dribbble.com/nikeshsapkota', label: 'Dribbble' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'API Development',
    'E-commerce Solutions',
    'Cloud Services',
  ];

  return (
    <footer className="footer">
      {/* Top Gradient Line */}
      <div className="footer-gradient-line" />

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="footer-logo">
              <span className="logo-primary">Nikesh</span>
              <span className="logo-secondary">.dev</span>
            </Link>
            <p className="footer-description">
              Crafting digital experiences with passion and precision. 
              Full Stack Developer specializing in modern web technologies.
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    <span className="link-arrow">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-title">Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <span className="service-item">
                    <span className="link-arrow">→</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="contact-list">
              <li>
                <HiMail className="contact-icon" />
                <a href="mailto:nikeshsapkota.code@gmail.com">
                  nikeshsapkota.code@gmail.com
                </a>
              </li>
              <li>
                <HiLocationMarker className="contact-icon" />
                <span>Jacksonville, Alabama, USA</span>
              </li>
              <li>
                <HiPhone className="contact-icon" />
                <span>Available for freelance</span>
              </li>
            </ul>

            {/* CTA */}
            <Link to="/contact" className="btn btn-secondary footer-cta">
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Nikesh Sapkota. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> using React & Node.js
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="footer-decoration">
        <div className="deco-blob blob-1" />
        <div className="deco-blob blob-2" />
      </div>
    </footer>
  );
};

export default Footer;
