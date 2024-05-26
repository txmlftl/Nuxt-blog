// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@vueuse/nuxt', 'nuxt-icon'],
  typescript: {
    strict: false
  },
  devServer: {
    host: "http://localhost",
    port: "3000"
  }
})
