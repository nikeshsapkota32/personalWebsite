import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / windowHeight) * 100;
      
      setScrollProgress(progress);
      
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="progress-ring" width="60" height="60">
            <circle
              className="progress-ring-circle"
              stroke="var(--primary)"
              strokeWidth="3"
              fill="transparent"
              r="26"
              cx="30"
              cy="30"
              style={{
                strokeDasharray: `${2 * Math.PI * 26}`,
                strokeDashoffset: `${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`,
              }}
            />
          </svg>
          <HiArrowUp className="scroll-icon" />
          <span className="scroll-glow" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
