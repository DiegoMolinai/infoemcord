// 📄 Configuración central de la aplicación

const config = {
  // Nombre comercial
  appName: "Taller Mecánico", // Cambiar aquí el nombre visible

  // Descripción breve
  description:
    "Especialistas en reparación, mantención y servicios automotrices.",

  // Datos de contacto básicos
  contact: {
    phone: "+56 9 8560 4468",
    email: "contactofmec@gmail.cl",
    address: "Av. Andres Sabella 2616, Antofagasta, Chile",
    workingHours: "Lunes a Viernes - 9:00 a 18:00 y Sabado - 9:00 a 13:00",
    extra: "Atendemos de lunes a viernes de 9:00 a 18:00 y sábado de 9:00 a 13:00",
  },

  // Redes sociales
  socialLinks: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/FMEC2616",
      iconName: "FacebookIcon",
      active: true,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fmecmantenciones/",
      iconName: "InstagramIcon",
      active: true,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/56912345678",
      iconName: "WhatsAppIcon",
      active: false,
    },
  ],

  // Secciones de navegación principales
  navSections: [
    { label: "Inicio", id: "hero" },
    { label: "Servicios", id: "services" },
    { label: "Sobre Nosotros", id: "about" },
    { label: "Encuentranos", id:"location" },
    { label: "Contacto", id: "contact" },
  ],

  // Colores principales para posibles temas dinámicos en el futuro
  colors: {
    primary: "#444444",
    primaryLight: "#888888",
    secondary: "#FFFFFF",
    accent: "#D1D1D1",
    background: "#F0F0F0",
    textPrimary: "#000000",
    textSecondary: "#2B2B2B",
  },

  // Ruta al logo de la empresa
  logo: "assets/common/FMEC_logo.png",
};

export default config;
