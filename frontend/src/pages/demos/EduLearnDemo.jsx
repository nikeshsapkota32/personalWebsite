import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiPlay, HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const EduLearnDemo = () => {
  const courses = [
    { title: 'React Masterclass', instructor: 'John Doe', students: 1250, progress: 75, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop' },
    { title: 'Node.js Advanced', instructor: 'Jane Smith', students: 890, progress: 45, image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop' },
    { title: 'MongoDB Deep Dive', instructor: 'Mike Johnson', students: 650, progress: 30, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">Education Demo</span>
        <h1>EduLearn</h1>
        <p>Learning management system with progress tracking</p>
      </div>
      <div className="demo-content" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16161a 100%)' }}>
        <div style={{ display: 'flex', gap: '30px', padding: '30px', borderBottom: '1px solid var(--border-color)' }}>
          {[{ value: '150+', label: 'Courses', icon: <HiBookOpen /> }, { value: '50K+', label: 'Students', icon: <HiAcademicCap /> }, { value: '4.8', label: 'Rating', icon: '⭐' }].map((stat, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: '#ffd93d', display: 'block' }}>{stat.value}</span>
              <span style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '25px' }}>Continue Learning</h3>
          <div className="demo-grid">
            {courses.map((course, i) => (
              <motion.div key={i} className="demo-card" style={{ padding: 0, overflow: 'hidden' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <div style={{ position: 'relative' }}>
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                  <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,217,61,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HiPlay style={{ fontSize: '1.5rem', color: '#1a1a2e' }} />
                  </button>
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '5px' }}>{course.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px' }}>by {course.instructor}</p>
                  <div style={{ background: 'var(--bg-tertiary)', borderRadius: '10px', height: '8px', marginBottom: '10px' }}>
                    <div style={{ width: `${course.progress}%`, height: '100%', background: '#ffd93d', borderRadius: '10px' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>{course.progress}% complete</span>
                    <span>{course.students} students</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags"><span>React</span><span>Express</span><span>MongoDB</span><span>AWS S3</span></div>
      </div>
    </motion.div>
  );
};

export default EduLearnDemo;
