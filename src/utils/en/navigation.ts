// An array of links for navigation bar
const navBarLinks = [
    { name: "Home", url: "/en" },
    { name: "Services", url: "/en/services" },
    { name: "Contact", url: "/en/contact" },
  ];
  
  // An array of links for footer
  const footerLinks = [
   
    {
      section: "Company",
      links: [
        { name: "About Us", url: "/en#" },
        { name: "Services", url: "/en/services" },
        { name: "Contact us", url: "/en/contact" },
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
  