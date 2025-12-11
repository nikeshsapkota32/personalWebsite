import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <motion.div 
      style={{ padding: 'calc(var(--nav-height) + 40px) 24px 60px', maxWidth: '1200px', margin: '0 auto' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '30px' }}>
        <HiArrowLeft /> Back to Projects
      </Link>
      <h1>Project {id}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Project details coming soon...</p>
    </motion.div>
  );
};

export default ProjectDetail;
