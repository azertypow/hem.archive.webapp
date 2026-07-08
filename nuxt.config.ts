
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
        }
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


