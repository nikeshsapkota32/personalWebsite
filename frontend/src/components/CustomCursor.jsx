import React from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = ({ mousePosition }) => {
  return (
    <>
      {/* Main Cursor Glow */}
      <motion.div
        className="cursor-glow-effect"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      
      {/* Secondary Cursor Trail */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          mass: 0.2
        }}
      />
    </>
  );
};

export default CustomCursor;
