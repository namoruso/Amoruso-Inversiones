import { useState, useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import './StatsSection.css';

const StatsCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startValue = 0;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <Motion.div
      ref={ref}
      className="stat-number"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </Motion.div>
  );
};

StatsCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string,
  prefix: PropTypes.string
};

const StatsSection = () => {
  const stats = [
    { value: 30, suffix: '+', label: 'Años de Experiencia', icon: 'fa-calendar-check' },
    { value: 5000, suffix: '+', label: 'Clientes Satisfechos', icon: 'fa-users' },
    { value: 15000, suffix: '+', label: 'Servicios Realizados', icon: 'fa-tools' },
    { value: 98, suffix: '%', label: 'Satisfacción Garantizada', icon: 'fa-star' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-overlay"></div>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-icon">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <StatsCounter 
                end={stat.value} 
                suffix={stat.suffix}
                duration={2.5}
              />
              <p className="stat-label">{stat.label}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
