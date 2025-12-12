import { motion as Motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getAssetPath } from '../utils/assetHelper';
import Hero from '../components/common/Hero';
import SectionTitle from '../components/common/SectionTitle';
import TeamCard from '../components/about/TeamCard';
import { team } from '../data/team';
import { COMPANY_INFO } from '../utils/constants';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: 'fa-handshake',
      title: 'Compromiso',
      description: 'Nos comprometemos con cada cliente para ofrecer soluciones efectivas y duraderas.'
    },
    {
      icon: 'fa-award',
      title: 'Excelencia',
      description: 'Buscamos la excelencia en cada servicio, utilizando las mejores prácticas y tecnología.'
    },
    {
      icon: 'fa-users',
      title: 'Trabajo en Equipo',
      description: 'Nuestro equipo trabaja en armonía para garantizar resultados óptimos.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovación',
      description: 'Nos mantenemos actualizados con las últimas tecnologías y métodos del sector automotriz.'
    }
  ];

  const achievements = [
    {
      year: '1990',
      event: 'Fundación del taller',
      description: 'Iniciamos operaciones con un pequeño equipo dedicado.'
    },
    {
      year: '2000',
      event: 'Expansión de instalaciones',
      description: 'Ampliamos nuestras instalaciones y equipo de trabajo.'
    },
    {
      year: '2010',
      event: 'Tecnología de punta',
      description: 'Incorporamos equipos de diagnóstico computarizado de última generación.'
    },
    {
      year: '2020',
      event: '30 Años de experiencia',
      description: 'Celebramos tres décadas sirviendo a nuestra comunidad con más de 5000 clientes satisfechos.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <Hero
        title="Nuestra Empresa"
        description="Conoce la historia, valores y el equipo que hace de Amoruso Inversiones C.A. tu taller de confianza."
        backgroundImage={getAssetPath("/images/backgrounds/fondoempresa.jpg")}
      />

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <Motion.div
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={getAssetPath("/images/logo/logo.png")} 
                alt="Taller Amoruso Inversiones" 
                className="img-fluid"
              />
              <div className="about-badge">
                <div className="badge-number">30+</div>
                <div className="badge-text">Años de Experiencia</div>
              </div>
            </Motion.div>
            <Motion.div
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-title">Nuestra Historia</h2>
              <p>
                Fundada hace más de 30 años, Amoruso Inversiones C.A. comenzó como un pequeño taller familiar con la visión de ofrecer servicios mecánicos de primera calidad en nuestra comunidad.
              </p>
              <p>
                A lo largo de los años, hemos crecido y evolucionado, incorporando tecnología de punta y ampliando nuestras instalaciones, pero manteniendo siempre la esencia y calidad de servicio que nos caracteriza.
              </p>
              <p>
                Hoy, nos enorgullecemos de ser uno de los talleres mecánicos más reconocidos, con la confianza de miles de clientes satisfechos que nos eligen día a día para el cuidado de sus vehículos.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Certificados y capacitados</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Equipos de última generación</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Garantía en todos los servicios</span>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <SectionTitle light>Nuestra Trayectoria</SectionTitle>
          <div className="achievements-timeline">
            {achievements.map((achievement, index) => (
              <Motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="achievement-year">{achievement.year}</div>
                <h4 className="achievement-event">{achievement.event}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <SectionTitle>Nuestros Valores</SectionTitle>
          <div className="values-grid">
            {values.map((value, index) => (
              <Motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section section-light">
        <div className="container">
          <div className="mission-vision-grid">
            <Motion.div
              ref={ref}
              className="mission-vision-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Misión</h3>
              <p>{COMPANY_INFO.mission}</p>
            </Motion.div>
            <Motion.div
              className="mission-vision-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Visión</h3>
              <p>{COMPANY_INFO.vision}</p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <SectionTitle light>Nuestro Equipo</SectionTitle>
          <p className="team-subtitle">
            Profesionales certificados y apasionados por su trabajo
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
