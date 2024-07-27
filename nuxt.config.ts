// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  sourcemap: {
    server: true,
    client: true,
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/login",
      exclude: ["/signup"],
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/supabase"],
});
