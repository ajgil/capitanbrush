// Un array de enlaces para la barra de navegación
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Servicios", url: "/services" },
  { name: "Contacto", url: "/contact" },
];

// Un array de enlaces para el pie de página
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "#" },
      { name: "Servicios", url: "/services" },
      { name: "Contacto", url: "/contact" },
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
