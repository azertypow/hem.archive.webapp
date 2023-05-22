
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: 'https://azertypow.github.io/hem.archive.webapp/',
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
})


