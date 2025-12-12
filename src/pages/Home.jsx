import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import ServiceCard from '../components/services/ServiceCard';
import ServiceModal from '../components/services/ServiceModal';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsSection from '../components/home/StatsSection';
import TrustBadges from '../components/home/TrustBadges';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import UrgencyBanner from '../components/home/UrgencyBanner';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import './Home.css';

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Servicios destacados con badges
  const featuredServices = [
    { ...services[0], badge: 'Popular' },  // Cambio de Aceite
    { ...services[1], badge: 'Recomendado' },  // Diagnóstico
    { ...services[2] }   // Mecánica General
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero
        title="Amoruso Inversiones C.A."
        description="Ofrecemos los mejores servicios de reparación y mantenimiento para su vehículo con la más alta calidad y garantía. Nuestro equipo de profesionales está a su disposición."
        backgroundImage="/images/backgrounds/motor.jpg"
      >
        <Link to="/servicios">
          <Button size="large">Descubre Nuestros Servicios</Button>
        </Link>
      </Hero>

      {/* Stats Section - NEW */}
      <StatsSection />

      {/* Trust Badges - NEW */}
      <TrustBadges />

      {/* Services Preview */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle>Servicios Destacados</SectionTitle>
          <p className="section-subtitle">
            
          </p>
          <div className="services-preview-grid">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="service-wrapper">
                <ServiceCard
                  service={service}
                  onClick={handleServiceClick}
                  delay={index * 0.1}
                />
                {service.badge && (
                  <div className="service-badge-overlay">{service.badge}</div>
                )}
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/servicios">
              <Button variant="primary" size="large">Ver Todos los Servicios</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency Banner - NEW */}
      <UrgencyBanner />

      {/* Process Timeline - NEW */}
      <ProcessTimeline />

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionTitle light>Qué Dicen Nuestros Clientes</SectionTitle>
          <p className="section-subtitle light">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle>¿Por Qué Elegirnos?</SectionTitle>
          <WhyChooseUs />
        </div>
      </section>

      {/* Gallery - NEW */}
      <Gallery />

      {/* FAQ - NEW */}
      <FAQ />

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="final-cta-title">¿Listo para Cuidar tu Vehículo?</h2>
            <p className="final-cta-description">
              Contáctanos hoy y descubre por qué somos la mejor opción para el mantenimiento de tu auto
            </p>
            <Link to="/contacto">
              <Button size="large">Contáctanos Ahora</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Home;
