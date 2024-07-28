import capImageSrc from "@images/cap_social.png";

export const SITE = {
  title: "Capitan Brush",
  tagline: "Curso exclusivo mega yates",
  description: "Capitanbrush ofrece un cuso exclusivo para trabajar en mega yates Con el curso de Capitanbrush tendrás acceso a la libertad financiera que buscas, navegando por el mundo y visita sitios únicos mientras ganas dinero. Contacta con capitanbrush.",
  description_short: "Mega yates, curso, exclusivo, libertad financiera, todas las respuestas a tus preguntas sobre mega yates.",
  url: "https://capitanbrush.es",
  author: "fitsoftware LLC",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-ES", //en-US
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_ES", //en_US
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Exclusivo curso sobre mega yates`,
  description: "El gran cambio que necesitas en tu vida. Con el curso de Capitanbrush tendrás acceso a la libertad financiera que buscas, navegando por el mundo y visita sitios únicos mientras ganas dinero",
  image: capImageSrc,
};
