import { motion as Motion } from 'framer-motion';
import { CONTACT_INFO } from '../../utils/constants';
import './UrgencyBanner.css';

const UrgencyBanner = () => {
  return (
    <Motion.section 
      className="urgency-banner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="urgency-content">
          <div className="urgency-icon">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className="urgency-text">
            <h3 className="urgency-title">¿Necesitas Asistencia Urgente?</h3>
            <p className="urgency-description">
              Nuestro equipo está listo para ayudarte. Llámanos ahora para atención inmediata.
            </p>
          </div>
          <div className="urgency-action">
            <div className="urgency-phones">
              <a href={`tel:${CONTACT_INFO.phones[0]}`} className="urgency-phone">
                <i className="fas fa-phone-alt"></i>
                <span>{CONTACT_INFO.phones[0]}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phones[1]}`} className="urgency-phone">
                <i className="fas fa-phone-alt"></i>
                <span>{CONTACT_INFO.phones[1]}</span>
              </a>
            </div>
            <div className="urgency-badge">
              <i className="fas fa-clock"></i>
              <span>Respuesta Rápida Garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default UrgencyBanner;
