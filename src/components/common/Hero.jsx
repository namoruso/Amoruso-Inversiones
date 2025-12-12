import { motion as Motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({ title, description, backgroundImage, children }) => {
  return (
    <section 
      className="hero" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`
      }}
    >
      <div className="container">
        <div className="hero-content">
          <Motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </Motion.h1>
          {description && (
            <Motion.p
              className="hero-description"
              initial={{ opacity: 0, y:30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </Motion.p>
          )}
          {children && (
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {children}
            </Motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Hero;
