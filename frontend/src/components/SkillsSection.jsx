import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript, 
  SiNextdotjs, SiTailwindcss, SiRedux, SiGraphql, SiDocker,
  SiAmazon, SiGit, SiFigma, SiPostgresql, SiRedis, SiFirebase
} from 'react-icons/si';
import './SkillsSection.css';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    { name: 'React', icon: <SiReact />, level: 95, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs />, level: 92, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 90, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, level: 90, color: '#ffffff' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 88, color: '#3178C6' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#ffffff' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 92, color: '#06B6D4' },
    { name: 'Redux', icon: <SiRedux />, level: 85, color: '#764ABC' },
    { name: 'GraphQL', icon: <SiGraphql />, level: 80, color: '#E10098' },
    { name: 'Docker', icon: <SiDocker />, level: 78, color: '#2496ED' },
    { name: 'AWS', icon: <SiAmazon />, level: 75, color: '#FF9900' },
    { name: 'Git', icon: <SiGit />, level: 90, color: '#F05032' },
    { name: 'Figma', icon: <SiFigma />, level: 82, color: '#F24E1E' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#4169E1' },
    { name: 'Redis', icon: <SiRedis />, level: 78, color: '#DC382D' },
    { name: 'Firebase', icon: <SiFirebase />, level: 85, color: '#FFCA28' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section className="skills-section section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills & Expertise</span>
          <h2>
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p>
            Constantly learning and adapting to new technologies to deliver 
            cutting-edge solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${skill.color}30`
              }}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="skill-progress">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  style={{ background: skill.color }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <div className="stat-content">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Lines of Code</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">☕</div>
            <div className="stat-content">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Cups of Coffee</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <span className="stat-number">15+</span>
              <span className="stat-label">Awards Won</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background */}
      <div className="skills-decoration">
        <div className="deco-grid" />
      </div>
    </section>
  );
};

export default SkillsSection;
