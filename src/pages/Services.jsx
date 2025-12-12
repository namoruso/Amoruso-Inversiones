import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { getAssetPath } from '../utils/assetHelper';
import Hero from '../components/common/Hero';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/services/ServiceCard';
import ServiceModal from '../components/services/ServiceModal';
import { services } from '../data/services';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Categorías de servicios
  const categories = [
    'Todos',
    'Mantenimiento',
    'Reparación',
    'Diagnóstico',
    'Sistema'
  ];

  // Asignar categorías a servicios
  const servicesWithCategories = services.map(service => {
    let category = 'Mantenimiento';
    if (service.title.includes('Reparación') || service.title.includes('Motor')) {
      category = 'Reparación';
    } else if (service.title.includes('Diagnóstico')) {
      category = 'Diagnóstico';
    } else if (service.title.includes('Frenos') || service.title.includes('Suspensión') || service.title.includes('Transmisión')) {
      category = 'Sistema';
    }
    return { ...service, category };
  });

  // Filtrar servicios
  const filteredServices = servicesWithCategories.filter(service => {
    const matchesCategory = selectedCategory === 'Todos' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <Hero
        title="Nuestros Servicios"
        description="Soluciones completas de mantenimiento y reparación automotriz con la más alta calidad y tecnología de punta."
        backgroundImage={getAssetPath("/images/backgrounds/fondoservicios.jpg")}
      />

      {/* Services Content */}
      <section className="section services-section">
        <div className="container">
          <SectionTitle>Catálogo de Servicios</SectionTitle>
          
          {/* Controls Bar */}
          <div className="services-controls">
            {/* Search */}
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Buscar servicio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="search-clear"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {/* View Toggle */}
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Vista de cuadrícula"
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="Vista de lista"
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <Motion.button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </Motion.button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>
              <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? 'servicio encontrado' : 'servicios encontrados'}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>

          {/* Services Grid/List */}
          {filteredServices.length > 0 ? (
            <div className={`services-container ${viewMode}`}>
              {filteredServices.map((service, index) => (
                <div key={service.id} className="service-item">
                  {viewMode === 'grid' ? (
                    <ServiceCard
                      service={service}
                      onClick={handleServiceClick}
                      delay={(index % 4) * 0.05}
                    />
                  ) : (
                    <Motion.div
                      className="service-list-card"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => handleServiceClick(service)}
                    >
                      <div className="service-list-image">
                        <img src={service.image} alt={service.title} />
                        <div className="service-list-category">{service.category}</div>
                      </div>
                      <div className="service-list-content">
                        <h3 className="service-list-title">{service.title}</h3>
                        <p className="service-list-description">
                          {service.description.substring(0, 150)}...
                        </p>
                        <button className="service-list-btn">
                          Ver detalles <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </Motion.div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No se encontraron servicios</h3>
              <p>Intenta con otra búsqueda o categoría</p>
              <button 
                className="reset-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
              >
                Limpiar filtros
              </button>
            </div>
          )}
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

export default Services;
