import { motion as Motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './ProcessTimeline.css';

const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      title: 'Contacto Inicial',
      description: 'Llámanos o visítanos. Te atenderemos de inmediato y programaremos la revisión de tu vehículo.',
      icon: 'fa-phone-alt'
    },
    {
      number: '02',
      title: 'Diagnóstico Profesional',
      description: 'Nuestros técnicos especializados realizan una evaluación completa con equipos de última generación.',
      icon: 'fa-search'
    },
    {
      number: '03',
      title: 'Cotización Transparente',
      description: 'Recibes un presupuesto detallado sin sorpresas. Explicamos cada servicio necesario.',
      icon: 'fa-file-invoice-dollar'
    },
    {
      number: '04',
      title: 'Reparación Experta',
      description: 'Realizamos el trabajo con repuestos de calidad y mano de obra especializada.',
      icon: 'fa-tools'
    },
    {
      number: '05',
      title: 'Pruebas y Entrega',
      description: 'Verificamos que todo funcione perfectamente antes de entregarte tu vehículo.',
      icon: 'fa-check-circle'
    }
  ];

  return (
    <section className="process-timeline-section">
      <div className="container">
        <SectionTitle light>Nuestro Proceso de Servicio</SectionTitle>
        <div className="timeline">
          {steps.map((step, index) => (
            <Motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-marker">
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
