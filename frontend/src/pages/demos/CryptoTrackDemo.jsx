import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const CryptoTrackDemo = () => {
  const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: 67432.50, change: 2.34, icon: '₿' },
    { name: 'Ethereum', symbol: 'ETH', price: 3521.80, change: -1.23, icon: 'Ξ' },
    { name: 'Solana', symbol: 'SOL', price: 142.65, change: 5.67, icon: '◎' },
    { name: 'Cardano', symbol: 'ADA', price: 0.58, change: 1.89, icon: '₳' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">Finance Demo</span>
        <h1>CryptoTrack</h1>
        <p>Cryptocurrency portfolio tracker with analytics</p>
      </div>
      <div className="demo-content" style={{ background: 'linear-gradient(180deg, #0d1421 0%, #080c14 100%)' }}>
        <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Portfolio Value</p>
              <h2 style={{ fontSize: '2.5rem', color: '#f7b731' }}>$124,532.45</h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ color: '#00ff88', fontSize: '1.2rem' }}>+$2,456.78 (2.01%)</span>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>24h Change</p>
            </div>
          </div>
          <div style={{ height: '150px', background: 'linear-gradient(180deg, rgba(247,183,49,0.2) 0%, transparent 100%)', borderRadius: '12px', display: 'flex', alignItems: 'flex-end', padding: '0 20px' }}>
            {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(180deg, #f7b731 0%, transparent 100%)', marginRight: '4px', borderRadius: '4px 4px 0 0' }} />
            ))}
          </div>
        </div>
        <div style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '20px' }}>Your Assets</h3>
          {cryptos.map((crypto, i) => (
            <motion.div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px', marginBottom: '12px', border: '1px solid var(--border-color)' }}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ borderColor: '#f7b731' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ width: '45px', height: '45px', background: '#f7b731', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', fontWeight: 700, color: '#0d1421' }}>{crypto.icon}</span>
                <div>
                  <h4>{crypto.name}</h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{crypto.symbol}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontWeight: 600 }}>${crypto.price.toLocaleString()}</p>
                <span style={{ color: crypto.change >= 0 ? '#00ff88' : '#ff6b6b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                  {crypto.change >= 0 ? <HiTrendingUp /> : <HiTrendingDown />} {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="demo-tech">
        <h3>Built With</h3>
        <div className="tech-tags"><span>React</span><span>Node.js</span><span>Redis</span><span>CoinGecko API</span></div>
      </div>
    </motion.div>
  );
};

export default CryptoTrackDemo;
