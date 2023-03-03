export default defineNuxtConfig( {
  nitro: {
    preset: 'vercel-edge',
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  },
);
