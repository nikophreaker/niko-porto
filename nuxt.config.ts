// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-particles",
    "@vesp/nuxt-fontawesome",
    "nuxt-anchorscroll",
  ],
  fontawesome: {
    icons: {
      solid: ['circle', 'calendar', 'check', 'id-badge', 'hand-point-down', 'fa-user', 'fa-bars'],
      regular: [],
      brands: ['facebook', 'twitter', 'instagram', 'linkedin', 'github', 'medium']
    },
    component: 'fa',
    suffix: false,
  },
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },
})