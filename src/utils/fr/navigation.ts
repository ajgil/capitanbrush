// Un tableau de liens pour la barre de navigation
const navBarLinks = [
  { name: "À propos", url: "/fr/about" },
  { name: "Clients", url: "/fr/customers" },
  { name: "Accueil", url: "/fr/" },
  { name: "Contenu", url: "/fr/content" },
  { name: "Témoignages", url: "/fr/testimonials" },
  { name: "Contact", url: "/fr/contact" },
];

// Un tableau de liens pour le pied de page
const footerLinks = [
  {
    section: "Entreprise",
    links: [
      { name: "À propos", url: "/fr/about" },
      { name: "Clients", url: "/fr/customers" },
      { name: "Accueil", url: "/fr/" },
      { name: "Contenu", url: "/fr/content" },
      { name: "Témoignages", url: "/fr/testimonials" },
      { name: "Contact", url: "/fr/contact" },
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
