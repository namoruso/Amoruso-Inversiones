import { CONTACT_INFO } from '../../utils/constants';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h3 className="contact-info-title">Información de contacto</h3>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="contact-text">
          <h5>Dirección</h5>
          <p>{CONTACT_INFO.address}</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="contact-text">
          <h5>Teléfono</h5>
          {CONTACT_INFO.phones.map((phone, index) => (
            <p key={index}>{phone}</p>
          ))}
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="contact-text">
          <h5>Correo electrónico</h5>
          <p>{CONTACT_INFO.email}</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="contact-text">
          <h5>Horario de atención</h5>
          <p>{CONTACT_INFO.schedule.weekdays}</p>
          <p>{CONTACT_INFO.schedule.saturday}</p>
        </div>
      </div>

      <div className="contact-socials">
        <h5>Síguenos</h5>
        <div className="contact-social-icons">
          <a 
            href={CONTACT_INFO.social.instagram} 
            className="contact-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href={CONTACT_INFO.social.facebook} 
            className="contact-social-icon"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a 
            href={CONTACT_INFO.social.whatsapp} 
            className="contact-social-icon"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
