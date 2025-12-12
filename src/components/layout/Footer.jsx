import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { CONTACT_INFO } from '../../utils/constants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Calcular si está abierto ahora
  const isOpenNow = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 6 = Sábado
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour + minute / 60;

    // Lunes a Viernes: 8:00 AM - 5:00 PM (8.0 - 17.0)
    if (day >= 1 && day <= 5) {
      return currentTime >= 8 && currentTime < 17;
    }
    // Sábados: 8:00 AM - 2:00 PM (8.0 - 14.0)
    if (day === 6) {
      return currentTime >= 8 && currentTime < 14;
    }
    // Domingos: Cerrado
    return false;
  };

  const openStatus = isOpenNow();

  const footerLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/empresa', label: 'Empresa' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/contacto', label: 'Contacto' }
  ];

  const services = [
    'Cambio de aceite',
    'Diagnóstico computarizado',
    'Mecánica general',
    'Reparación de frenos',
    'Mantenimiento preventivo'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <Motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="footer-title">Amoruso Inversiones C.A.</h4>
            <p className="footer-description">
              Somos un taller mecánico comprometido con la calidad y la satisfacción de nuestros clientes. Ofrecemos servicios de mantenimiento y reparación para todo tipo de vehículos.
            </p>
            <div className="footer-social">
              <a 
                href={CONTACT_INFO.social.facebook} 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href={CONTACT_INFO.social.instagram} 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href={CONTACT_INFO.social.whatsapp} 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </Motion.div>

          {/* Quick Links */}
          <Motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-title">Enlaces</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Services */}
          <Motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-title">Servicios</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="/servicios" className="footer-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-title">Contacto</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                {CONTACT_INFO.address}
              </p>
              {CONTACT_INFO.phones.map((phone, index) => (
                <p key={index}>
                  <i className="fas fa-phone-alt"></i>
                  {phone}
                </p>
              ))}
              <p>
                <i className="fas fa-envelope"></i>
                {CONTACT_INFO.email}
              </p>
            </div>
            
            {/* Business Hours with Status */}
            <div className="footer-hours">
              <div className="hours-header">
                <i className="fas fa-clock"></i>
                <span>Horario</span>
                <div className={`status-badge ${openStatus ? 'open' : 'closed'}`}>
                  <span className="status-dot"></span>
                  {openStatus ? 'Abierto Ahora' : 'Cerrado'}
                </div>
              </div>
              <p>{CONTACT_INFO.schedule.weekdays}</p>
              <p>{CONTACT_INFO.schedule.saturday}</p>
            </div>
          </Motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Amoruso Inversiones C.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
