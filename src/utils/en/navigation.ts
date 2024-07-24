// An array of links for the navigation bar
const navBarLinks = [
  { name: "About", url: "/en/about" },
  { name: "Customers", url: "/en/customers" },
  { name: "Home", url: "/en/" },
  { name: "Content", url: "/en/content" },
  { name: "Testimonials", url: "/en/testimonials" },
  { name: "Contact", url: "/en/contact" },
  
];

// An array of links for the footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "About", url: "/en/about" },
      { name: "Customers", url: "/en/customers" },
      { name: "Home", url: "/en/" },
      { name: "Content", url: "/en/content" },
      { name: "Testimonials", url: "/en/testimonials" },
      { name: "Contact", url: "/en/contact" },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "Privacy Policy", url: "/en/privacy" },
      { name: "Terms and Conditions", url: "/en/terms" },
    ],
  },
];

// An object of links for social icons
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
