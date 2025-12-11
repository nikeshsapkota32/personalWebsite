import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <motion.div
                className="logo-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="logo-text">
                  <span className="logo-primary">Nikesh</span>
                  <span className="logo-secondary">.dev</span>
                </span>
                <div className="logo-glow" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="navIndicator"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              className="nav-cta"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" className="btn btn-primary nav-btn">
                Let's Talk
                <span className="btn-shine" />
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mobile-menu-content">
              <ul className="mobile-nav-links">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      <span className="link-number">0{index + 1}</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mobile-menu-footer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" className="btn btn-primary w-full">
                  Get In Touch
                </Link>
                <p className="mobile-contact-email">nikeshsapkota.code@gmail.com</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="mobile-menu-decoration">
              <div className="deco-circle circle-1" />
              <div className="deco-circle circle-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
