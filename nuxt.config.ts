export default defineNuxtConfig( {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  },
);
