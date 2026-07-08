
// https://nuxt.com/docs/api/configuration/nuxt-config

import {siteTitle} from "./global/_params";

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      title: siteTitle,
      meta: [
        {
          name: 'description',
          content: 'Recherche appliquée portant sur des sujets qui couvrent la plupart des champs de la pratique artistique.',
        },

        {
          name: 'apple-mobile-web-app-title',
          content: 'hem - rad',
        },
      ],
      link: [
        {rel:"icon", type:"image/png", href:"/favicon-96x96.png", sizes:"96x96"},
        {rel:"icon", type:"image/svg+xml", href:"/favicon.svg"},
        {rel:"shortcut icon", href:"/favicon.ico"},
        {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        {rel:"manifest", href:"/site.webmanifest"},
      ],
      script: [
        {
          src: 'https://player.ausha.co/ausha-player.js',
        }
      ],
    },
  },
  typescript: {
    shim: true,
    strict: true,
    typeCheck: "build",
  },
  css: [
    "@/assets/___main.scss",
  ],
  modules: [
      "@pinia/nuxt",
  ],
  ssr: false,
})


