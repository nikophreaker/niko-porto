// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-particles",
    "@vesp/nuxt-fontawesome",
    "nuxt-anchorscroll",
    "@nuxt/image"
  ],
  fontawesome: {
    icons: {
      solid: ['circle', 'calendar', 'check', 'id-badge', 'hand-point-down', 'fa-user', 'fa-bars', 'fa-code',
        'fa-laptop-code', 'fa-user-graduate', 'fa-eye', 'fa-briefcase', 'fa-envelope', 'fa-map-location-dot',
        'fa-square-caret-down', 'fa-phone'],
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