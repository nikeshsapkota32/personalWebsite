import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import LoadingBar from './components/LoadingBar';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

// Demo Projects
import ShopVerseDemo from './pages/demos/ShopVerseDemo';
import FitForgeDemo from './pages/demos/FitForgeDemo';
import SavoriaDemo from './pages/demos/SavoriaDemo';
import CloudTaskDemo from './pages/demos/CloudTaskDemo';
import HealthCareDemo from './pages/demos/HealthCareDemo';
import EduLearnDemo from './pages/demos/EduLearnDemo';
import PropertyHubDemo from './pages/demos/PropertyHubDemo';
import TravelMateDemo from './pages/demos/TravelMateDemo';
import CryptoTrackDemo from './pages/demos/CryptoTrackDemo';
import SocialBuzzDemo from './pages/demos/SocialBuzzDemo';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      {/* Background Effects */}
      <div className="grid-background" />
      <div className="noise-overlay" />
      
      {/* Custom Cursor */}
      <CustomCursor mousePosition={mousePosition} />
      
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(20, 20, 30, 0.95)',
            color: '#fff',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            backdropFilter: 'blur(10px)',
          },
          success: {
            iconTheme: {
              primary: '#00ff88',
              secondary: '#0a0a0f',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4757',
              secondary: '#0a0a0f',
            },
          },
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Loading Bar */}
      <LoadingBar />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Demo Projects */}
          <Route path="/demos/shopverse" element={<ShopVerseDemo />} />
          <Route path="/demos/fitforge" element={<FitForgeDemo />} />
          <Route path="/demos/savoria" element={<SavoriaDemo />} />
          <Route path="/demos/cloudtask" element={<CloudTaskDemo />} />
          <Route path="/demos/healthcare" element={<HealthCareDemo />} />
          <Route path="/demos/edulearn" element={<EduLearnDemo />} />
          <Route path="/demos/propertyhub" element={<PropertyHubDemo />} />
          <Route path="/demos/travelmate" element={<TravelMateDemo />} />
          <Route path="/demos/cryptotrack" element={<CryptoTrackDemo />} />
          <Route path="/demos/socialbuzz" element={<SocialBuzzDemo />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
