import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Imágenes del taller y trabajos
  const images = [
    { id: 1, src: '/images/backgrounds/taller.jpg', alt: 'Instalaciones del taller', category: 'Instalaciones' },
    { id: 2, src: '/images/services/mecanicageneral.png', alt: 'Mecánica general', category: 'Servicios' },
    { id: 3, src: '/images/services/reparacionmotor.png', alt: 'Reparación de motor', category: 'Servicios' },
    { id: 4, src: '/images/services/diagnostico.jpg', alt: 'Diagnóstico computarizado', category: 'Servicios' },
    { id: 5, src: '/images/services/frenos.jpg', alt: 'Sistema de frenos', category: 'Servicios' },
    { id: 6, src: '/images/backgrounds/motor.jpg', alt: 'Motor reparado', category: 'Trabajos' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <SectionTitle>Nuestro Taller y Trabajos</SectionTitle>
        <p className="gallery-subtitle">
          Conoce nuestras instalaciones y algunos de los trabajos que realizamos
        </p>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <Motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(image)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <div className="gallery-category">{image.category}</div>
                <i className="fas fa-search-plus gallery-icon"></i>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            
            <button 
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <Motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p className="lightbox-caption">{selectedImage.alt}</p>
            </Motion.div>

            <button 
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
