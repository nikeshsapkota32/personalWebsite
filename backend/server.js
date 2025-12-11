const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB Connected');
    } else {
      console.log('Running without MongoDB - using in-memory storage');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
};

connectDB();

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// In-memory storage fallback
let inMemoryContacts = [];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Nikesh Portfolio API is running' });
});

// Contact form submission
app.post('/api/contact', [
  body('name').trim().isLength({ min: 2 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('subject').trim().isLength({ min: 5 }).escape(),
  body('message').trim().isLength({ min: 10 }).escape()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Save to database or in-memory
    if (mongoose.connection.readyState === 1) {
      const contact = new Contact({ name, email, subject, message });
      await contact.save();
    } else {
      inMemoryContacts.push({ name, email, subject, message, createdAt: new Date() });
    }

    // Send email notification (if configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'nikeshsapkota.code@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });
    }

    res.status(201).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    });
  }
});

// Get all projects (static data)
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'ShopVerse E-Commerce',
      category: 'E-Commerce',
      description: 'A full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      image: '/projects/ecommerce.jpg',
      demoUrl: '/demos/shopverse',
      features: ['Real-time inventory', 'AI recommendations', 'Multi-vendor support', 'Analytics dashboard']
    },
    {
      id: 2,
      title: 'FitForge Gym Management',
      category: 'Fitness',
      description: 'Complete gym management system with member tracking, workout plans, and trainer scheduling.',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '/projects/gym.jpg',
      demoUrl: '/demos/fitforge',
      features: ['Member management', 'Workout tracking', 'Trainer scheduling', 'Progress analytics']
    },
    {
      id: 3,
      title: 'Savoria Restaurant',
      category: 'Restaurant',
      description: 'Modern restaurant website with online ordering, table reservations, and kitchen display system.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Twilio'],
      image: '/projects/restaurant.jpg',
      demoUrl: '/demos/savoria',
      features: ['Online ordering', 'Table reservations', 'Live order tracking', 'Kitchen display']
    },
    {
      id: 4,
      title: 'CloudTask SaaS',
      category: 'SaaS',
      description: 'Project management SaaS with real-time collaboration, Kanban boards, and team analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: '/projects/saas.jpg',
      demoUrl: '/demos/cloudtask',
      features: ['Real-time collaboration', 'Kanban boards', 'Time tracking', 'Team analytics']
    },
    {
      id: 5,
      title: 'HealthCare Plus',
      category: 'Healthcare',
      description: 'Telemedicine platform with video consultations, appointment scheduling, and prescription management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: '/projects/healthcare.jpg',
      demoUrl: '/demos/healthcare',
      features: ['Video consultations', 'E-prescriptions', 'Health records', 'Appointment booking']
    },
    {
      id: 6,
      title: 'EduLearn LMS',
      category: 'Education',
      description: 'Learning management system with course creation, progress tracking, and interactive quizzes.',
      tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
      image: '/projects/education.jpg',
      demoUrl: '/demos/edulearn',
      features: ['Course builder', 'Progress tracking', 'Interactive quizzes', 'Certificates']
    },
    {
      id: 7,
      title: 'PropertyHub Real Estate',
      category: 'Real Estate',
      description: 'Real estate listing platform with virtual tours, mortgage calculator, and agent matching.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
      image: '/projects/realestate.jpg',
      demoUrl: '/demos/propertyhub',
      features: ['Virtual tours', 'Mortgage calculator', 'Agent matching', 'Saved searches']
    },
    {
      id: 8,
      title: 'TravelMate Booking',
      category: 'Travel',
      description: 'Travel booking platform with flight search, hotel reservations, and itinerary planning.',
      tech: ['React', 'Node.js', 'MongoDB', 'Amadeus API'],
      image: '/projects/travel.jpg',
      demoUrl: '/demos/travelmate',
      features: ['Flight search', 'Hotel booking', 'Itinerary planner', 'Price alerts']
    },
    {
      id: 9,
      title: 'CryptoTrack Dashboard',
      category: 'Finance',
      description: 'Cryptocurrency portfolio tracker with real-time prices, alerts, and portfolio analytics.',
      tech: ['React', 'Node.js', 'Redis', 'CoinGecko API'],
      image: '/projects/crypto.jpg',
      demoUrl: '/demos/cryptotrack',
      features: ['Real-time prices', 'Portfolio tracking', 'Price alerts', 'Market analysis']
    },
    {
      id: 10,
      title: 'SocialBuzz Platform',
      category: 'Social Media',
      description: 'Social media platform with posts, stories, messaging, and content moderation.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '/projects/social.jpg',
      demoUrl: '/demos/socialbuzz',
      features: ['Stories', 'Real-time messaging', 'Content moderation', 'Analytics']
    }
  ];

  res.json(projects);
});

// Get testimonials
app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Nikesh delivered our e-commerce platform ahead of schedule. His attention to detail and technical expertise are outstanding.',
      avatar: '/avatars/avatar1.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, FitLife Gyms',
      content: 'The gym management system Nikesh built transformed our operations. Highly recommend his services!',
      avatar: '/avatars/avatar2.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Owner, Bella Cucina Restaurant',
      content: 'Our online ordering system increased revenue by 40%. Nikesh understood exactly what we needed.',
      avatar: '/avatars/avatar3.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO, CloudSolutions',
      content: 'Professional, responsive, and incredibly skilled. Nikesh is our go-to developer for all projects.',
      avatar: '/avatars/avatar4.jpg',
      rating: 5
    }
  ];

  res.json(testimonials);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
