import { motion as Motion } from 'framer-motion';
import { getAssetPath } from '../utils/assetHelper';
import Hero from '../components/common/Hero';
import { CONTACT_INFO } from '../utils/constants';
import './Contact.css';

const Contact = () => {
  const contactCards = [
    {
      icon: 'fa-phone-alt',
      title: 'Teléfonos',
      items: CONTACT_INFO.phones,
      color: 'linear-gradient(135deg, var(--primary), #ff6b7a)',
      type: 'phone'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      items: [CONTACT_INFO.email],
      color: 'linear-gradient(135deg, var(--primary), #ff6b7a)',
      type: 'email'
    },
    {
      icon: 'fa-clock',
      title: 'Horario',
      items: [CONTACT_INFO.schedule.weekdays, CONTACT_INFO.schedule.saturday],
      color: 'linear-gradient(135deg, var(--primary), #ff6b7a)',
      type: 'schedule'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <Hero
        title="Contáctenos"
        description="Estamos aquí para ayudarte. Elige la forma que prefieras para comunicarte con nosotros."
        backgroundImage={getAssetPath("/images/backgrounds/fondocontacto.jpg")}
      />

      {/* Contact Cards Section */}
      <section className="section contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactCards.map((card, index) => (
              <Motion.div
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="contact-card-icon"
                  style={{ background: card.color }}
                >
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className="contact-card-title">{card.title}</h3>
                <div className="contact-card-items">
                  {card.items.map((item, i) => (
                    card.type === 'phone' ? (
                      <a key={i} href={`tel:${item}`} className="contact-card-link">
                        {item}
                      </a>
                    ) : card.type === 'email' ? (
                      <a key={i} href={`mailto:${item}`} className="contact-card-link">
                        {item}
                      </a>
                    ) : (
                      <p key={i} className="contact-card-text">{item}</p>
                    )
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Address Section */}
      <section className="section map-address-section">
        <div className="container">
          <div className="map-address-grid">
            {/* Address Card */}
            <Motion.div
              className="address-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="address-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="address-title">Nuestra Ubicación</h3>
              <p className="address-text">{CONTACT_INFO.address}</p>
              
              <div className="address-actions">
                <a 
                  href={CONTACT_INFO.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-btn"
                >
                  <i className="fas fa-directions"></i>
                  Cómo Llegar
                </a>
              </div>

              {/* Social Media */}
              <div className="address-social">
                <h4 className="social-subtitle">Síguenos</h4>
                <div className="social-links">
                  <a 
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </Motion.div>

            {/* Map */}
            <Motion.div
              className="map-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src={CONTACT_INFO.map}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Amoruso Inversiones C.A."
              ></iframe>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="contact-cta-banner">
        <div className="container">
          <Motion.div
            className="cta-banner-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-banner-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div className="cta-banner-text">
              <h3>¿Necesitas Ayuda Inmediata?</h3>
              <p>Nuestro equipo está disponible para atenderte</p>
            </div>
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="cta-banner-btn">
              <i className="fas fa-phone-alt"></i>
              Llamar Ahora
            </a>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
