import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiLocationMarker, HiCalendar, HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const TravelMateDemo = () => {
  const destinations = [
    { name: 'Paris, France', price: 899, rating: 4.9, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=250&fit=crop' },
    { name: 'Tokyo, Japan', price: 1299, rating: 4.8, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop' },
    { name: 'Bali, Indonesia', price: 799, rating: 4.9, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">Travel Demo</span>
        <h1>TravelMate</h1>
        <p>Travel booking platform with itinerary planning</p>
      </div>
      <div className="demo-content" style={{ background: 'linear-gradient(180deg, #1a0a30 0%, #0d0515 100%)' }}>
        <div style={{ padding: '40px 30px', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Where do you want to go?</h2>
          <div style={{ display: 'flex', gap: '15px', maxWidth: '800px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input placeholder="From" style={{ flex: 1, minWidth: '150px', padding: '18px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-primary)' }} />
            <input placeholder="To" style={{ flex: 1, minWidth: '150px', padding: '18px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-primary)' }} />
            <input type="date" style={{ padding: '18px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'var(--text-primary)' }} />
            <button style={{ padding: '18px 40px', background: '#a55eea', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 600, cursor: 'pointer' }}>Search</button>
          </div>
        </div>
        <div style={{ padding: '40px 30px' }}>
          <h3 style={{ marginBottom: '25px' }}>Popular Destinations</h3>
          <div className="demo-grid">
            {destinations.map((dest, i) => (
              <motion.div key={i} className="demo-card" style={{ padding: 0, overflow: 'hidden' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4>{dest.name}</h4>
                    <span style={{ color: '#ffd93d', fontSize: '0.9rem' }}>⭐ {dest.rating}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#a55eea' }}>From ${dest.price}</span>
                    <button style={{ padding: '10px 20px', background: '#a55eea', border: 'none', borderRadius: '20px', color: 'white', cursor: 'pointer' }}>Book</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags"><span>React</span><span>Node.js</span><span>MongoDB</span><span>Amadeus API</span></div>
      </div>
    </motion.div>
  );
};

export default TravelMateDemo;
