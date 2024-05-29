// https://nuxt.com/docs/api/configuration/nuxt-config

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxtjs-naive-ui', '@nuxt/ui', '@vueuse/nuxt', 'nuxt-icon',],
  typescript: {
    strict: false
  },
  devServer: {
    host: "http://localhost",
    port: 3000
  },
  css: ['~/assets/css/common.css'],
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
})