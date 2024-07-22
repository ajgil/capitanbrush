import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // Configuración del sitio
  site: "https://ajgil.github.io",
  base: "/",
  
  // Autorización de imágenes remotas
  image: {
    domains: ["images.unsplash.com"],
  },

  // Prefetching
  prefetch: true,

  // Integraciones
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es", // Idioma por defecto: Español
        locales: {
          es: "es",
          en: "en",
          fr: "fr",
        },
      },
    }),
    starlight({
      title: "Capitan Brush",
      defaultLocale: "es",
      locales: {
        es: { label: "Español", lang: "es" },
        en: { label: "Inglés", lang: "en" },
        fr: { label: "Francés", lang: "fr" },
      },
      sidebar: [
        {
          label: "Guías de Inicio Rápido",
          translations: {
            es: "Guías de Inicio Rápido",
            en: "Quick Start Guides",
            fr: "Guides de Démarrage Rapide",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Herramientas y Equipos",
          items: [
            { label: "Guías de Herramientas", link: "tools/tool-guides/" },
            { label: "Cuidado del Equipo", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Servicios de mentoria",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Temas Avanzados",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "https://github.com/ajgil/capitanbrush",
      },
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://capitanbrush.es/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://capitanbrush.es/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],

  // Configuración de salida
  output: "static",

  // Configuraciones experimentales
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },

  // Adaptador de Vercel para sitios estáticos
  
});
