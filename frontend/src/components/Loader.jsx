import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div 
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        {/* Animated Logo */}
        <motion.div 
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.6, -0.05, 0.01, 0.99] 
          }}
        >
          <span className="logo-letter">N</span>
          <span className="logo-letter">S</span>
        </motion.div>

        {/* Loading Bar */}
        <div className="loader-bar-container">
          <motion.div 
            className="loader-bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>

        {/* Loading Text */}
        <motion.p 
          className="loader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Initializing Experience...
        </motion.p>

        {/* Floating Particles */}
        <div className="loader-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                opacity: 0,
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200 
              }}
              animate={{ 
                opacity: [0, 1, 0],
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Orbiting Rings */}
        <div className="orbit-rings">
          <motion.div 
            className="orbit orbit-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div 
            className="orbit orbit-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div 
            className="orbit orbit-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Background Gradient Blobs */}
      <div className="loader-bg">
        <motion.div 
          className="bg-blob blob-1"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="bg-blob blob-2"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
