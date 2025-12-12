import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import './ServiceCard.css';

const ServiceCard = ({ service, onClick, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Iconos según tipo de servicio
  const getServiceIcon = (title) => {
    if (title.includes('Aceite')) return 'fa-oil-can';
    if (title.includes('Diagnóstico')) return 'fa-laptop-medical';
    if (title.includes('Mecánica')) return 'fa-tools';
    if (title.includes('Motor')) return 'fa-cog';
    if (title.includes('Frenos')) return 'fa-stop-circle';
    if (title.includes('Suspensión')) return 'fa-compress-arrows-alt';
    if (title.includes('Transmisión')) return 'fa-cogs';
    if (title.includes('Eléctrico')) return 'fa-bolt';
    return 'fa-wrench';
  };

  // Duración estimada (ejemplo)
  const getEstimatedTime = (title) => {
    if (title.includes('Aceite')) return '30-45 min';
    if (title.includes('Diagnóstico')) return '45-60 min';
    if (title.includes('Mecánica')) return '2-4 hrs';
    if (title.includes('Motor')) return '8-12 hrs';
    if (title.includes('Frenos')) return '1-2 hrs';
    if (title.includes('Suspensión')) return '2-3 hrs';
    if (title.includes('Transmisión')) return '4-6 hrs';
    return '1-3 hrs';
  };

  return (
    <Motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onClick={() => onClick(service)}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="service-card-top-bar"></div>
      
      {/* Badge si existe */}
      {service.badge && (
        <div className="service-badge">{service.badge}</div>
      )}
      
      {/* Imagen con overlay */}
      <div 
        className="service-card-image"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="service-card-overlay">
          <div className="service-icon-large">
            <i className={`fas ${getServiceIcon(service.title)}`}></i>
          </div>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="service-card-content">
        <h4 className="service-card-title">{service.title}</h4>
        
        {/* Brief description */}
        <p className="service-card-brief">
          {service.description.substring(0, 80)}...
        </p>
        
        {/* Info pills */}
        <div className="service-info-pills">
          <div className="info-pill">
            <i className="fas fa-clock"></i>
            <span>{getEstimatedTime(service.title)}</span>
          </div>
          {service.category && (
            <div className="info-pill category">
              <i className="fas fa-tag"></i>
              <span>{service.category}</span>
            </div>
          )}
        </div>
        
        {/* CTA */}
        <button className="service-card-btn">
          Ver detalles <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </Motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badge: PropTypes.string,
    category: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  delay: PropTypes.number
};

export default ServiceCard;
