// Un tableau de liens pour la barre de navigation
const navBarLinks = [
  { name: "Accueil", url: "/fr/" },
  { name: "À propos", url: "/fr/about" },
  { name: "Contenu", url: "/fr/content" },
  //{ name: "Clients", url: "/fr/customers" },
  { name: "Contact", url: "/fr/contact" },
  { name: "Témoignages", url: "/fr/testimonials" },
];

// Un tableau de liens pour le pied de page
const footerLinks = [
  {
    section: "Entreprise",
    links: [
      { name: "À propos", url: "/fr/about" },
      { name: "Contenu", url: "/fr/content" },
      { name: "Clients", url: "/fr/customers" },
      { name: "Contact", url: "/fr/contact" },
      { name: "Témoignages", url: "/fr/testimonials" },
    ],
  },
  {
    section: "Légal",
    links: [
      { name: "Politique de confidentialité", url: "/fr/privacy" },
      { name: "Conditions générales", url: "/fr/terms" },
    ],
  },
];

// Un objet de liens pour les icônes sociales
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
