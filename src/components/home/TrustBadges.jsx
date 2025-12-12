import { motion as Motion } from 'framer-motion';
import './TrustBadges.css';

const TrustBadges = () => {
  const badges = [
    {
      icon: 'fa-certificate',
      title: 'Garantía de Calidad',
      description: '100% Garantizado'
    },
    {
      icon: 'fa-check-circle',
      title: 'Repuestos Originales',
      description: 'Primera Calidad'
    },
    {
      icon: 'fa-user-shield',
      title: 'Mecánicos Certificados',
      description: 'Altamente Capacitados'
    },
    {
      icon: 'fa-thumbs-up',
      title: 'Satisfacción Garantizada',
      description: '98% de Clientes Felices'
    }
  ];

  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="trust-badges-grid">
          {badges.map((badge, index) => (
            <Motion.div
              key={index}
              className="trust-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="trust-badge-icon">
                <i className={`fas ${badge.icon}`}></i>
              </div>
              <h4 className="trust-badge-title">{badge.title}</h4>
              <p className="trust-badge-description">{badge.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
