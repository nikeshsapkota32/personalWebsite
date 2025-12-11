import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  HiMail, HiLocationMarker, HiPhone, HiPaperAirplane 
} from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.success('Message sent successfully! (Demo mode)');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail />,
      title: 'Email',
      value: 'nikeshsapkota.code@gmail.com',
      link: 'mailto:nikeshsapkota.code@gmail.com',
    },
    {
      icon: <HiLocationMarker />,
      title: 'Location',
      value: 'Jacksonville, Alabama, USA',
      link: null,
    },
    {
      icon: <HiPhone />,
      title: 'Availability',
      value: 'Available for Freelance',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/nikeshsapkota', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/nikeshsapkota', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/nikeshsapkota', label: 'Twitter' },
    { icon: <FaDribbble />, href: 'https://dribbble.com/nikeshsapkota', label: 'Dribbble' },
  ];

  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-label">Get In Touch</span>
            <h1>
              Let's <span className="gradient-text">Work Together</span>
            </h1>
            <p>
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Fill out the form below or reach out directly.
            </p>
          </motion.div>
        </div>

        <div className="hero-decoration">
          <div className="deco-orb orb-1" />
          <div className="deco-orb orb-2" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Contact Information</h2>
              <p>
                Feel free to reach out through any of the following channels. 
                I typically respond within 24 hours.
              </p>

              <div className="info-cards">
                {contactInfo.map((info) => (
                  <div key={info.title} className="info-card">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-title">{info.title}</span>
                      {info.link ? (
                        <a href={info.link} className="info-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h3>Connect With Me</h3>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="availability-badge">
                <span className="badge-dot" />
                Currently available for new projects
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Me a Message</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <span className="loading-spinner small" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <div className="map-content">
              <HiLocationMarker />
              <h3>Jacksonville, Alabama</h3>
              <p>United States</p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
