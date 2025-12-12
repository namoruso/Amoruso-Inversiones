# 🚗 Amoruso Inversiones C.A.

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

**Sitio web moderno y responsive para taller mecánico automotriz**

[🌐 Ver Demo](https://namoruso.github.io/Amoruso-Inversiones/) • [📧 Contacto](#-contacto)

</div>

---

## 📖 Descripción

Sitio web corporativo para **Amoruso Inversiones C.A.**, un taller mecánico con más de 30 años de experiencia en Valencia, Venezuela. Desarrollado con React y diseño moderno, ofrece una experiencia de usuario fluida y profesional.

## ✨ Características

### 🎨 Diseño

- **Interfaz Moderna**: Diseño limpio y profesional con paleta de colores personalizada
- **100% Responsive**: Optimizado para móviles, tablets y desktop (320px+)
- **Animaciones Premium**: Transiciones suaves con Framer Motion
- **Efectos Interactivos**: Hover effects, parallax, micro-animaciones

### ⚡ Rendimiento

- **Alto Rendimiento**: Build optimizado con Vite
- **Lazy Loading**: Carga diferida de imágenes
- **Code Splitting**: Optimización automática de bundles
- **SEO Optimizado**: Meta tags y estructura semántica

### 🎯 Funcionalidades

- **Navegación SPA**: Transiciones fluidas sin recargas
- **Catálogo de Servicios**: Modales informativos con detalles completos
- **Testimonios**: Carrusel interactivo de clientes
- **Mapa Integrado**: Google Maps embebido
- **Galería de Imágenes**: Lightbox con navegación

## 🏗️ Tecnologías

### Core

- **[React 19](https://react.dev/)** - Biblioteca de UI
- **[Vite 7](https://vitejs.dev/)** - Build tool de próxima generación
- **[React Router v7](https://reactrouter.com/)** - Navegación SPA

### Animaciones & UI

- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas
- **[Swiper](https://swiperjs.com/)** - Carrusel de testimonios
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll animations

### Deployment

- **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Despliegue automático a GitHub Pages

## 📦 Instalación

### Prerequisitos

- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/namoruso/Amoruso-Inversiones.git

# Navegar al directorio
cd Amoruso-Inversiones

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo (puerto 5173)

# Producción
npm run build        # Genera build optimizado en /dist
npm run preview      # Preview del build de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint

# Deployment
npm run deploy       # Despliega a GitHub Pages
```

## 📁 Estructura del Proyecto

```
amoruso-react/
├── public/                 # Assets estáticos
│   └── images/            # Imágenes del sitio
│       ├── backgrounds/   # Fondos de hero sections
│       ├── logo/          # Logos y branding
│       ├── services/      # Imágenes de servicios
│       ├── team/          # Fotos del equipo
│       └── testimonials/  # Avatares de testimonios
├── src/
│   ├── components/        # Componentes React
│   │   ├── about/        # TeamCard
│   │   ├── common/       # Hero, Button, SectionTitle
│   │   ├── home/         # WhyChooseUs, Gallery, FAQ, etc.
│   │   ├── layout/       # Navbar, Footer, Layout
│   │   └── services/     # ServiceCard, ServiceModal
│   ├── data/             # Datos estáticos
│   │   ├── services.js   # Catálogo de servicios
│   │   ├── team.js       # Información del equipo
│   │   └── testimonials.js # Reseñas de clientes
│   ├── pages/            # Páginas principales
│   │   ├── Home.jsx      # Página de inicio
│   │   ├── About.jsx     # Sobre la empresa
│   │   ├── Services.jsx  # Catálogo de servicios
│   │   └── Contact.jsx   # Información de contacto
│   ├── styles/           # Estilos globales
│   │   ├── global.css    # Estilos base
│   │   └── variables.css # Variables CSS personalizadas
│   ├── utils/            # Utilidades
│   │   ├── constants.js  # Constantes de la app
│   │   └── assetHelper.js # Helper para rutas de assets
│   ├── App.jsx           # Configuración de rutas
│   └── main.jsx          # Punto de entrada
├── index.html            # HTML principal
├── vite.config.js        # Configuración de Vite
└── package.json          # Dependencias y scripts
```

## 🎨 Paleta de Colores

```css
--primary: #e63946      /* Rojo principal */
--secondary: #1d3557    /* Azul oscuro */
--accent: #457b9d       /* Azul medio */
--light: #f1faee        /* Crema */
--gray: #f5f5f5         /* Gris claro */
--dark: #333            /* Texto oscuro */
--white: #ffffff        /* Blanco */
```

## 📱 Páginas

### 🏠 Inicio

- Hero section con CTA
- Estadísticas del taller
- Servicios destacados
- Testimonios de clientes
- Por qué elegirnos
- Galería de trabajos
- FAQ (Preguntas frecuentes)

### 🏢 Empresa

- Historia de la compañía
- Línea de tiempo (1990-2020)
- Misión y visión
- Valores corporativos
- Equipo de trabajo

### 🔧 Servicios

- Catálogo completo con búsqueda
- Filtros por categoría
- Vista grid/list
- Modales informativos con beneficios

### 📞 Contacto

- Información de contacto (teléfono, email, horario)
- Mapa de Google Maps embebido
- Enlaces a redes sociales
- Botón de llamada directa

## 🌐 Despliegue

### GitHub Pages

El sitio está configurado para desplegarse automáticamente en GitHub Pages:

```bash
# Desplegar a GitHub Pages
npm run deploy
```

Esto ejecutará:

1. Build de producción (`npm run build`)
2. Deploy a la rama `gh-pages`
3. Publicación automática

**URL de producción**: https://namoruso.github.io/Amoruso-Inversiones/

### Configuración

El proyecto está configurado con:

- **Base URL**: `/Amoruso-Inversiones/` (en `vite.config.js`)
- **Router basename**: `/Amoruso-Inversiones/` (en `App.jsx`)
- **Asset paths**: Rutas dinámicas con `getAssetPath()` helper

## 🎯 Características Destacadas

### Animaciones

- ✅ Transiciones de página con fade + slide
- ✅ Scroll-triggered animations en todas las secciones
- ✅ Hover effects premium en cards y botones
- ✅ Staggered animations para listas
- ✅ Parallax effects en hero sections

### Componentes Reutilizables

- **Hero** - Section hero con background animado
- **Button** - Botón con variantes (primary, outline) y efecto shine
- **SectionTitle** - Título con underline animado
- **ServiceCard** - Card con hover effect y badge
- **ServiceModal** - Modal fullscreen con navegación
- **TestimonialCarousel** - Carrusel con autoplay

### UX Mejorado

- ✅ Scroll to top automático al cambiar de página
- ✅ Menú móvil hamburguesa con animación
- ✅ Modal cerrable con ESC, click fuera o botón X
- ✅ Carga lazy de imágenes
- ✅ Indicador de página activa en navbar
- ✅ Estados hover interactivos

## 📱 Breakpoints Responsive

```css
/* Mobile First */
@media (max-width: 480px) {
  /* Móviles pequeños */
}
@media (max-width: 768px) {
  /* Móviles y tablets pequeñas */
}
@media (max-width: 992px) {
  /* Tablets */
}
@media (max-width: 1200px) {
  /* Desktop pequeño */
}
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno

Las rutas de assets se resuelven automáticamente usando `import.meta.env.BASE_URL`:

- **Desarrollo**: `/`
- **Producción**: `/Amoruso-Inversiones/`

### Hot Module Replacement (HMR)

Vite proporciona HMR instantáneo durante el desarrollo.

### Linting

ESLint configurado con:

- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

## 📧 Contacto

**Amoruso Inversiones C.A.**

- 📍 **Dirección**: Calle Cantaura No. 105 - 60 c/c Anzoategui y Briceño Mendez, Valencia - Edo. Carabobo
- 📞 **Teléfonos**: [+58 414-4106912](tel:+584144106912) / [+58 414-3421702](tel:+584143421702)
- 📧 **Email**: [amorusoinversiones@hotmail.com](mailto:amorusoinversiones@hotmail.com)
- 📷 **Instagram**: [@amorusoinversiones_c.a](https://www.instagram.com/amorusoinversiones_c.a/)
- 🕒 **Horario**:
  - Lunes a Viernes: 8:00 AM - 5:00 PM
  - Sábados: 8:00 AM - 2:00 PM

## 📝 Servicios Ofrecidos

- Cambio de Aceite y Filtros
- Diagnóstico Computarizado
- Mecánica General
- Reparación de Frenos
- Mantenimiento de Suspensión
- Reparación de Motor
- Electricidad Automotriz
- Cambio de Correa de Distribución

## 👨‍💻 Desarrollo

### Contribuir

Este es un proyecto privado. Para consultas, contactar al propietario.

### Bug Reports

Si encuentras algún problema, por favor reporta creando un issue en el repositorio.

## 📄 Licencia

© 2025 Amoruso Inversiones C.A. Todos los derechos reservados.

---

<div align="center">

**Desarrollado con ❤️ usando React y Vite**

[⬆ Volver arriba](#-amoruso-inversiones-ca)

</div>
