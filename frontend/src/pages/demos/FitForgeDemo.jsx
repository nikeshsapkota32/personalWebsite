import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const FitForgeDemo = () => {
  const stats = [
    { icon: '💪', value: '2,450', label: 'Active Members' },
    { icon: '🏋️', value: '156', label: 'Classes/Week' },
    { icon: '👨‍🏫', value: '32', label: 'Expert Trainers' },
    { icon: '⭐', value: '4.9', label: 'Rating' },
  ];

  const workouts = [
    { name: 'HIIT Training', duration: '45 min', calories: '500-700', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop' },
    { name: 'Strength Building', duration: '60 min', calories: '400-600', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=250&fit=crop' },
    { name: 'Yoga & Flexibility', duration: '50 min', calories: '200-300', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      
      <div className="demo-header">
        <span className="demo-badge">Fitness Demo</span>
        <h1>FitForge</h1>
        <p>Complete gym management system with member tracking and workout analytics</p>
      </div>

      <div className="demo-content" style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #0f051d 100%)', padding: 0 }}>
        {/* Stats */}
        <div className="demo-grid" style={{ padding: '40px 30px' }}>
          {stats.map((stat, i) => (
            <motion.div key={i} className="demo-card" style={{ background: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.3)', textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '10px' }}>{stat.icon}</span>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: '#a78bfa', display: 'block' }}>{stat.value}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Workouts */}
        <div style={{ padding: '0 30px 40px' }}>
          <h3 style={{ marginBottom: '25px', fontSize: '1.3rem' }}>Popular Workouts</h3>
          <div className="demo-grid">
            {workouts.map((workout, i) => (
              <motion.div key={i} className="demo-card" style={{ padding: 0, overflow: 'hidden' }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                <img src={workout.image} alt={workout.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '10px' }}>{workout.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#a78bfa' }}>
                    <span>⏱ {workout.duration}</span>
                    <span>🔥 {workout.calories} cal</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags">
          <span>React</span><span>Express</span><span>PostgreSQL</span><span>Socket.io</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FitForgeDemo;
