import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiHeart, HiChat, HiShare, HiDotsHorizontal } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './DemoStyles.css';

const SocialBuzzDemo = () => {
  const posts = [
    { user: 'Sarah Johnson', handle: '@sarahj', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', content: 'Just launched my new portfolio website! So excited to share my work with the world 🚀✨', likes: 234, comments: 45, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop' },
    { user: 'Mike Chen', handle: '@mikedev', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', content: 'Working on something exciting with React and Node.js. Stay tuned for updates! 💻', likes: 156, comments: 28, image: null },
    { user: 'Emily Davis', handle: '@emilycodes', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', content: 'Beautiful sunset from my coding session today 🌅 Sometimes you need to take a break!', likes: 389, comments: 67, image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500&h=300&fit=crop' },
  ];

  return (
    <motion.div className="demo-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Link to="/projects" className="demo-back-btn"><HiArrowLeft /> Back to Projects</Link>
      <div className="demo-header">
        <span className="demo-badge">Social Media Demo</span>
        <h1>SocialBuzz</h1>
        <p>Social platform with real-time messaging</p>
      </div>
      <div className="demo-content" style={{ maxWidth: '600px', margin: '0 auto', padding: 0 }}>
        {/* Create Post */}
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="You" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }} />
            <input placeholder="What's happening?" style={{ flex: 1, padding: '12px 20px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '25px', color: 'var(--text-primary)' }} />
          </div>
        </div>

        {/* Posts */}
        {posts.map((post, i) => (
          <motion.div key={i} style={{ padding: '20px', borderBottom: '1px solid var(--border-color)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <img src={post.avatar} alt={post.user} style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div>
                    <span style={{ fontWeight: 600 }}>{post.user}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: '8px', fontSize: '0.9rem' }}>{post.handle}</span>
                  </div>
                  <HiDotsHorizontal style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                </div>
                <p style={{ marginBottom: '15px', lineHeight: 1.6 }}>{post.content}</p>
                {post.image && <img src={post.image} alt="Post" style={{ width: '100%', borderRadius: '16px', marginBottom: '15px' }} />}
                <div style={{ display: 'flex', gap: '30px' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <HiHeart style={{ fontSize: '1.2rem' }} /> {post.likes}
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <HiChat style={{ fontSize: '1.2rem' }} /> {post.comments}
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <HiShare style={{ fontSize: '1.2rem' }} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="demo-tech" style={{ marginTop: '40px' }}>
        <h3>Built With</h3>
        <div className="tech-tags"><span>React</span><span>Node.js</span><span>MongoDB</span><span>Socket.io</span></div>
      </div>
    </motion.div>
  );
};

export default SocialBuzzDemo;
