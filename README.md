# Nikesh Sapkota - Portfolio Website

A stunning, modern portfolio website built with the MERN stack featuring beautiful animations, 10 project showcases, and a contact form.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern UI/UX** - Electric blue theme with glass morphism effects
- **Stunning Animations** - Powered by Framer Motion
- **Responsive Design** - Works perfectly on all devices
- **10 Project Demos** - Interactive showcases for various industries
- **Contact Form** - With backend API and email notifications
- **Custom Cursor** - Glowing cursor effect
- **Particle Effects** - Dynamic floating particles
- **Skills Section** - Animated progress bars
- **Testimonials** - Auto-playing carousel
- **SEO Ready** - Optimized for search engines

## 🛠️ Tech Stack

### Frontend
- React 18
- Framer Motion (animations)
- React Router DOM (routing)
- React Icons
- React Type Animation
- React Hot Toast (notifications)
- React Intersection Observer

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (emails)
- Express Validator
- Helmet & CORS (security)

## 📁 Project Structure

```
nikesh-portfolio/
├── backend/
│   ├── server.js          # Express server & API routes
│   ├── .env.example       # Environment variables template
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── demos/     # 10 project demo pages
│   │   ├── styles/        # Global CSS
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd nikesh-portfolio
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your settings
npm run dev
```

3. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```

4. **Open in browser**
```
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

## ⚙️ Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nikesh-portfolio
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About preview, Projects, Skills, Testimonials |
| Projects | `/projects` | All 10 projects with filtering |
| About | `/about` | Bio, Experience, Education, Values |
| Contact | `/contact` | Contact form with validation |
| Demos | `/demos/*` | 10 interactive project demos |

## 🎨 Project Demos

1. **ShopVerse** - E-commerce platform
2. **FitForge** - Gym management system
3. **Savoria** - Restaurant with online ordering
4. **CloudTask** - SaaS project management
5. **HealthCare Plus** - Telemedicine platform
6. **EduLearn** - Learning management system
7. **PropertyHub** - Real estate listings
8. **TravelMate** - Travel booking platform
9. **CryptoTrack** - Cryptocurrency tracker
10. **SocialBuzz** - Social media platform

## 🎯 Customization

### Change Personal Info
Edit the following files:
- `frontend/src/components/Hero.jsx` - Name, title, description
- `frontend/src/components/Footer.jsx` - Contact info, social links
- `frontend/src/pages/About.jsx` - Bio, experience, education
- `frontend/src/pages/Contact.jsx` - Contact details

### Change Colors
Edit `frontend/src/styles/index.css`:
```css
:root {
  --primary: #00d4ff;        /* Main accent color */
  --secondary: #7c3aed;      /* Secondary color */
  --accent: #00ff88;         /* Highlight color */
  /* ... more variables */
}
```

### Add/Remove Projects
Edit `frontend/src/pages/Projects.jsx` and create new demo pages in `frontend/src/pages/demos/`

## 📧 Contact Form Setup

1. Create a Gmail App Password:
   - Go to Google Account → Security → App Passwords
   - Generate a new app password

2. Update `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway/Render)
```bash
cd backend
# Push to your hosting service
# Set environment variables in dashboard
```

## 📝 License

MIT License - Feel free to use this for your own portfolio!

## 👨‍💻 Author

**Nikesh Sapkota**
- Email: nikeshsapkota.code@gmail.com
- Location: Jacksonville, Alabama, USA
- Experience: 7+ years in Full Stack Development

---

⭐ If you found this helpful, please give it a star!
