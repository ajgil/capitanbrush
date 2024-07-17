// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  //{ name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
 // { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentacion", url: "/welcome-to-docs/" },
      { name: "Herramientas y Equipación", url: "/products" },
      { name: "Servicios", url: "/services" },
    ],
  },
  {
    section: "Compañia",
    links: [
      { name: "Acerca de", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Trabajo", url: "#" },
      { name: "Clientes", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};