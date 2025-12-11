import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Nikesh delivered our e-commerce platform ahead of schedule. His attention to detail and technical expertise are outstanding. The platform has helped us increase our online sales by 150% within the first quarter.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      company: 'TechStart Inc.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, FitLife Gyms',
      content: 'The gym management system Nikesh built transformed our operations. Member engagement increased by 80%, and we\'ve streamlined our scheduling process completely. Highly recommend his services!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      company: 'FitLife Gyms',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Owner, Bella Cucina Restaurant',
      content: 'Our online ordering system increased revenue by 40%. Nikesh understood exactly what we needed and delivered a beautiful, functional solution. The reservation system alone has saved us countless hours.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      company: 'Bella Cucina',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO, CloudSolutions',
      content: 'Professional, responsive, and incredibly skilled. Nikesh is our go-to developer for all projects. His understanding of modern technologies and best practices is exceptional.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      company: 'CloudSolutions',
    },
    {
      id: 5,
      name: 'Amanda Foster',
      role: 'Product Manager, EduTech',
      content: 'The learning management system exceeded our expectations. Nikesh\'s ability to translate complex requirements into intuitive solutions is remarkable. Student engagement improved by 65%.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      company: 'EduTech',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoPlay(false);
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2>
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p>
            Don't just take my word for it. Here's what my clients have to say 
            about working with me.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Quote Icon */}
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="testimonial-stars">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <HiStar key={i} />
                ))}
              </div>

              {/* Content */}
              <p className="testimonial-content">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="testimonial-author">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                  <p className="author-role">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="slider-nav">
            <motion.button
              className="nav-btn prev"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronLeft />
            </motion.button>
            
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>

            <motion.button
              className="nav-btn next"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronRight />
            </motion.button>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="client-logos"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="logos-title">Trusted by companies worldwide</p>
          <div className="logos-wrapper">
            {['TechStart', 'FitLife', 'Bella Cucina', 'CloudSolutions', 'EduTech'].map((company) => (
              <div key={company} className="logo-item">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background */}
      <div className="testimonials-decoration">
        <div className="deco-blob blob-1" />
        <div className="deco-blob blob-2" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
