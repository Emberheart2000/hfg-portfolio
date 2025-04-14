import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css', // Bestehende CSS-Datei
    '~/assets/css/fonts/fonts.css', // Neue fonts.css-Datei
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
