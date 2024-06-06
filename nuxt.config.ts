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
  app:{
    head: {
      title: 'Nuxt-blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      // script:["~/scripts/nIcon.js"]
    }
  },
  css: ['~/assets/css/common.scss'],
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
  },
  // i18n: {
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     fallbackLocale: 'en',
  //   },
  //   strategy: 'no_prefix',
  //   locales: [
  //     {
  //       code: 'en',
  //       name: 'English',
  //       file: 'en.json',
  //     },
  //     {
  //       code: 'de-DE',
  //       name: 'Deutsch',
  //       file: 'de-DE.json',
  //     },
  //     {
  //       code: 'es-ES',
  //       name: 'Español',
  //       file: 'es-ES.json',
  //     },
  //     {
  //       code: 'it',
  //       name: 'Italiano',
  //       file: 'it.json',
  //     },
  //     {
  //       code: 'ja',
  //       name: '日本語',
  //       file: 'ja.json',
  //     },
  //     {
  //       code: 'zh-CN',
  //       name: '简体中文',
  //       file: 'zh-CN.json',
  //     },
  //     {
  //       code: 'pt-PT',
  //       name: 'Português',
  //       file: 'pt-PT.json',
  //     },
  //     {
  //       code: 'pt-BR',
  //       name: 'Português do Brasil',
  //       file: 'pt-BR.json',
  //     },
  //   ],
  //   lazy: true,
  //   langDir: 'internationalization',
  //   defaultLocale: 'en',
  // },
})