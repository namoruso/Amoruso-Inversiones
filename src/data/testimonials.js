import { getAssetPath } from '../utils/assetHelper';

export const testimonials = [
  {
    id: 1,
    quote: "El mejor taller mecánico que he visitado. Servicio rápido, atención personalizada y precios justos. Sin duda, seguiré trayendo mi vehículo aquí.",
    name: "Carlos Rodríguez",
    position: "Cliente desde 2018",
    image: getAssetPath("/images/testimonials/persona1.png"),
    rating: 5
  },
  {
    id: 2,
    quote: "Excelente atención y profesionalismo. Repararon mi auto en tiempo récord y a un precio muy accesible. Totalmente recomendados.",
    name: "María González",
    position: "Cliente desde 2020",
    image: getAssetPath("/images/testimonials/persona3.png"),
    rating: 5
  },
  {
    id: 3,
    quote: "Quedé muy satisfecho con el servicio. El personal es muy amable y conocedor. Me explicaron cada detalle del trabajo realizado en mi vehículo.",
    name: "José Martínez",
    position: "Cliente desde 2019",
    image: getAssetPath("/images/testimonials/persona2.png"),
    rating: 5
  },
  {
    id: 4,
    quote: "Llevé mi carro por un problema en la suspensión y no solo lo solucionaron rápidamente, sino que también me dieron recomendaciones para el mantenimiento futuro.",
    name: "Ana Castillo",
    position: "Cliente desde 2021",
    image: getAssetPath("/images/testimonials/persona4.png"),
    rating: 4
  }
];
