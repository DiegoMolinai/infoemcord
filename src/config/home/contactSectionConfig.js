const contactSectionConfig = {
  heading: "¿Necesitas ayuda?",
  message: "Contáctanos para resolver cualquier duda o agendar tu servicio.",
  buttons: [
    {
      text: "Contactar",
      link: "/contact",
      variant: "contained",
      iconName: "ContactMailIcon",
      backgroundColor:"#f5f5f5",
      backgroundColorHover:"#cccccc",
    },
    {
      text: "WhatsApp",
      link: "https://wa.me/56985604468",
      variant: "contained",
      iconName: "WhatsAppIcon",
      backgroundColor:"#61fa52",
      backgroundColorHover:"#59de4b",
    },
  ],
  slides: [
    {
      title: "Bienvenido a Taller Mecánico",
      subtitle: "Especialistas en reparación, mantención y servicios automotrices.",
      buttonText: "Ver Servicios",
      buttonLink: "/services",
      backgroundImage: "assets/common/changing_oil_image.webp",
    },
    {
      title: "Confía tu vehículo a profesionales",
      subtitle: "Más de 15 años de experiencia a tu servicio.",
      buttonText: "Contáctanos",
      buttonLink: "/contact",
      backgroundImage:"assets/common/checking_engine_image.webp",
    },
    {
      title: "Calidad y rapidez garantizadas",
      subtitle: "Trabajamos con las mejores herramientas del mercado.",
      buttonText: "Nuestros Servicios",
      buttonLink: "/services",
      backgroundImage:"assets/common/entrance_shop.webp",
    },
  ],
  // ✅ Agregamos parámetros configurables
  swiperSettings: {
    autoplayDelay: 5000,
    navigationColor: "#FFFFFF",
    navigationHoverColor: "#D1D1D1",
    bulletColor: "rgba(255,255,255,0.4)",
    bulletActiveColor: "#D1D1D1",
  },

  contactInfo: {
    email: "contactofmec@gmail.cl",
    phone: "+56 9 1234 5678",
    address: "Av. Andres Sabella 2616, Antofagasta, Chile",
    extra: "Atendemos de lunes a viernes de 9:00 a 18:00 y sábado de 9:00 a 13:00",
  },
};

export default contactSectionConfig;
