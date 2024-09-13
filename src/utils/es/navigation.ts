// Un array de enlaces para la barra de navegación
const navBarLinks = [
  { name: "Sobre mi", url: "/about" },
  { name: "Clientes", url: "/customers" },
  { name: "Embarca en un Mega Yate", url: "/" },
  { name: "Contenido", url: "/content" },
  { name: "Testimonios", url: "/testimonials" },
  { name: "Contacto", url: "/contact" },
];

// Un array de enlaces para el pie de página
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Sobre mi", url: "/about" },
      { name: "Clientes", url: "/customers" },
      { name: "Embarca en un Mega Yate", url: "/" },
      { name: "Contenido", url: "/content" },
      { name: "Testimonios", url: "/testimonials" },
      { name: "Contacto", url: "/contact" },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "Política de privacidad", url: "/privacy" },
      { name: "Términos y condiciones", url: "/terms" },
    ],
  },
];

// Un objeto de enlaces para iconos sociales
const socialLinks = {
  tiktok: "https://www.tiktok.com/@capitanbrush",
  instagram: "https://www.instagram.com/capitan.brush/",
  facebook: " https://www.facebook.com/CapitanBrushh/",
  youtube: "https://www.youtube.com/@CapitanBrush/shorts",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
