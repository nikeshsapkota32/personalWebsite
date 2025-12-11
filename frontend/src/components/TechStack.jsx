import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, 
  SiTypescript, SiPython, SiPostgresql, SiMysql, SiDocker,
  SiGit, SiRedis, SiAmazonaws, SiFirebase, SiGraphql,
  SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiNextdotjs
} from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const technologies = [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  ];

  return (
    <section className="tech-stack-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-label">Technologies</span>
          <h2>My Tech <span className="gradient-text">Stack</span></h2>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
