// An array of links for the navigation bar
const navBarLinks = [
  { name: "Home", url: "/en/" },
  { name: "About", url: "/en/about" },
  { name: "Content", url: "/en/content" },
  //{ name: "Customers", url: "/en/customers" },
  { name: "Contact", url: "/en/contact" },
  { name: "Testimonials", url: "/en/testimonials" },
];

// An array of links for the footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "About", url: "/en/about" },
      { name: "Content", url: "/en/content" },
      { name: "Customers", url: "/en/customers" },
      { name: "Contact", url: "/en/contact" },
      { name: "Testimonials", url: "/en/testimonials" },
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
