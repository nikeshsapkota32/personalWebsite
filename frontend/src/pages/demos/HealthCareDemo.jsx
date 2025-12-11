import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiVideoCamera, HiCalendar, HiDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const HealthCareDemo = () => {
  const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', rating: 4.9, available: true, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop' },
    { name: 'Dr. Michael Chen', specialty: 'Neurologist', rating: 4.8, available: true, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop' },
    { name: 'Dr. Emily Davis', specialty: 'Pediatrician', rating: 4.9, available: false, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">Healthcare Demo</span>
        <h1>HealthCare Plus</h1>
        <p>Telemedicine platform with video consultations</p>
      </div>
      <div className="demo-content" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1117 100%)' }}>
        <div style={{ display: 'flex', gap: '20px', padding: '30px', borderBottom: '1px solid var(--border-color)' }}>
          {[{ icon: <HiVideoCamera />, label: 'Video Call', color: '#4ecdc4' }, { icon: <HiCalendar />, label: 'Book Appointment', color: '#a78bfa' }, { icon: <HiDocumentText />, label: 'Health Records', color: '#ffd93d' }].map((item, i) => (
            <motion.div key={i} className="demo-card" style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} whileHover={{ y: -5 }}>
              <div style={{ fontSize: '2rem', color: item.color, marginBottom: '10px' }}>{item.icon}</div>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
        <div style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '25px' }}>Available Doctors</h3>
          <div className="demo-grid">
            {doctors.map((doc, i) => (
              <motion.div key={i} className="demo-card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <img src={doc.image} alt={doc.name} style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4>{doc.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{doc.specialty}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#ffd93d' }}>⭐ {doc.rating}</span>
                    <span style={{ fontSize: '0.8rem', color: doc.available ? '#4ecdc4' : '#ff6b6b' }}>{doc.available ? '● Available' : '● Busy'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags"><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>WebRTC</span></div>
      </div>
    </motion.div>
  );
};

export default HealthCareDemo;
