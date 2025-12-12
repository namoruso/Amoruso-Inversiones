# Amoruso Inversiones C.A. - Sitio Web React

Sitio web moderno y responsive para el taller mecánico Amoruso Inversiones C.A., construido con React, Vite y animaciones premium.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con paleta de colores personalizada
- 🎭 **Animaciones Fluidas**: Transiciones suaves entre páginas con Framer Motion
- 📱 **Totalmente Responsive**: Adaptado para móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Construido con Vite para tiempos de carga rápidos
- 🎨 **Efectos Premium**: Hover effects, parallax y micro-interacciones
- 🧭 **Navegación Intuitiva**: React Router para una experiencia SPA fluida

## 📋 Páginas

1. **Inicio** - Hero section, servicios destacados, testimonios y beneficios
2. **Empresa** - Historia de la compañía, misión, visión y equipo
3. **Servicios** - Catálogo completo de servicios con modales informativos
4. **Contacto** - Información de contacto y mapa de ubicación

## 🛠️ Tecnolog

ías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **React Router v6** - Navegación
- **Framer Motion** - Animaciones
- **Swiper** - Carrusel de testimonios
- **React Intersection Observer** - Animaciones al scroll

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 🎨 Paleta de Colores

- **Primary**: #e63946 (Rojo)
- **Secondary**: #1d3557 (Azul oscuro)
- **Accent**: #457b9d (Azul medio)
- **Light**: #f1faee (Crema)
- **Gray**: #f5f5f5 (Gris claro)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout
│   ├── common/        # Hero, Button, SectionTitle
│   ├── home/          # Componentes de página inicio
│   ├── services/      # ServiceCard, ServiceModal
│   ├── about/         # TeamCard
│   └── contact/       # ContactInfo, GoogleMap
├── pages/             # Home, About, Services, Contact
├── data/              # Datos de servicios, testimonios, equipo
├── styles/            # Estilos globales y variables CSS
├── utils/             # Constantes y utilidades
├── App.jsx            # Configuración de rutas
└── main.jsx           # Punto de entrada
```

## 🎯 Características Destacadas

### Animaciones

- Transiciones de página con fade + slide
- Scroll-triggered animations en todas las secciones
- Hover effects premium en cards y botones
- Staggered animations para listas

### Componentes Reutilizables

- `Hero` - Section hero personalizable con parallax
- `Button` - Botón con variantes y efecto shine
- `SectionTitle` - Título con underline animado
- `ServiceCard` - Card de servicio con hover effects
- `ServiceModal` - Modal con animaciones y navegación

### UX Mejorado

- Scroll to top automático al cambiar de página
- Menú móvil con animación suave
- Modal cerrable con ESC, click fuera o botón X
- Carga lazy de imágenes
- Navegación con indicador de página activa

## 📱 Responsive

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 👨‍💻 Comandos de Desarrollo

```bash
# Desarrollo
npm run dev         # Puerto: http://localhost:5173

# Producción
npm run build       # Genera carpeta dist/
npm run preview     # Preview de build de producción

# Linting
npm run lint        # ESLint
```

## 📧 Contacto

**Amoruso Inversiones C.A.**

- Dirección: Calle Cantaura No. 105 - 60, Valencia - Edo. Carabobo
- Teléfonos: +58 414-4106912 / +58 414-3421702
- Email: amorusoinversiones@hotmail.com
- Instagram: [@amorusoinversiones_c.a](https://www.instagram.com/amorusoinversiones_c.a/)

## 📄 Licencia

© 2025 Amoruso Inversiones C.A. Todos los derechos reservados.
