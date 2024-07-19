// Un array de enlaces para la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Servicios", url: "/services" },
  { name: "Contacto", url: "/contact" },
];

// Un array de enlaces para el pie de página
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/welcome-to-docs/" },
      { name: "Herramientas y Equipos", url: "/products" },
      { name: "Servicios", url: "/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Carreras", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];

// Un objeto de enlaces para iconos sociales
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://x.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
