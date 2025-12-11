// CloudTaskDemo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const CloudTaskDemo = () => {
  const tasks = [
    { title: 'Design System Update', status: 'In Progress', priority: 'High', assignee: 'John D.' },
    { title: 'API Integration', status: 'Review', priority: 'Medium', assignee: 'Sarah M.' },
    { title: 'User Testing', status: 'Todo', priority: 'High', assignee: 'Mike R.' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">SaaS Demo</span>
        <h1>CloudTask</h1>
        <p>Project management with real-time collaboration</p>
      </div>
      <div className="demo-content">
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          {['Todo', 'In Progress', 'Review', 'Done'].map(col => (
            <div key={col} style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '12px', padding: '15px' }}>
              <h4 style={{ marginBottom: '15px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{col}</h4>
              {tasks.filter(t => t.status === col).map((task, i) => (
                <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '15px', marginBottom: '10px' }}>
                  <h5 style={{ marginBottom: '8px' }}>{task.title}</h5>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: task.priority === 'High' ? '#ff6b6b' : '#ffd93d' }}>{task.priority}</span>
                    <span>{task.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags"><span>React</span><span>Node.js</span><span>MongoDB</span><span>WebSocket</span></div>
      </div>
    </motion.div>
  );
};

export default CloudTaskDemo;
