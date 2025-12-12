import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import './ServiceModal.css';

const ServiceModal = ({ service, isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      navigate('/contacto');
    }, 300);
  };

  // Helper para obtener icono del servicio
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

  // Helper para tiempo estimado
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

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="service-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="service-modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="service-modal-close" onClick={onClose} aria-label="Cerrar">
              <i className="fas fa-times"></i>
            </button>

            {/* Header con imagen */}
            <div className="modal-header">
              <img 
                src={service.image} 
                alt={service.title} 
                className="modal-header-image"
              />
              <div className="modal-header-overlay">
                <div className="modal-icon">
                  <i className={`fas ${getServiceIcon(service.title)}`}></i>
                </div>
                <h2 className="modal-title">{service.title}</h2>
              </div>
            </div>

            {/* Quick Info */}
            <div className="modal-quick-info">
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="info-label">Duración</span>
                  <span className="info-value">{getEstimatedTime(service.title)}</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-shield-alt"></i>
                <div>
                  <span className="info-label">Garantía</span>
                  <span className="info-value">Incluida</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-tag"></i>
                <div>
                  <span className="info-label">Categoría</span>
                  <span className="info-value">{service.category || 'Servicio'}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              {/* Descripción */}
              <div className="modal-section">
                <h4 className="section-title">
                  <i className="fas fa-info-circle"></i>
                  Descripción del Servicio
                </h4>
                <p className="service-modal-description">{service.description}</p>
              </div>

              {/* Beneficios */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="modal-section">
                  <h4 className="section-title">
                    <i className="fas fa-check-circle"></i>
                    ¿Qué Incluye?
                  </h4>
                  <div className="benefits-grid">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <i className="fas fa-check"></i>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Por qué es importante */}
              <div className="modal-section importance-section">
                <h4 className="section-title">
                  <i className="fas fa-exclamation-triangle"></i>
                  ¿Por Qué es Importante?
                </h4>
                <p className="importance-text">
                  {service.title.includes('Aceite') && 'El cambio regular de aceite es fundamental para mantener el motor lubricado y prevenir desgaste prematuro de sus componentes.'}
                  {service.title.includes('Diagnóstico') && 'Un diagnóstico preciso permite identificar problemas antes de que se conviertan en fallas mayores y costosas.'}
                  {service.title.includes('Frenos') && 'Los frenos son el sistema de seguridad más importante de tu vehículo. Mantenderlos en óptimas condiciones puede salvar vidas.'}
                  {service.title.includes('Suspensión') && 'Una suspensión en buen estado garantiza confort, estabilidad y seguridad al conducir.'}
                  {service.title.includes('Motor') && 'El motor es el corazón de tu vehículo. Un mantenimiento adecuado extiende su vida útil significativamente.'}
                  {!service.title.includes('Aceite') && !service.title.includes('Diagnóstico') && !service.title.includes('Frenos') && !service.title.includes('Suspensión') && !service.title.includes('Motor') && 'Este servicio es esencial para mantener tu vehículo funcionando de manera óptima y segura.'}
                </p>
              </div>

              {/* CTA */}
              <div className="modal-actions">
                <Button onClick={handleContactClick} size="large">
                  <i className="fas fa-phone-alt"></i>
                  Solicitar Este Servicio
                </Button>
                <p className="modal-note">
                  <i className="fas fa-info-circle"></i>
                  Te contactaremos para coordinar la cita
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ServiceModal;
