import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const SavoriaDemo = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');
  
  const categories = ['Starters', 'Mains', 'Desserts', 'Drinks'];
  
  const menuItems = {
    Starters: [
      { name: 'Truffle Burrata', price: 18, desc: 'Creamy burrata with black truffle and arugula', image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=200&h=200&fit=crop' },
      { name: 'Tuna Tartare', price: 22, desc: 'Fresh yellowfin tuna with avocado and citrus', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop' },
    ],
    Mains: [
      { name: 'Wagyu Ribeye', price: 65, desc: 'A5 Japanese wagyu with seasonal vegetables', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop' },
      { name: 'Lobster Risotto', price: 48, desc: 'Arborio rice with Maine lobster and saffron', image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c1?w=200&h=200&fit=crop' },
    ],
    Desserts: [
      { name: 'Tiramisu', price: 14, desc: 'Classic Italian mascarpone dessert', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop' },
      { name: 'Chocolate Fondant', price: 16, desc: 'Warm chocolate cake with vanilla gelato', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop' },
    ],
    Drinks: [
      { name: 'Signature Martini', price: 18, desc: 'House-infused vodka with elderflower', image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=200&h=200&fit=crop' },
      { name: 'Wine Selection', price: 15, desc: 'Glass of curated red or white', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop' },
    ],
  };

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      
      <div className="demo-header">
        <span className="demo-badge">Restaurant Demo</span>
        <h1>Savoria</h1>
        <p>Modern restaurant with online ordering and reservations</p>
      </div>

      <div className="demo-content" style={{ padding: 0, background: '#0d0d0d' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop" alt="Restaurant" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#00ff88', marginBottom: '15px' }}>Savoria</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Fine Dining Experience</p>
            <button className="btn btn-primary" style={{ background: '#00ff88', color: '#0d0d0d' }}>Reserve a Table</button>
          </div>
        </div>

        {/* Menu */}
        <div style={{ padding: '50px 30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: '12px 25px', background: activeCategory === cat ? '#00ff88' : 'transparent',
                  border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-color)'}`,
                  borderRadius: '30px', color: activeCategory === cat ? '#0d0d0d' : 'var(--text-secondary)', cursor: 'pointer' }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            {menuItems[activeCategory].map((item, i) => (
              <motion.div key={i} className="demo-card" style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.03)' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ marginBottom: '8px' }}>{item.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#00ff88' }}>${item.price}</span>
                    <button style={{ padding: '8px 20px', background: '#00ff88', border: 'none', borderRadius: '20px', color: '#0d0d0d', cursor: 'pointer' }}>Order</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reservation */}
        <div style={{ padding: '50px 30px', background: 'rgba(0, 255, 136, 0.05)', borderTop: '1px solid var(--border-color)' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Make a Reservation</h3>
          <div style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <input type="text" placeholder="Name" style={{ padding: '15px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-primary)' }} />
            <input type="email" placeholder="Email" style={{ padding: '15px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-primary)' }} />
            <input type="date" style={{ padding: '15px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-primary)' }} />
            <input type="time" style={{ padding: '15px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '10px', color: 'var(--text-primary)' }} />
            <button style={{ gridColumn: 'span 2', padding: '18px', background: '#00ff88', border: 'none', borderRadius: '10px', color: '#0d0d0d', fontWeight: 600, cursor: 'pointer' }}>
              Reserve Table
            </button>
          </div>
        </div>
      </div>

      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags">
          <span>Next.js</span><span>Node.js</span><span>MongoDB</span><span>Twilio</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SavoriaDemo;
