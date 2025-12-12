import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué garantía ofrecen en sus servicios?',
      answer: 'Ofrecemos garantía en todos nuestros servicios. La duración varía según el tipo de reparación, pero generalmente es de 3 a 6 meses. Además, utilizamos repuestos originales o de primera calidad que también cuentan con su propia garantía del fabricante.'
    },
    {
      question: '¿Cuánto tiempo toma un servicio de mantenimiento general?',
      answer: 'Un mantenimiento general básico toma entre 2 a 4 horas dependiendo del vehículo. Esto incluye cambio de aceite, revisión de frenos, suspensión, sistema eléctrico y diagnóstico computarizado. Servicios más complejos pueden requerir más tiempo.'
    },
    {
      question: '¿Trabajan con todas las marcas de vehículos?',
      answer: 'Sí, trabajamos con todas las marcas y modelos de vehículos. Nuestros mecánicos están capacitados y contamos con equipo especializado para diagnosticar y reparar cualquier marca, tanto nacional como importada.'
    },
    {
      question: '¿Necesito cita previa o puedo llegar directamente?',
      answer: 'Aunque atendemos sin cita, recomendamos llamar con anticipación para asegurar disponibilidad inmediata y poder dedicarle el tiempo necesario a su vehículo sin esperas prolongadas.'
    },
    {
      question: '¿Qué formas de pago aceptan?',
      answer: 'Aceptamos efectivo, transferencias bancarias y las principales tarjetas de débito y crédito. También ofrecemos facilidades de pago para reparaciones mayores.'
    },
    {
      question: '¿Realizan diagnóstico gratuito?',
      answer: 'Ofrecemos evaluación inicial sin costo. Si decides realizar el servicio con nosotros, el diagnóstico computarizado detallado está incluido en el servicio.'
    },
    {
      question: '¿Puedo esperar mientras reparan mi vehículo?',
      answer: 'Por supuesto. Contamos con área de espera cómoda. Sin embargo, para reparaciones que tomen varias horas, recomendamos dejar el vehículo y le mantendremos informado del progreso.'
    },
    {
      question: '¿Entregan factura por los servicios?',
      answer: 'Sí, entregamos factura detallada por todos nuestros servicios, incluyendo mano de obra y repuestos utilizados.'
    },
    {
      question: '¿Qué incluye el mantenimiento preventivo?',
      answer: 'Incluye cambio de aceite y filtros, revisión de frenos, suspensión, dirección, sistema eléctrico, niveles de fluidos, diagnóstico computarizado y ajustes necesarios para mantener su vehículo en óptimas condiciones.'
    },
    {
      question: '¿Tienen servicio de grúa?',
      answer: 'Trabajamos con empresas de grúa de confianza que pueden trasladar su vehículo al taller si es necesario. Contáctenos para coordinar el servicio.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <SectionTitle>Preguntas Frecuentes</SectionTitle>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <Motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <i className={`fas fa-chevron-down faq-icon ${activeIndex === index ? 'rotate' : ''}`}></i>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <Motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
