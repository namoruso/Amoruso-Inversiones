import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import './SectionTitle.css';

const SectionTitle = ({ children, className = '', light = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Motion.h2
      ref={ref}
      className={`section-title ${light ? 'light' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </Motion.h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  light: PropTypes.bool
};

export default SectionTitle;
