import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const PropertyHubDemo = () => {
  const properties = [
    { title: 'Modern Downtown Loft', price: 450000, beds: 2, baths: 2, sqft: 1200, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop' },
    { title: 'Suburban Family Home', price: 680000, beds: 4, baths: 3, sqft: 2400, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop' },
    { title: 'Luxury Penthouse', price: 1250000, beds: 3, baths: 3, sqft: 2800, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">Real Estate Demo</span>
        <h1>PropertyHub</h1>
        <p>Real estate platform with virtual tours</p>
      </div>
      <div className="demo-content">
        <div style={{ display: 'flex', gap: '15px', padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px', marginBottom: '30px' }}>
          <input placeholder="Search location..." style={{ flex: 1, padding: '15px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-primary)' }} />
          <select style={{ padding: '15px 25px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-primary)' }}>
            <option>Any Price</option><option>$200K-$400K</option><option>$400K-$600K</option><option>$600K+</option>
          </select>
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="demo-grid">
          {properties.map((prop, i) => (
            <motion.div key={i} className="demo-card" style={{ padding: 0, overflow: 'hidden' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
              <div style={{ position: 'relative' }}>
                <img src={prop.image} alt={prop.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <button style={{ position: 'absolute', top: '15px', right: '15px', width: '36px', height: '36px', borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer' }}><HiHeart style={{ color: '#ff6b6b' }} /></button>
                <span style={{ position: 'absolute', bottom: '15px', left: '15px', padding: '5px 12px', background: '#ff9f43', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>For Sale</span>
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ marginBottom: '10px' }}>{prop.title}</h4>
                <p style={{ color: '#ff9f43', fontSize: '1.3rem', fontWeight: 700, marginBottom: '15px' }}>${prop.price.toLocaleString()}</p>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>🛏 {prop.beds} Beds</span><span>🛁 {prop.baths} Baths</span><span>📐 {prop.sqft} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags"><span>Next.js</span><span>Node.js</span><span>MongoDB</span><span>Mapbox</span></div>
      </div>
    </motion.div>
  );
};

export default PropertyHubDemo;
