import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { getAssetPath } from '../../utils/assetHelper';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/empresa', label: 'Empresa' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <img 
              src={getAssetPath("/images/logo/logo.png")} 
              alt="Amoruso Inversiones Logo" 
              className="navbar-logo"
            />
            <span className="navbar-text">
              AMORUSO <span className="brand-highlight">INVERSIONES C.A.</span>
            </span>
          </Link>

          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <Motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </Motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
